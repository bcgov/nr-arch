---
title: Modern Application Development IMB's Principles
permalink: /principles

layout: post
sidenav: docs
subnav:
    - text: Guiding Principles
      href: '#guiding-principles-adopted'
    - text: Application Principles
      href: '#application-principles-proposed'
    - text: Architecture Principles
      href: '#architecture-principles-proposed'
    - text: Project Governance Principles
      href: '#project-governance-principles-proposed'
    - text: Technical Principles
      href: '#technical-principles-proposed'
    - text: Infrastructure Principles
      href: '#infrastructure-principles-proposed'
---
Adopting these principles can help to guide your product decisions. Designing and building solutions that are loosely coupled and utilize interfaces for process communication will result in maintainable applications.

The following **proposed** principles offer guiding statements that should be considered in the development of your applications:
- Guiding Principles
- Application Principles
- Architecture Principles
- Project Governance Principles  
- Technical Principles
- Infrastructure Principles  

## Guiding Principles <span style="color:green">\*adopted\*</span>

### Principle 1: Develop Open and Innovative Partnerships 
We recognize that by developing trusted partnerships and collaborating across teams and the ministry, we create opportunities to find new ways of delivering efficient and effective services to program areas. 

### Principle 2: Service Focus
Solutions and services are designed from a client-centered and end-to-end digital service delivery perspective to increase the value they bring to the client. 

### Principle 3: Teamwork and Collaboration 
We will create and empower cross-functional, dynamic teams to increase engagement, communication, talent, and opportunities to deliver value and services to clients. 

### Principle 4: Invest Wisely 
Through effective governance and financial oversight, we will maximize IM/IT spending and optimize our existing investments to support the ministry. 

### Principle 5: Enable a Modern and Innovative Workplace 
We will support collaboration, create efficiencies, and encourage people to work smarter, greener, healthier, and more innovatively so all feel valued and recognized. 

### Principle 6: Continuous Improvement 
We believe in testing early and often. We will do end-to-end testing of processes, services, and technology, continuously improving in response to user feedback. 

### Principle 7: Proactive Approach to Security and Privacy 
We are committed to supporting our clients to adopt a proactive approach to ensuring strong information security and privacy protection practices. By applying a privacy and security by design philosophy, we help our clients ensure that privacy and security measures are considered at project initiation and built in to the solution, rather than having to be retrofitted afterwards.

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

## Application Principles <span style="color:red">\*proposed\*</span>

### Principle 1: Do No Harm
Only build what you can't buy and buy what you can't build.

### Principle 2: Build/Buy Responsibly
Don't contribute to technical debt.

### Principle 3: Be Citizen-Centric
Everything you build is for the greater good. Citizens are the real product owners.

### Principle 4: Today's Build Could Be Tomorrow's Burden
Like building responsibly, think about the effort required to maintain and evolve the application.

### Principle 5: Nature vs. Nurture
An application will only be as good as the effort put into its evolution.

### Principle 6: Sharing Is Caring
Information is a commodity to be shared; build with this in mind.

### Principle 7: Keep It Small
Small code packages and small feature sets make for shorter delivery cycles, fewer changes, and overall better software quality.

### Principle 8: Focus on the Developer
Select the best environment with the right tooling. Endorse a good set of Architecture Principles.

### Principle 9: Develop for Networks
Application communication happens over the network, not in memory. It supports distributed development teams, increases application resiliency, and simplifies product deployment. 

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

## Architecture Principles <span style="color:red">\*proposed\*</span>

### Principle 1: Primacy of Principles
... TOGAF Principles,  OCIO Digital principles, HADF principles

### Principle 2: Adhere to Standards
... OCIO Digital Framework, GCIO, and Ministry Standards

### Principle 3: Adopt a Set of Software Design Principles
Patterns and practices are the tools used to achieve the desired outcome of the principles. Follow fundamental principles for writing quality software such as:
- KISS -  Keep it simple, stupid
- DRY - Don’t repeat yourself
    - Do not duplicate work; this is a frequent source of errors
- YAGNI - You aren’t gonna need it
    - Are you going to need that feature? If not, leave it out
- SoC - Separation of concerns
    - Minimize tight coupling of code by separating core business logic from infrastructure and user interface logic; this will ensure that the module is easy to test and evolve

### Principle 4: Adopt a [Service Oriented Architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture){:target="_blank"}
- Single responsibility
    - Objects should have only one reason to change; this helps to produce more loosely coupled and modular systems
- Bounded context
    - Limit complexity by reducing a solution into separate conceptual modules where, each module represents a context that is separated from other contexts (ie: bounded), and can be evolved independently of one another

### Principle 5: API First
Develop your solution to be used by multiple client applications through a well described API. 

### Principle 6: [Be Data Driven](https://digitalprinciples.org/wp-content/uploads/PDD_Principle-BeDataDriven_v2.pdf){:target="_blank"}

### Principle 7: Design to Be Secure
Design, develop, and deliver solutions that [mitigate risks](https://blog.threatpress.com/security-design-principles-owasp/){:target="_blank"}. Ensure security is addressed end-to-end and considered upfront. 

### Principle 8: Adopt Cloud
Whether public, private, or hybrid cloud, adopt a set of [guiding principles for Cloud Computing and Use](https://www.isaca.org/bookstore/bookstore-wht_papers-digital/whpgp){:target="_blank"}; include enablement, cost/benefit, enterprise risk, capability, accountability, and trust.

### Principle 9: DevOps for Agility
DevOps is founded on product delivery.  Agile is founded on the project's success. Embrace the  combination of the following:
- Continuous integration (including Build management, test management, and automation)
- Continuous delivery (including environment management and deployment management)
- Infrastructure as code
- Iterative development approach to support successful projects

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

## Project Governance Principles <span style="color:red">\*proposed\*</span>
These principles apply to the **ministry governance process for the planning, intake, and approval of IM/IT projects**.

#### Goals of Principles
- These principles will help the project governance team ensure that we understand the scope of the work, and stay focused on outcomes
- The principles should be simple, straightforward, and high-level

### Principle 1: Enable the Right People to Make the Right Decisions at the Right Times

### Principle 2: Be Easy to Understand and Follow

### Principle 3: Be Simple and Efficient, With Each Step Adding Value

### Principle 4: Be Timely

### Principle 5: Add Value for All Stakeholders, While Maximizing the Benefits to the Ministry

### Principle 6: Be Transparent and Enable Decisions That Are Objective and Fair

### Principle 7: Apply a Common Set of Selection Criteria to All Proposed IM/IT Projects

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

## Technical Principles <span style="color:red">\*proposed\*</span>

### Principle 1: Prioritize Principles 
Any decision to ignore or reject core principles, so as to satisfy project goals, must be recorded.

### Principle 2: Adopt Technology Standards That Aid the Business
- Make friends in the business
    - If the business understands why a standard needs to be adopted, they will be more likely to weigh the implications on impacts to their expected outcomes
- Stakeholders drive the adoption of technical standards
    - If a standard is seen as an impediment, then the natural pattern is to seek an exemption. Ensuring stakeholders are aware early on in the project lifecycle helps to develop adoption strategies
- Involve the architects from the start of your project
    - Architects are central to product viability discussions. Engaging them early will mitigate waste in the product development flow

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

## Infrastructure Principles <span style="color:red">\*proposed\*</span>

### Principle 1: Plan for Needed Capacity
Solutions that evolve requirements need to be scalable in order to guarantee performance over the entire product lifecycle. Don’t overcommit up front; validate the ability to meet unexpected system demands.

### Principle 2: Design for Scalability
Adoption and feature growth will result in unforeseen system demands. Ensure that the solution architecture is able to scale. 

### Principle 3: Achieve User Happiness Through System Performance
User expectations will change over time. Ensure that the architecture is adaptable and can satisfy performance demands. Assess how the solution is hosted and its portability.

### Principle 4: Monitoring Enables Your Team
Understand what to monitor. Ensure that the available monitoring system can provide actionable metrics in order to provide the necessary information needed to resolve any issues that can arise. Knowing what can cause performance issues and monitoring for those scenarios will feed the product continuous lifecycle with data.