# Prisoner.Support webserver

## What is this project?

TL;DR This is a wikipedia style platform for political prisoner support nationally.

### The context

All too often, political prisoners are arrested en-masse during times of heavy repression by the state. Moreover, these moments of repression reliably follow eras of emancipatory action by the people. Most recently we can think of the uprisings in the summer of 2020 where thousands were arrested across Turtle Island after storming the streets in response to the historically consistent murder of Black people by police nationally, but this pattern also describes the dynamics present in every moment of state reaction to liberatory action. Think of the state response to the revolutionary struggle of the Black Panthers in the mid-to-late 20th century and the international state responses to land defense actions against on-going colonial efforts like the Keystone Pipeline. When these repressive moments come, we rely on groups of dedicated individuals and teams to track the status of these political prisoners as they are moved through the carceral process.

What charges are they facing? How much needs to be posted for their bail if bail has been set? Where are they being held? When is their next court appearance? What topics do they like to be written about? How does one write to them?

Answering these questions helps friends, family, and anyone else rally support for each prisoner. This support is crucial to showing political prisoners that our collective struggle doesn't need to be divided by the walls of a prison. Having a strong prisoner support infrastructure can also embolden those in the streets to have faith that an arrest won't be their problem to deal with alone. 

Currently, however, prisoner information is often tracked in ad-hoc excel spreadsheets - shared among anti-repression networks on a local level. Sometimes, this information finds its way to an online listing that's maintained by a group of people who may or may not have the capacity to keep up with the changing information of each prisoner. This leaves us with a landscape of out-of-date prisoner listings that serve as clutter for anyone looking to actively support a prisoner they may have personally lost track of. What's more, the informality of these networks of individuals involved in prisoner support can be hard to plug into. Or worse, people living in areas with little anti-repression presence might be stumbling blind trying to do this work in isolation.

### Our proposal

Given the context outlined, we think there needs to be a universal platform for regional anti-repression networks to use while keeping track of prisoners across local contexts. We have colloquially referred to such a platform as "wikipedia but for prisoner support". We can break down what that means in 3 parts:

#### Decentralized editing for centralized content

By *centalized content* we mean that each prisoner has only one page and all prisoner pages are on one platform. Having only one page to represent one prisoner means that relevant support information won't be spread across the internet. For instance, you might currently be able to find an up-to-date address for a prisoner on *listing A* but *listing A* might have no information on the duration left in the prisoner's sentence. Whereas *listing B* might have an up to date sentence duration but out of date address for the prisoner. Our hope is that wide adoption of this platform means that everyone can trust the prisoner's page on our site to be the most exhaustive and up-to-date document on the prisoner's current status.

By *decentralized editing* we mean that each prisoner page is assembled by a group of individuals who may or may not be affiliated with each other in-person. This style of editing is what people refer to when they say "wikipedia can be edited by anyone". In reality, it's not like any stranger can randomly troll a prisoner page by changing a key piece of information to something fake. Rather, anyone can propose edits to a prisoner page and certain trusted and more experienced members (termed "editors") can approve and apply the proposed edits. Anyone can become an editor through consistent helpful interaction with the site. 

In this way, decentralized editing mimics the informality of local, trust-based prisoner support networks while centralized content provides more accessibility for would-be editors to plug into said editing networks to start building trust.

*Why is preserving that type of informal, trust-based network structure important for prisoner support?* Every jurisdiction provides a different context and set of obstacles for anti-repression efforts. The reputation of a given jail; relationships with social workers and lawyers in a given region; the protocols of local court processing -- these can all differ substantially between contexts. This means that the culture around, and process for, keeping prisoner information up-to-date can't and shouldn't be generalized and abstracted. Logistically speaking, having one centralized team keep a national-level list of prisoners up-to-date would be incredibly taxing on all involved. Being able to distribute that work as much as possible while still presenting the information in a central platform helps lighten the load on everyone putting in time to support prisoners. In this way, informal, trust-based networks have proved themselves a scalable model for information gathering across a variety of contexts.

#### Auditable Editing History

By *editing history* we mean a timeline of every edit that's been made to a prisoner's information. For example, if I change the facility that a prisoner is at, that change makes up one edit in a chain of edits since the creation of the prisoner's page. Saving this information provides us with context on how the prisoner's page has developed over time and allows us to role back changes if, say, an incorrect edit made its way onto the page. 

By *auditable* we mean that the editing history can be looked over by anyone at any time. There are multiple reasons one might want to look over the editing history. One reason might be that new information on the page seems incorrect and someone wants to check how it came to updated incorrectly. Maybe in the process of auditing the editing history that person will learn that in fact the information was correct and required a non-obvious citation, or maybe it is truly incorrect information and that person can propose a correct edit referencing the erroneous change so editors can more efficiently deal with correcting the information. For examples of this type of editing, see version control systems like Git.

This type of editing workflow also lowers the accessibility barrier for new would-be editors to pick up where inactive editors left off on any given prisoner. We find it to be an integral part of maintaing the decentralized editing workflow.

#### Technical Support

Finally, the existence of this platform will abstract the more technical obstacles in creating prisoner listings. Whereas currently a non-techy person assembling information on prisoners might only have the option of a platform like wordpress to publish their excel spreadsheet as a prisoner listing -- a process that is still technically time consuming despite being the most accessible option -- this platform would provide a full suite of information organizational tools specifically for prisoner support. This takes the technical onus off anyone's already overwhelming prisoner support to-do list. 

Additionally, wide adoption of this platform allows us to roll out helpful automation tools for the prisoner support process. As a simple example, we can keep track of the average time it takes for a prisoner's facility to be updated when they're pre-trial. Using this information, we can alert relevant editors (anyone who has "saved" a specific prisoner on the platform) whenever we think it's likely that that prisoner's information is out of date. This type of tool helps editors keep track of which information to prioritize verifying and provides a clear entry-point for new would-be editors to start contributing to that prisoner's page. Likewise, we can put a public notice on the prisoner's page, underneath the "facility" entry, alerting anyone who is on the site that this information has not been verified recently. This transparency will let visitors know the reliability of a given prisoner's information and likewise provide clear entry-points for new editors to start contributing.

## Technical rundown

NOTE: DO NOT BUILD, NOT IN A STABLE STATE

Coming soon...
