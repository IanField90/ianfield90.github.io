---
layout: default
title: About Me
seo_title: Ian Field | Full-Stack Engineering Team Lead
description: Ian Field is a full-stack engineering team lead working in cybersecurity, with experience in backend architecture and agentic workflows.
permalink: /
redirect_from: /about_me/
image: /assets/ian-portrait.jpg
image_2x: /assets/ian-portrait@2x.jpg
image_alt: Portrait of Ian Field
profile: true
---

<article class="about">
  <header class="about-hero">
    <div>
      <p class="about-label">Full-Stack Engineering Team Lead</p>
      <h1>Ian Field</h1>
      <p class="about-lede">I lead a full-stack team building cybersecurity software and write the backend code that powers it.</p>
      <p>I work with product to decide what to ship, set the technical direction, and build the backend. I hire and mentor engineers, helping them make technical decisions independently and lead projects of their own.</p>
      <ul class="about-actions" aria-label="Find me online">
        <li><a href="https://www.linkedin.com/in/{{ site.linkedin_username }}/">LinkedIn</a></li>
        <li><a href="https://github.com/{{ site.github_username }}">GitHub</a></li>
        <li><a href="{{ '/projects/' | relative_url }}">Personal projects</a></li>
      </ul>
    </div>
    <picture>
      <source type="image/webp" srcset="{{ '/assets/ian-portrait-160.webp' | relative_url }} 160w, {{ '/assets/ian-portrait-320.webp' | relative_url }} 320w" sizes="(max-width: 460px) 80px, (max-width: 480px) 96px, (max-width: 800px) 20vw, 160px">
      <img class="about-portrait" src="{{ page.image | relative_url }}" srcset="{{ page.image | relative_url }} 1x, {{ page.image_2x | relative_url }} 2x" alt="{{ page.image_alt | escape }}" width="220" height="220">
    </picture>
  </header>

  <section class="about-section" aria-labelledby="selected-work">
    <p class="about-label">Experience</p>
    <h2 id="selected-work">What I bring to a team</h2>
    <div class="about-work">
      <div class="about-card">
        <h3>Technical delivery</h3>
        <p>I work with product managers, designers and engineers to agree on scope, make trade-offs explicit and flag delivery risks early. I break complex projects into releases the team can deliver.</p>
      </div>
      <div class="about-card">
        <h3>Backend architecture</h3>
        <p>I design and build APIs and event-driven services. In design reviews, I pay close attention to data contracts, edge cases and what happens when a dependency fails.</p>
      </div>
      <div class="about-card">
        <h3><a href="{{ '/work/platform-modernisation/' | relative_url }}">Platform modernisation</a></h3>
        <p>I planned and carried out NestJS and TypeORM upgrades across more than a dozen services and shared libraries, then coordinated a wider Node.js upgrade. I owned the rollout and contributed to the follow-up release.</p>
      </div>
    </div>
  </section>

  <section class="about-section" aria-labelledby="agentic-development">
    <p class="about-label">How I work</p>
    <h2 id="agentic-development">Agentic workflows</h2>
    <p>I use agentic workflows to accelerate development for work that&rsquo;s too large for a single session. I split the work into focused tasks, save findings so later runs can pick up without repeating work, and use scripts for checks that don&rsquo;t need an AI model. That makes the work easier to resume and the conclusions easier to verify.</p>
    <p>For engineering decisions, I use AI to explore unfamiliar code, compare designs and get a prototype in front of the team sooner. We can test assumptions in code before committing to a design. I make the final technical decisions and verify the changes before they ship.</p>
  </section>

  <section class="about-section about-stack" aria-labelledby="tech-stack">
    <p class="about-label">Engineering</p>
    <h2 id="tech-stack">Technology stack</h2>
    <dl>
      <dt>Backend</dt>
      <dd>TypeScript on Node.js, with NestJS for services and TypeORM for data access.</dd>
      <dt>Data and messaging</dt>
      <dd>PostgreSQL for relational data, Elasticsearch for search, and Apache Kafka for events between services.</dd>
      <dt>Wider platform</dt>
      <dd>React on the frontend and AWS for cloud infrastructure.</dd>
    </dl>
  </section>

  <section class="about-section" aria-labelledby="career">
    <p class="about-label">Career path</p>
    <h2 id="career">From Android and Ruby on Rails to engineering leadership</h2>
    <p>I started my career as an Android developer, building native apps before taking on the Ruby on Rails backends that powered mobile clients. Working on both sides taught me to design versioned APIs around what client apps actually need. Some of my earlier Android and Rails work is on my <a href="{{ '/projects/' | relative_url }}">projects page</a>.</p>
    <p>My earlier security work spans post-quantum security software and verifying the authenticity of photos captured on mobile devices. I&rsquo;m a co-inventor on a patent for distinguishing a photo of a photo from an image of a three-dimensional scene.</p>
  </section>

  <section class="about-section" aria-labelledby="outside-work">
    <h2 id="outside-work">Outside work</h2>
    <p>I enjoy bouldering, dancing Lindy Hop, listening to music and playing video games. <em>Red Dead Redemption 2</em> is a favourite: Arthur Morgan&rsquo;s slow-burning story about loyalty and second chances has stuck with me.</p>
    <p>I like trying new recipes and seeing which ones earn a spot in my regular rotation. I also make time for gardening and mindfulness.</p>
  </section>
</article>
