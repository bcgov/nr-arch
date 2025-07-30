# Natural Resource Ministries Architecture Team
This repo is used to store artifacts which can be shared across multiple platforms from a single source of truth and publicly viewable.

## Project Automation

This repository includes GitHub Actions automation for the [NR Architecture Project Board](https://github.com/orgs/bcgov/projects/257) that automatically manages project timelines:

### Features

- **Automatic Start Date Tracking**: When an issue status is changed to "In Progress", the system automatically adds the current date to the Start Date field
- **Automatic Completion Date Tracking**: When an issue status is changed to "Done" or when a PR that closes an issue is merged, the system automatically adds the current date to the Completed Date field

### Required Project Fields

For the automation to work properly, your GitHub project board must have these custom fields:

1. **Status** (Single select field)
   - Must include options with "progress" or "in progress" in the name for start date tracking
   - Must include options with "done", "completed", or "closed" in the name for completion date tracking

2. **Start Date** (Date field)
   - Field name should contain "start"
   - This will be automatically populated when status changes to "In Progress"

3. **Completed Date** (Date field)
   - Field name should contain "completed", "done", or "finish"
   - This will be automatically populated when status changes to "Done" or when a linked PR is merged

### How It Works

The automation runs:
- When issues are opened, edited, or closed
- When pull requests are opened or closed
- Every 5 minutes via scheduled check (to catch manual project board updates)
- Can be manually triggered via workflow dispatch

### PR-Issue Linking

The automation recognizes these keywords in PR titles and descriptions to automatically mark linked issues as complete:
- `closes #123`, `close #123`, `closed #123`
- `fixes #123`, `fix #123`, `fixed #123`
- `resolves #123`, `resolve #123`, `resolved #123`

When a PR with these keywords is merged, the linked issues will automatically:
1. Have their status changed to "Done"
2. Have their completion date set to the merge date

### Manual Trigger

You can manually run the automation by going to the Actions tab and triggering the "Project Board Automation" workflow.

⚠️ IMPORTANT: The content in this repository is pulled by NRM Confluence. 
    
