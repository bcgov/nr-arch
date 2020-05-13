# Natural Resource Ministries Architecture Team

## Architectural Records of Decision Index
https://bcgov.github.io/nr-arch/

## How To's 
[Architectural Decision Records (ADRs) for Natural Resource Ministries (NRM)](https://github.com/bcgov/nr-arch/blob/master/docs/readme.md)


## NRM's Technology Radar
The intent of our use of a Technology Radar is to provide a visualisation on the technology landscape in use in the Natural Resource Ministries in the BC Government.  We built this radar in the open because we anticipate that we will have a wide audience both inside and outside our organization with interest in the content.  Additionally, it enables us to use the [Thoughtworks](https://www.thoughtworks.com/radar/byor) service that generates the visualisation.

Items on the tech radar are only captured if the cost of change is high, or the benefits of standardizing are for the good our organization or our client ministries.

Items are placed into one of for quadrants or categories. __Note:__ _The quadrants are currently draft and subject to change_

* Platform - Things we build software on top of such as OpenShift, Red Hat Linux, Windows, WSO2, Azure, AWS 
* Database - Oracle, SQL Server, Postgres, PostGIS, etc.
* Middleware - Technology used in our on premise datacentre e.g. Apache Tomcat, Oracle WebCenter, Jasper Reports, etc.
* Tools - These can be components, such as software development tools, such as versions control systems or collaboration tools or more generic categories of tools, such as the notion of polyglot persistence.

For each item, we position it in one of four states: __Note:__ _The ring names and descriptions are currently draft and subject to change_

* Current - technology should be the default choice in a technology area
* Emerging - technology we have an increasing interest in and has been evaluated by multiple different teams in proof of concepts, test implementations,etc., and is close to moving to our current ring.
* Evaluate - technology we’re interested in but need to evaluate before recommending as the default choice. Items in this category should have a team willing to sponsor the exploration.
* Avoid - We’ve used this technology in the past, but it’s no longer recommended. This technology could be viewed as holding us back and should be actively removed. Items in this category should have a desired removal date.

Items in our Tech Radar have an expectation that is should be followed where appropriate.  [Technology Radar visualization](https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fraw.githubusercontent.com%2Fbcgov%2Fnr-arch%2Fmaster%2Fdocs%2FIIT-TechnologyRadar.csv)

_CSV source data:_(https://github.com/bcgov/nr-arch/blob/master/docs/IIT-TechnologyRadar.csv)

#### How is the radar built
We use [Thoughtworks Tech Radar](https://radar.thoughtworks.com/) to generate our Tech Radar. The radar is backed by a single CSV file (that should nicely [render](https://help.github.com/en/github/managing-files-in-a-repository/rendering-csv-and-tsv-data)). CSV files are parsed using d3.js so please see their [documentation](https://d3-wiki.readthedocs.io/zh_CN/master/CSV/) for escaping rules. All changes to the Tech Radar should be completed via a PR and merged by someone from IIT Architecture team.

#### Who builds the radar?
Our tech radar is open for anyone to contribute.

Contributions are reviewed by IIT Architecture and/or NRM governance groups like [Technology Architecture Council](https://nrm.sp.gov.bc.ca/sites/NRM/arb/SitePages/Home.aspx) or [Data Architecture Council](https://nrm.sp.gov.bc.ca/sites/NRM/arb/SitePages/Home.aspx) as required.

#### Frequently Asked Questions on Tech Radar
Q. It won't display properly. Help!
A. Common causes for this happening are:
* Leaving blank lines at the bottom (make sure they are removed)
* Forgetting to add column (verify by viewing it in Github's CSV display)
* Bad Escaping
* Can only have 4 quadrants


