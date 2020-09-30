---
title: Maintenance and Development
permalink: /maintenanceanddevelopment

layout: post
sidenav: maintenanceanddevelopment
subnav:
  - text: Development Background
    href: '#development-background'
  - text: Resolving and Actioning Issues
    href: '#resolving-and-actioning-issues'
  - text: Small Changes
    href: '#small-changes'
  - text: Big Changes
    href: '#big-changes'
  - text: Developing With Jekyll
    href: '#developing-with-jekyll'
  - text: Structure
    href: '#structure'
---
## Development Background
We developed this website with the [US Web Design System](https://designsystem.digital.gov/whats-new/updates/2019/04/08/introducing-uswds-2-0/){:target="_blank"} in mind. The site is a clone of the [18F US Web Design Jekyll theme](https://github.com/18F/uswds-jekyll){:target="_blank"}  that we modified to fit BC Government branding. The content is hosted on the [bcgov](https://github.com/bcgov){:target="_blank"} collection of repositories.

Some of the changes we made include:
- Replacing all instances of "uswds" to "bcwds"
- Inclusion of the BC Government masthead
- Alteration of the header and footer elements
- Application of the [BC Sans font](https://developer.gov.bc.ca/Typography){:target="_blank"}

## Resolving and Actioning Issues
When actioning an issue, consider [linking your pull request](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue){:target="_blank"}. This not only allows for collaborators to see who is working on what issues, but it also makes it so that the issue is automatically closed when the pull request is merged.

Furthermore, take some time to consider what kind of change you are making. Is it a [small change](#small-changes), or a [big change](#big-changes)? This may determine how you resolve the issue.

## Small Changes
If you are just making small changes to a few words in one file (likely a [Markdown](#a-note-on-markdown) file), then it would be acceptable and easy to use the [GitHub file editor](https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository){:target="_blank"} on the [bcgov repo](https://github.com/bcgov/nr-arch){:target="_blank"}. This is not advisable for larger changes, or if you plan on making changes to multiple pages.

## Big Changes
You will need a foundational understanding of Git and GitHub concepts, such as repos, commits, and pull requests, for submitting larger contributions.

When you submit a contribution for adding, changing, or removing content you will have to submit a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests){:target="_blank"}, which will be reviewed.

If you are making big structural or visual changes to the site, we suggest that you get set up for local development on your computer. This increases efficiency by allowing you to preview the changes you are making in real time, and it reduces the risk of pushing errors to production.

Before proceeding read [this page](https://github.com/18F/uswds-jekyll/blob/master/README.md){:target="_blank"}.

Follow these steps when making big changes:
- Make a [fork](https://help.github.com/en/enterprise/2.13/user/articles/fork-a-repo#:~:text=A%20fork%20is%20a%20copy,point%20for%20your%20own%20idea.) of the [bcgov repo](https://github.com/bcgov/nr-arch){:target="_blank"}
- Enable [GitHub Pages](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site){:target="_blank"} on the forked repo
- [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository){:target="_blank"} the fork to your local machine
- If you want to preview your changes locally:
    - Set up your workstation for [Jekyll development](#developing-with-jekyll)
    - Familiarize yourself with the [structure of the site](#structure)
    - Preview your changes with a local server
- Issue the following commands to push the changes to your forked repo:
~~~~ 
git add . 
git commit -m “Meaningful message about your changes”
git push origin master
~~~~
- Ensure everything looks good on your forked GitHub Pages site
    - *Note: the way GitHub Pages compiles your website may differ than what you see during local development.*
- Make a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests){:target="_blank"}

### A Note on Versioning
If the changes you are making to the site are quite large, consider creating a new version release. Please consult these resources before creating a new version:
- [Version releases with GitHub](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository){:target="_blank"}
- [Version tagging concepts](https://semver.org/){:target="_blank"} 

## Developing With Jekyll
### OS Recommendation
While Jekyll will work on Windows, it is not officially supported by the Jekyll team. If you only have access to Windows, please consider using [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/){:target="_blank"} for development.

### Getting Started
To get started developing with Jekyll, use this [guide](https://jekyllrb.com/docs/){:target="_blank"}. The terminal will be very helpful if you are missing any packages, so be sure to read any error messages in detail.

### A Note on Markdown
The Markdown files that hold the site content live in the “pages” folders. If you are unfamiliar with Markdown, [this](https://www.markdownguide.org/basic-syntax/){:target="_blank"} is a good place to get started.

## Site Structure
The site follows the general structure of a Jekyll site. If you wish to make large structural or navigational changes, the resources below should help you.

*Note: the following list is not exhaustive (as there is a wealth of Jekyll documentation available online), but it should be a good start.*
- [Directory Structure](https://jekyllrb.com/docs/structure/){:target="_blank"}
- [Configuring Site Navigation](https://jekyllrb.com/tutorials/navigation/){:target="_blank"}
- [Variables](https://jekyllrb.com/docs/variables/){:target="_blank"}
- [Includes](https://jekyllrb.com/docs/includes/){:target="_blank"}
- [Layouts](https://jekyllrb.com/docs/layouts/){:target="_blank"}
- [18F Template README](https://github.com/18F/uswds-jekyll/blob/master/README.md){:target="_blank"}

<br>
<br>
<br>
<br>
[Back to the Top](#)
