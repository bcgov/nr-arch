
# The Use of COTS and Saas Architectures Within the NRM

### How to contribute
Government employees, public and members of the private sector are encouraged to contribute to the repository by **forking and submitting a pull request**. 

(If you are new to GitHub, you might start with a [basic tutorial](https://help.github.com/articles/set-up-git) and  check out a more detailed guide to [pull requests](https://help.github.com/articles/using-pull-requests/).)

Pull requests will be evaluated by the repository guardians on a schedule and if deemed beneficial will be committed to the master.

All contributors retain the original copyright to their stuff, but by contributing to this project, you grant a world-wide, royalty-free, perpetual, irrevocable, non-exclusive, transferable license to all users **under the terms of the license under which this project is distributed.**

## Description
For the purposes of this whitepaper, ’COTS and SaaS Architectures’ refers to solutions where
there is a proprietary code-base not under Provincial control; whether these solutions are
extensions/additions to the Sector architecture, or whether they are approved variances from it.
For example, commercial solutions, proprietary systems, free market systems, licensed services
and products.

The Investment Board (IB), formerly called the Architecture Review Board (ARB), wishes to
clarify the consideration factors that go into evaluation of opportunities to use COTS, SaaS or
similar pre-built solutions. IB has directed Technical Advisory Committee (TAC) to evaluate
any such submissions and to consider these factors in determining whether to approve detailed
evaluation of any such solution.

The IB has identified that clarity in the consideration points for these types of solutions would be
helpful for both the TAC in its reviews, but also for the target audience of submitters to the
IB/TAC: Business Portfolio Managers and Sector Architects.

In addition to providing these consideration points, sample types of questions have been
identified in order to provide some guidance to the target audience and facilitate the development
of their submission. The Enterprise Architecture (EA) Principles team has also provided some
significant contributory guidance working under the request of the TAC.

## Evaluation Criteria for Consideration
An evaluation of COTS and SaaS solutions must take into account the particular risks inherent in
these types of solutions for the Natural Resource Sector. Some of these risks include:
  1. Inaccessibility of source code
  2. Difficult to automate the deployment
  3. Lack of control of upgrade cycles and features
  4. Requirement for specialized infrastructure
  5. Difficulty in assessing security
  6. Frequent proprietary or non-standard interfaces
  7. Integration effort
  8. Exit cost
  9. Need for additional requirements once COTS purchased and how to build in the changes
  10. Extended delay due to the Province’s procurement requirements

To manage this risk the TAC will bring additional evaluation effort to risk aspects during the
review of submissions.

The following potential implications will also be factored into a review:
  1. Evaluation will not be based on vendor marketing material; however, marketing materials can be used to identify desired capabilities for which further evaluation is required.
  2. Evaluation should include a full-feature, unrestricted evaluation of the product for 30 days. For COTS, this should include on-site installation.
  3. Because code practices cannot be reviewed, security assessments are made more difficult. Security control checklists, vulnerability assessments, and architectural evaluations should be performed to assess the level of application security and required controls.
  4. Cost and time for evaluation, including installation and prototype configuration to enterprise services (security, client, etc.) is part of the cost of ownership for a product.
  5. Evaluations require full requirements gathering in order to assess fit.
  6. COTS/SaaS may not be considered if only one viable COTS/SaaS system is in the market, in order to protect the Province’s business.
  7. Software quality attributes (ISO 25010) with special relevance in COTS/SaaS assessment and which may be especially (adversely) affected by COTS/SaaS include:
  * Transferability.
  * Modifiability (especially including Reusability, Analyzability, Modification stability and Testability).
  * Compatibility (especially including Replaceability and Interoperability).
  * Security.
  * Efficiency (especially, Scalability).
  8. The use of service intermediaries (service wrappers) for COTS is recommended. 
  
Submissions to the TAC identifying transitional architectures should incorporate the above into
their submission. 

## Future Direction
The TAC will evaluate all submissions for COTS and SaaS solutions. The IB/TAC see the use
of COTS/SaaS in two ways:
  a. Variances/exceptions (a particular COTS/SaaS makes sense in this specific business case
but is not a target part of the NRS architecture – using it in a different line of business
implies another request for variance). An approval of a variance is an instance only.
  b. Extensions (this COTS/SaaS makes sense overall for the NRS and we want to steer
solutions towards it as much as possible).

Additional factors the TAC takes into consideration on these submissions:

Standalone business, now and in the future
  1. Is the information from this solution used in other lines of business?
  2. Does it rely on centralized reporting services?
  3. Does it consume information from elsewhere?
  4. Does another government solution depend on this information?
  5. Does this solution rely on processes or consume processes elsewhere in government?
  6. Is a higher level of integration anticipated in the future? 
  
Meets policies (such as privacy)
  1. OCIO
  2. Privacy – FOIPPA, Information Security Policy (e.g., alignment to cloud security analysis)

Addresses functional requirements
  1. Are the requirements well understood?
  2. What are the implications of potential gaps in requirements to the business?
  3. What is covered in the requirements by this solution vs. what is not (gap-fit)?
  
Addresses nonfunctional requirements (such as integrability, interoperability)
  1. Has there been consideration given to non-functional requirements?
  2. See Appendix A below.
  
Standardized TCO suggests a benefit based on a 5-10 year horizon (including costs and sustainment related to any nonstandard infrastructure)
  1. Have you included things you need to do to address gaps, cost of integration, cost to get out of it, cost of any additional reporting, etc.?
  2. Have you completed a thorough TCO evaluation?
  3. Does it require the use on non-standard technology?
  4. Is dedicated hardware required for this solution?
  5. What are the ongoing costs for this non-standard technology?
  
## Future Considerations for this Document
Consider splitting this document into two discrete documents, one for COTS, one for SaaS.

## Appendix A: Non-Functional (Technical) Requirements

Non-functional requirements (also known as "technical requirements”) specify criteria that can be used to judge the operation of a system, rather than specific behaviours. Based on the ISO/IEC 9126 and subsequent ISO/IEC 25010 standards, the fundamental objective is to address some of the well-known human biases that can adversely affect the delivery and perception of a software development project. These biases include changing priorities after the start of a project or not having any clear definitions of "success." By clarifying, then agreeing on the project priorities and subsequently converting abstract priorities (compliance) to measurable values (output data can be validated against schema X with zero intervention), ISO/IEC 9126/25010 tries to develop a common understanding of the project's objectives and goals.

### Additional reference information can is here:
https://en.wikipedia.org/wiki/ISO/IEC_9126#Developments
The standard is divided into four parts:
* quality model
* external metrics
* internal metrics
* quality in use metrics.

Of particular note for the review of IB/TAC submissions, the following are taken into consideration:

* Functional Suitability - A set of attributes that bear on the existence of a set of functions and their specified properties. The functions are those that satisfy stated or implied needs.
-- Suitability (functional appropriateness)
-- Accuracy (functional correctness)
-- Functional Compliance
-- Functional Completeness

* Reliability - A set of attributes that bear on the capability of software to maintain its level of performance under stated conditions for a stated period of time.
-- Maturity
-- Fault Tolerance
-- Recoverability
-- Reliability Compliance
-- Availability

* Usability - A set of attributes that bear on the effort needed for use, and on the individual assessment of such use, by a stated or implied set of users.
-- Understandability (appropriateness recognizability)
-- Learnability
-- Operability
-- Attractiveness (user interface aesthetics)
-- Usability Compliance
-- User Error Protection
-- Accessibility

* Performance Efficiency - A set of attributes that bear on the relationship between the level of performance of the software and the amount of resources used, under stated conditions.
-- Time Behaviour
-- Resource Utilization
-- Efficiency Compliance
-- Capacity

* Maintainability - A set of attributes that bear on the effort needed to make specified modifications.
-- Analyzability
-- Changeability
-- Stability
-- Testability
-- Maintainability Compliance
-- Modularity
-- Reusability

* Portability - A set of attributes that bear on the ability of software to be transferred from one environment to another.
-- Adaptability
-- Installability
-- Replaceability
-- Portability Compliance

* Compatibility – A set of attributes that bear on the ability of multiple components to exist or function in a system or environment without mutual interference
-- Coexistence
-- Interoperability

* Security – A set if attributes that describe the characteristic or degree of being securable,
especially the ability of a system to provide different levels of secure access.
-- Confidentiality (data accessible only by those authorized)
-- Integrity (protection from unauthorized modification)
-- Non-Repudiation (actions can be proven to have taken place)
-- Accountability (actions can be traced to who did them)
-- Authenticity (identity can be proved to be the one claimed)
