// Project automation script for GitHub Actions
// This script is called by the GitHub Actions workflow

module.exports = async ({ github, context, core }) => {
  const projectId = "PVT_kwDOAA37OM4A7pNd";

  console.log(`Event: ${context.eventName}, Action: ${context.payload.action}`);

  // Get project fields directly using the project ID
  const projectQuery = `
              query($projectId: ID!) {
                node(id: $projectId) {
                  ... on ProjectV2 {
                    id
                    title
                    fields(first: 50) {
                      nodes {
                        ... on ProjectV2Field {
                          id
                          name
                          dataType
                        }
                        ... on ProjectV2SingleSelectField {
                          id
                          name
                          dataType
                          options {
                            id
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            `;

  try {
    const projectResult = await github.graphql(projectQuery, {
      projectId: projectId,
    });

    const project = projectResult.node;
    console.log(`Found project: ${project.title} (${project.id})`);
    // Find the required fields (case-insensitive with null checks)
    const statusField = project.fields.nodes.find(
      (field) => field.name && field.name.toLowerCase().includes("status")
    );
    const startDateField = project.fields.nodes.find(
      (field) =>
        field.name &&
        field.name.toLowerCase().includes("start") &&
        field.dataType === "DATE"
    );
    const completedDateField = project.fields.nodes.find(
      (field) =>
        field.name &&
        field.dataType === "DATE" &&
        (field.name.toLowerCase().includes("completed") ||
          field.name.toLowerCase().includes("done") ||
          field.name.toLowerCase().includes("finish"))
    );

    console.log(
      "Available fields:",
      project.fields.nodes.map(
        (f) => `${f.name || "No Name"} (${f.dataType || "No Type"})`
      )
    );

    if (!statusField) {
      console.log(
        "Status field not found. Please ensure you have a Status field in your project."
      );
      return;
    }

    if (!startDateField) {
      console.log(
        'Start Date field not found. Please create a date field with "start" in the name.'
      );
      return;
    }

    if (!completedDateField) {
      console.log(
        'Completed Date field not found. Please create a date field with "completed", "done", or "finish" in the name.'
      );
      return;
    }

    console.log(
      `Using fields: Status(${statusField.id}), Start Date(${startDateField.id}), Completed Date(${completedDateField.id})`
    );
    // Find "In Progress" and "Done" option IDs (case-insensitive with null checks)
    const inProgressOption = statusField.options?.find(
      (opt) =>
        opt.name &&
        (opt.name.toLowerCase().includes("active") ||
          opt.name.toLowerCase().includes("in progress") ||
          opt.name.toLowerCase() === "doing")
    );
    const doneOption = statusField.options?.find(
      (opt) =>
        opt.name &&
        (opt.name.toLowerCase() === "done" ||
          opt.name.toLowerCase() === "completed" ||
          opt.name.toLowerCase() === "closed")
    );
    console.log(
      "Status options:",
      statusField.options?.map((o) => o.name || "No Name")
    );
    console.log(
      `In Progress option: ${inProgressOption?.name}, Done option: ${doneOption?.name}`
    );

    const currentDate = new Date().toISOString().split("T")[0];

    // Handle different event types
    if (
      context.eventName === "issues" ||
      context.eventName === "schedule" ||
      context.eventName === "workflow_dispatch"
    ) {
      console.log("Checking all project items for status updates...");

      // Get all project items
      const allItemsQuery = `
                  query($projectId: ID!) {
                    node(id: $projectId) {
                      ... on ProjectV2 {
                        items(first: 100) {
                          nodes {
                            id
                            fieldValues(first: 50) {
                              nodes {
                                ... on ProjectV2ItemFieldSingleSelectValue {
                                  field {
                                    ... on ProjectV2SingleSelectField {
                                      id
                                      name
                                    }
                                  }
                                  optionId
                                  name
                                }
                                ... on ProjectV2ItemFieldDateValue {
                                  field {
                                    ... on ProjectV2Field {
                                      id
                                      name
                                    }
                                  }
                                  date
                                }
                              }
                            }
                            content {
                              ... on Issue {
                                id
                                number
                                title
                              }
                              ... on PullRequest {
                                id
                                number
                                title
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                `;

      const allItemsResult = await github.graphql(allItemsQuery, {
        projectId: project.id,
      });

      const items = allItemsResult.node.items.nodes;
      console.log(`Found ${items.length} project items`);

      for (const item of items) {
        const currentStatus = item.fieldValues.nodes.find(
          (value) => value.field?.id === statusField.id
        );

        const startDateValue = item.fieldValues.nodes.find(
          (value) => value.field?.id === startDateField.id
        );

        const completedDateValue = item.fieldValues.nodes.find(
          (value) => value.field?.id === completedDateField.id
        );

        // Update start date if moved to "In Progress" and no start date exists
        if (
          (currentStatus?.optionId === inProgressOption?.id || currentStatus?.optionId === doneOption?.id) &&
          !startDateValue?.date
        ) {
          console.log(`Setting start date for item: ${item.content?.title}`);

          const updateStartMutation = `
                      mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $date: Date!) {
                        updateProjectV2ItemFieldValue(input: {
                          projectId: $projectId
                          itemId: $itemId
                          fieldId: $fieldId
                          value: { date: $date }
                        }) {
                          projectV2Item {
                            id
                          }
                        }
                      }
                    `;

          await github.graphql(updateStartMutation, {
            projectId: project.id,
            itemId: item.id,
            fieldId: startDateField.id,
            date: currentDate,
          });

          console.log(
            `✅ Added start date ${currentDate} to item: ${item.content?.title}`
          );
        }

        // Update completed date if moved to "Done"
        if (
          currentStatus?.optionId === doneOption?.id &&
          !completedDateValue?.date
        ) {
          console.log(
            `Setting completed date for item: ${item.content?.title}`
          );

          const updateCompletedMutation = `
                      mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $date: Date!) {
                        updateProjectV2ItemFieldValue(input: {
                          projectId: $projectId
                          itemId: $itemId
                          fieldId: $fieldId
                          value: { date: $date }
                        }) {
                          projectV2Item {
                            id
                          }
                        }
                      }
                    `;

          await github.graphql(updateCompletedMutation, {
            projectId: project.id,
            itemId: item.id,
            fieldId: completedDateField.id,
            date: currentDate,
          });

          console.log(
            `✅ Added completed date ${currentDate} to item: ${item.content?.title}`
          );
        }
      }
    }

    // Handle PR closure - find linked issues and mark as done
    if (
      context.eventName === "pull_request" &&
      context.payload.action === "closed" &&
      context.payload.pull_request.merged
    ) {
      console.log("Processing merged PR...");
      const prNumber = context.payload.pull_request.number;
      const prBody = context.payload.pull_request.body || "";
      const prTitle = context.payload.pull_request.title || "";

      // Look for issue references in PR body and title
      const issuePattern =
        /(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)\s*#(\d+)/gi;
      const matches = [
        ...prBody.matchAll(issuePattern),
        ...prTitle.matchAll(issuePattern),
      ];

      console.log(
        `Found ${matches.length} issue references in PR #${prNumber}`
      );

      for (const match of matches) {
        const issueNumber = parseInt(match[1]);
        console.log(`Processing linked issue #${issueNumber}`);

        try {
          // Find project items for this issue
          const issueProjectQuery = `
                      query($org: String!, $repo: String!, $issueNumber: Int!, $projectNumber: Int!) {
                        organization(login: $org) {
                          projectV2(number: $projectNumber) {
                            items(first: 100) {
                              nodes {
                                id
                                content {
                                  ... on Issue {
                                    number
                                    repository {
                                      name
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    `;

          const issueProjectResult = await github.graphql(issueProjectQuery, {
            org: orgName,
            repo: context.repo.repo,
            issueNumber: issueNumber,
            projectNumber: projectNumber,
          });

          const projectItems =
            issueProjectResult.organization.projectV2.items.nodes;
          const issueItem = projectItems.find(
            (item) =>
              item.content?.number === issueNumber &&
              item.content?.repository?.name === context.repo.repo
          );

          if (issueItem && doneOption) {
            console.log(
              `Found project item for issue #${issueNumber}: ${issueItem.id}`
            );

            // Update status to Done
            const updateStatusMutation = `
                        mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $optionId: String!) {
                          updateProjectV2ItemFieldValue(input: {
                            projectId: $projectId
                            itemId: $itemId
                            fieldId: $fieldId
                            value: { singleSelectOptionId: $optionId }
                          }) {
                            projectV2Item {
                              id
                            }
                          }
                        }
                      `;

            await github.graphql(updateStatusMutation, {
              projectId: project.id,
              itemId: issueItem.id,
              fieldId: statusField.id,
              optionId: doneOption.id,
            });

            // Update completed date
            const updateCompletedMutation = `
                        mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $date: Date!) {
                          updateProjectV2ItemFieldValue(input: {
                            projectId: $projectId
                            itemId: $itemId
                            fieldId: $fieldId
                            value: { date: $date }
                          }) {
                            projectV2Item {
                              id
                            }
                          }
                        }
                      `;

            await github.graphql(updateCompletedMutation, {
              projectId: project.id,
              itemId: issueItem.id,
              fieldId: completedDateField.id,
              date: currentDate,
            });

            console.log(
              `✅ Marked issue #${issueNumber} as done with completion date ${currentDate}`
            );
          } else {
            console.log(
              `No project item found for issue #${issueNumber} or Done status not available`
            );
          }
        } catch (error) {
          console.error(
            `Error processing issue #${issueNumber}:`,
            error.message
          );
        }
      }
    }
  } catch (error) {
    console.error("Error in project automation:", error.message);
    console.error("Full error:", error);

    // If project 257 is not found, try to find it by listing all projects
    if (
      error.message.includes(
        "Could not resolve to a ProjectV2 with the number 257"
      )
    ) {
      console.log("Project #257 not found. This could mean:");
      console.log("1. The project number is incorrect");
      console.log("2. The project is private and the token lacks access");
      console.log("3. The project belongs to a different organization");
      console.log("");
      console.log(
        "Please check the project URL: https://github.com/orgs/bcgov/projects/257"
      );
      console.log("And verify the project number in the URL is correct.");
      console.log("");
      console.log(
        "Available projects are listed above. Please update the projectNumber variable"
      );
      console.log(
        "in the workflow file to match one of the available project numbers."
      );
    }
  }
};
