---
layout: page
title: Modernising a backend platform
description: How I planned and delivered framework and runtime upgrades across a cybersecurity platform, from service-by-service planning through production rollout.
permalink: /work/platform-modernisation/
nav: false
---

I owned a maintenance release for a cybersecurity platform that needed to update its backend frameworks and runtime across multiple services and shared libraries. The challenge was sequencing changes across repositories, not just updating dependencies in each one.

## What I led

I wrote the maintenance plan and broke the work down by service. I upgraded NestJS and TypeORM across more than a dozen services and shared libraries, then coordinated a wider Node.js upgrade. I also documented the upgrade steps so colleagues could review the changes and carry out their part of the rollout.

## Rollout and follow-up

After Kafka disconnections prompted a rollback, I helped diagnose the issue. During a long-running rebuild, a consumer missed its heartbeat deadline, so Kafka's group coordinator removed it from the consumer group. I added explicit heartbeats during the rebuild as part of the follow-up work.

## What changed

The work brought services and shared libraries onto newer framework and runtime versions. I owned the release from the initial plan through the follow-up, and contributed code at each stage.

[Back to the profile]({{ '/' | relative_url }})
