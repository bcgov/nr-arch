## NRM's Technology Radar
[Technology Radar visualization Conceptual Version Nov 2019](https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fraw.githubusercontent.com%2Fbcgov%2Fnr-arch%2Fmaster%2Fdocs%2FTechRadar%2FIIT-TechnologyRadar.csv) 

[Technology Radar visualization v0.2 - July 2020 Still draft and Work in Progress](https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fraw.githubusercontent.com%2Fbcgov%2Fnr-arch%2Fmaster%2Fdocs%2FTechRadar%2FIIT-TechnologyRadar-V0-2.csv)



The intent of our use of a Technology Radar is to provide a visualisation on the technology landscape in use in the Natural Resource Ministries in the BC Government.  We built this radar in the open because we anticipate that we will have a wide audience both inside and outside of our organization with interest in the content.  Additionally, it enables us to use the [Thoughtworks](https://www.thoughtworks.com/radar/byor) service that generates the visualisation.

Items on the tech radar are only captured if the cost of change is high, or the benefits of standardizing are for the good of our organization or our client ministries.

#### Quadrants
Items are placed into one of four quadrants or categories. We are not wanting to  make a big deal out of our selected quadrant categories. They are really just a way to break up the Radar into topic areas. We don't think it's important which quadrant a blip goes into, unlike the rings - which we think will generate ample opinionated discussion. We are using the same quadrants as the ThoughtWorks example.

__Note:__ _Our selected quadrants are currently draft and subject to change_. 

* **Techniques**. These include elements of a software development process, such as experience design; and ways of structuring software, such as microservices.  

* **Tools**. These can be components, such as databases, software development tools, such as versions control systems or collaboration tools or more generic categories of tools, such as the notion of polyglot persistence.

* **Platforms**. Things we build software on top of such as mobile technologies like iOS, BC Gov HPAS datacentre, OpenShift, Red Hat Linux, Windows, WSO2, Azure, and AWS.

* **Languages and Frameworks**. Languages and frameworks that we use when building products.

#### Rings
For each item, we position it in one of four states:

__Note:__ _Our selected ring names and descriptions are currently draft and subject to change_

* **Adopt**. This technology should be the default choice in a technology area. Within an appropriate context, we think that a blip in the Adopt ring represents something where there is no doubt that it's proven and mature for use.
* **Explore**. Technology we are interested in but needs to evaluated by multiple teams or projects before recommending as the default choice. Items in this category should have a team(s) willing to sponsor the exploration for our use of the technology.
* **Endure**. We have used this technology in the past, but it’s no longer recommended.
* **Retire**. This technology is viewed as holding us back and should be actively removed. Items in this category should have a desired removal date. 

Items in our Tech Radar have an expectation that is should be followed where appropriate.  [Technology Radar visualization](https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fraw.githubusercontent.com%2Fbcgov%2Fnr-arch%2Fmaster%2Fdocs%2FTechRadar%2FIIT-TechnologyRadar.csv)

[CSV source data:](https://github.com/bcgov/nr-arch/blob/master/docs/TechRadar/IIT-TechnologyRadar.csv) 

#### How is our radar built
We use [Thoughtworks Tech Radar](https://radar.thoughtworks.com/) to generate our Tech Radar. The radar is backed by a single CSV file (that should nicely [render](https://help.github.com/en/github/managing-files-in-a-repository/rendering-csv-and-tsv-data)). CSV files are parsed using d3.js so please see their [documentation](https://d3-wiki.readthedocs.io/zh_CN/master/CSV/) for escaping rules. All changes to the Tech Radar should be completed via a pull request and merged by someone from IIT Architecture team.

#### Who builds the radar?
Our tech radar is open for anyone to contribute. Make a pull request to put a blip forward that you think needs to be in IIT's radar.

Contributions are reviewed by the IIT Architecture Team and/or NRM governance groups like [Technology Architecture Council](https://nrm.sp.gov.bc.ca/sites/NRM/arb/SitePages/Home.aspx) or [Data Architecture Council](https://nrm.sp.gov.bc.ca/sites/NRM/arb/SitePages/Home.aspx) as required.

#### Frequently Asked Questions on Tech Radar
Q. It won't display properly. Help!
A. Common causes for this happening are:

* Leaving blank lines at the bottom (make sure they are removed)
* Forgetting to add column (verify by viewing it in Github's CSV display)
* Bad Escaping
* Can only have 4 quadrants
