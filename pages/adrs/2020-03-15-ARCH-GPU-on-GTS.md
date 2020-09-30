---
layout: default
title: 2020-03-14. ARCH Gpu on gts
parent: adrs
has_children: false
layout: post
sidenav: docs
---
# 2020-03-14. ARCH Gpu on gts

Date: 2020-03-14

## Status

proposed/exploratory

## Context

The issue motivatina# [Do we need more GPUs to support a growth in ArcGIS Pro GTS usage?]

* Status: [proposed / exploratory] - optional
* Deciders: [Scott Sharp, Michelle Douville, Jeff Card, David Ell] - optional
* Date: [2020-03-22] - optional

Technical Story: [description | ticket/issue URL] - optional

* ArcGIS Pro is the main use case for GPU(s)
* IITD maintain servers with ArcGIS Pro on them currently as part of a proof on concept - there are currently two GPUs on 2 test servers.
* Only NVIDIA provides what ESRI recommends. <https://desktop.arcgis.com/en/arcmap/latest/extensions/arcglobe/faqs-for-selecting-graphics-cards-globe.htm>
* From ESRI Dev Summit - NVIDIA as concurrent licensing model is not cheap. and has Convoluted subscription levels..
* Scott Sharp is to Email on what the costs are.. And its not published - HP needs to provide the costs?

M60 in Calgary ($10000) 2 chips can only see one 16GB memory and in accessible already obsolete,
P4 ($3000 single newer cheaper/ with concurrent use) in Kamloops with test license manager and unlimited key.. Used when load testing occurs.
GPU could be use as well for other things than graphical, such as mining, processes, that requires heaving processing
ENV MIKE 00 - used for flood modelling.
Firewall has been opened to run on desktops as well, GPU is the faster for processing, more iteration. (license  manager on local PC, and run desktop, CPU based on GPU)..
ArcGIS PRO use case

* 2D data, no GPU will use CPU, heavy CPU.. On GTS, load test with raw LIDAR, from Harold Steiner:

4 people without GPU spinning it around..
11 people with a GTS and still responsive.  Mark McGirr building geoprocessing tool (statusing tool - built in AGO, needs to be built in QGIS as a comparison)..

Current Status -

8 servers with ArcGIS Pro may require a GPU, metrics uptake for Pro not as high as anticipated.

* There are currently 28 concurrent max users in ArcGIS Pro pool .

Most users are still on ArcGIS Desktop, Scott is upgrading to ArcGIS 10.8 (EOL 2026 which may be the last veresion),

18 servers in production for Desktop (10.6, 10.3) - 10 years max we will still have Desktop.. P
Patches to update 10.8 - 10x more concurrent users on Desktop..
QGIS is on all servers 27 servers with 26 Distinct users.. (not concurrent)

2200 unique IDS, 1400 GTS, 700 BCTS, the rest are stand alone licenses.

GPU is around $4000 for concurrent licenses - need more info on this and perhaps David Ell has other options.

Citrix Licensing adds another trickiness level:

ZENAPP and ZENDesktop, - (ZENAPP) 1st come and served on server..
GPU will be fully available for one server and only see on core, and affect all users on server.
(ZENDESKTOP - allows you to divy up resources BUT it interferes with HPAs agreement as it essentially creates a VM to handle requires. Good for power user, not great for others.

Ideal Statues..

GPU for Pro, cards are 8GB - 1 GB per user, ZENAPP/ZENDesktop (ESRI doesn't recommend using it will not support it).

unknown costs of GPU licensing
OCIO has offered - SAG - little desktops for another Ministry using not citrix, but another VM ware.

BCTS 9 servers - ArcGIS - flipping switching and going PRO and their pool may want GPU.. Carol Gjetturd.. (admin of pool)..- Harry and Scott to LRM, oracle, desktop. BCTS specific tools were done by Carole.. 3 more years amortization, brand new GPU would be a waste. Server 2012. (single vs concurrent price comparison)..

$170 advanced desktop - vs GTS pool.. Deal with patching, licensing, versions, latency to file shares

Using licensing manager.. 17-22 standalone..BCTS/WF/PTSG/HAIDA GWAII...

COP discussed PRO vs Desktop - training, access, GeoBC has a lot of stand alone PRO..
ArcGIS ArcGIS Online -GEOBC -  licenses.. DataBC - disabled theirs.

2 GPU (in place) isolated prod and test.

Concurrent license manager vs manager

Frank Burkheart and David Ell

## Context and Problem Statement

[Describe the context and problem statement, e.g., in free form using two to three sentences. You may want to articulate the problem in form of a question.]

## Decision Drivers - optional

* [driver 1, e.g., a force, facing concern, ...]
* [driver 2, e.g., a force, facing concern, ...]
* ... - numbers of drivers can vary

## Considered Options

* [option 1]
* [option 2]
* [option 3]
* ... - numbers of options can vary

## Decision Outcome

Chosen option: "[option 1]", because [justification. e.g., only option, which meets k.o. criterion decision driver | which resolves force force | ... | comes out best (see below)].

### Positive Consequences - optional

* [e.g., improvement of quality attribute satisfaction, follow-up decisions required, ...]
* ...

### Negative Consequences - optional

* [e.g., compromising quality attribute, follow-up decisions required, ...]
* ...

## Pros and Cons of the Options - optional

### [option 1]

[example | description | pointer to more information | ...] - optional

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* ... - numbers of pros and cons can vary

### [option 2]

[example | description | pointer to more information | ...] - optional

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* ... - numbers of pros and cons can vary

### [option 3]

[example | description | pointer to more information | ...] - optional

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]

## Links - optional

* [Link type] [Link to ADR] - example: Refined by [ADR-0005](0005-example.md)
* ... - numbers of links can vary g this decision, and any context that influences or constrains the decision.

## Decision

The change that we're proposing or have agreed to implement.

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
