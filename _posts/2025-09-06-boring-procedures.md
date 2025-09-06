---
layout: post
title: Boring procedures
subtitle: Combating stressors in the heat of the moment
date: "2025-09-08T19:35:43+0100"
author: Ian Field
tags:
  - Leadership
  - Optimizing
  - Stress
---

The CEO of a company I previously worked at once said that he wanted it to be boring when we were shipping and building things with our toolkit for customers. He likened it to Fast-food workers. They spend their days doing things in the most optimal, practiced way, to deliver food and drinks to paying customers as fast and efficiently as possible.

The word _‘Boring’_ stood out to me. At the time I thought surely we should be engaged and excited, not bored. But thinking further and as I’ve progressed and through my career and now lead a team of talented engineers things have clicked further. Now I have a better understanding of what he meant, although I still don’t think boring is something I’m aiming for.

Boiling it down, for me it’s about procedures. During early stages at a start up so much stuff is manual when it comes to shipping code and fixing production issues. To those less experienced it can be terrifying, even those experienced individuals are aware of risks and can still be apprehensive when it comes to deployments or running scripts on production.

During early stages it’s unlikely to have someone dedicated to this process, someone who’s able to help alleviate much of the pain through automation. There’s a certain luxury of time that is associated to that, and ultimately a cost to the company which is a challenge to justify to company management. What monetary value would you put on your CI/CD pipeline? If your company has not shipped the MVP yet, can it afford that spend? Consider development agility, needing to change the product drastically may make these efforts during early stages redundant.

So what are you left with? Word of mouth, team cohesion, and pressure to get you through. But what’s cheap? Writing up a step by step guide. A peer review. Then go for it! Once it’s written down and not recalled, planned ahead of time and checked over it immediately feels less daunting to do the scary thing. It becomes a practice. Over time it feeds into the automated pipeline and workflows as the team grows and the company matures.

## The low-hanging fruit

### Release checklists

A step by step set of instructions, algorithms anyone?, which will result in a successful deployment. At first it can be useful to have additional notes on gotcha's, but as they're ironed out over time the need and usefulness of these should reduce. This is a key de-stressor, having a guide to follow step by step, 'sign off' stages, and formally write what needs to happen means things aren't missed, forgotten or an after thought. It's a buy-in from all those involved, and can serve as a quick 'get up to speed' if something goes wrong and more people need to be pulled in to solve something promptly.

### Architecture Decision Records (ADRs)

A document that at a glance gives context of a problem, the business and architectural needs of the company at the time, and considered solutions. Ultimately resulting in a decision, offering a point of reference for updates in the future, and to ensure things are not overlooked. There are many different frameworks and tools for this offered on Github. This will help minimize questions in the years later as to why something was done in the particular way. Was there no time to wait? Was it for comfort with a set of tools and skillset of the team at the time? It's easy to judge something as bad at face value, but the context can help foster empathy and move on.

### Incident response

One of the more important things to have established. Atlassian have some public documents as to their own processes. I value this openness, along with a status page you can see just what's gone on behind the scenes to immediately address and issue, and then steps taken to avoid in the future, or schedule discussions with the relevant people.

This is the time where people can have knee jerk reactions, think of a solution but not the consequences and act rashly. Filling in a document here can help the company in a few ways.

#### Identify alert parthways

This can help disect how the alert was discovered, who was involved in discovery, their methods. Was it internal, or a customer? Is there something that needs adjusting in the alerting infrastructure, and how soon is it needed?

#### Document resolution

If the same things are coming up time and time again, is it something that could be automated? Would a script speed this up if there's not time to automate it yet?

#### Timelines

Identify bottlenecks in the system, people and tools. Did this incident affect the SLA? What time of day did it happen, how many users were affected, and how long? All useful tools.

#### Free communication

Linking to a 'living' document can mean those who want to know or need to know can just view and immediately get a handle on the situation without bugging those up to their noses in logs, alerts, and data.

#### Root cause

Later, the information gathered in the document can serve as a starter point to perform root cause analysis when there's more time, not the middle of the night or a weekend, but when others are around to give their input. The five whys can help get you there, but why not write it down. These can serve as a point of accountability, to show and measure improvement over time as the company matures.

#### Backlog analysis

There's a chance that this was something someone had already warned about, possibly written a ticket for, which has been being pushed back and back. Are things being prioritised suitably?

#### Onboarding

How many hoops does a developer need to jump through to be able to make contributions? Does everyone know them all? How much do they change over time? How much time or effort is there that you can set aside to help improve this, and keep it up to date? Onboarding can start with HR, but it'll also help debug things that only 'work on my machine'. You'll find opportunities here to make improvements, which ultimately everyone benefits from. Less time wasted head scratching as to what's wrong with a setup, or a configuration. This tooling becomes extremely valuable over time.

## Wrapping up

These documents should start as lean as possible. You don't want too much friction and pushback from your team when introducing something new, especially something that hasn't been seen as a problem yet. But this friction can help calm things in the heat of the moment, and provide space to reflect. A guide can be a handy wall to lean on in times of high pressure. Giving pause for thought, and improvments over time.
