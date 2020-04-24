# 5. OpenJDK

Date: 2020-04-16

## Status

Accepted

## Context

This is a response from IITD Architecture to the IITD Infrastructure Team, and others, for an Official Statement on OpenJDK positioning.

* Status: accepted
* Deciders: Licence Change
* Date: 2020-04-01

Technical Story: [description | <https://apps.nrs.gov.bc.ca/int/jira/browse/ARCH-62]>

## Context and Problem Statement

This is a response from IITD Architecture to the IITD Infrastructure Team, and others, for an Official Statement on OpenJDK positioning.

## Decision Drivers

* An official Information Innovation & Technology Division (IITD) statement is needed on the direction forward for target versions of Java/JDKs for all IITD hosted java applications.  Oracle has changed its licensing model, and will now be using a subscription model for charging for the use of its Oracle Java SE product releases.
* Java SE 8 is the end of the legacy versioning and release cadence model; Java 9 was the new beginning.
* Oracle extended the public updates of its Oracle JDK to January 2019 for commercial production use, and at least the end of 2020 for individual desktop use.
* Oracle JDK should be, for the most part, interchangeable with Oracle’s OpenJDK builds for those who want to move up to the next releases, as they did for Java 6->7 and Java 7->8.
* Java 10 is the suggested release by Oracle
* Oracle has posted more information on the roadmap for the Java Client (including Applets and Web Start).
* Oracle plans to discontinue contributions to the JDK 8 Updates project until January 2019.
* For security reasons, IITD Architecture encourages upgrade/migration of all java applications to at least JDK 11.
* Scope - IITD all server and client side applications owned by IITD that run Java.

## Considered Options

* Endorse migration to OpenJDK
* Continue to use Oracle JDK and pay license fees

## Decision Outcome

JDK 9 & Later
Oracles OpenJDK JDK binaries for Windows, macOS, and Linux are available on release-specific pages of jdk.java.net as .tar.gz or .zip archives.

As an example, the archives for JDK 13 may be found on jdk.java.net/13 and may be extracted on the command line using

$ tar xvf openjdk-13*_bin.tar.gz
or

$ unzip openjdk-13*_bin.zip
depending on the archive type.

### Positive Consequences

* removes the dependencies on Oracle JDK Licensing
* reduces security vulnerabilities of older JDK versions
Java 7 is still in predominant use. It goes without saying that any version of Java below 7 should be updated immediately even version 7 needs significant remediation for its fleet of vulnerabilities.

Further vulnerabilities - 
* <https://www.cvedetails.com/product/19117/Oracle-JRE.html?vendor_id=93> 
*	<https://www.cvedetails.com/product/23642/Oracle-Openjdk.html?vendor_id=93> 


### Negative Consequences

* slow performance may occur
* migration issues will need to be addressed

## Links

Infrastructure SMT Confluence space about  OracleJDK vs OpenJDK  last edits circa March 2019.
https://apps.nrs.gov.bc.ca/int/confluence/display/SMT/OracleJDK+vs+OpenJDK

<https://blogs.oracle.com/java-platform-group/update-and-faq-on-the-java-se-release-cadence>

<https://www.oracle.com/technetwork/java/javase/overview/oracle-jdk-faqs.html>

"The previous Oracle Java SE license model had several options - some free under the Binary Code License (BCL) and some paid under Oracle commercial terms. To simplify and provide full licensing transparency and clarity, Oracle as of Java 9 provides two distinct Java releases:

* Oracle OpenJDK releases under the open source GNU General Public License v2, with the Classpath Exception (GPLv2+CPE) (since Java 9),
and Oracle Java SE product releases, which includes the Oracle JDK for Java 8 and later, and Oracle JRE with Java Web Start in Java 8, under the OTN License Agreement for Java SE. This license permits personal use, development, testing, prototyping, demonstrating and some other uses at no cost.
* If you are an organization used to getting Oracle Java SE binaries at no cost, you can simply continue doing so with Oracles OpenJDK releases available at jdk.java.net. If you are used to getting Oracle Java SE binaries at no cost as a personal user or for development use, then you can continue to get Oracle Java SE releases through java.com (personal users) and the Oracle Technology Network (OTN) (developers). Those wishing to use the Oracle JDK or Oracle JRE for other uses will require a Java SE Subscription. Supported customers of Oracle products can continue to get their Oracle Java SE binaries from My Oracle Support (MOS) or Oracle Software Delivery Cloud (customers), and other locations."

**NOTE:** Many third-party software vendors beside Oracle develop, test and certify their software for Oracle JDK and recommend its use to run their applications. Your application vendor may have an ISV agreement with Oracle to provide you with Java updates to run the application vendors product. If this is the case, you will not need a separate license from Oracle for Java running on the application. Please contact your application vendor to determine whether your application vendor is authorized to distribute Java to you with their application.

## Decision

* Migrate all Java JDK dependencies from Oracle JDK to OpenJDK
* upgrade all older versions to at least JDK 9
