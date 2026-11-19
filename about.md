---
layout: default
title: About Me
seo_title: Ian Field | Full-Stack Engineering Team Lead
description: Ian Field is a full-stack engineering team lead with hands-on experience in backend architecture, software delivery and mentoring engineers.
permalink: /about_me/
image: /assets/ian@2x.png
image_alt: Portrait of Ian Field
profile: true
---

<article class="about">
  <header class="about-hero">
    <div>
      <p class="about-label">Full-Stack Engineering Team Lead</p>
      <h1>Ian Field</h1>
      <p class="about-lede">I lead a full-stack engineering team and build the backend systems we ship.</p>
      <p>I work with product to decide what to ship, set the technical direction, and build the backend. I hire and mentor engineers, helping them make technical decisions independently and lead projects of their own.</p>
      <ul class="about-actions" aria-label="Find me online">
        <li><a href="https://www.linkedin.com/in/{{ site.linkedin_username }}/">LinkedIn</a></li>
        <li><a href="https://github.com/{{ site.github_username }}">GitHub</a></li>
        <li><a href="{{ '/projects/' | relative_url }}">Personal projects</a></li>
      </ul>
    </div>
    <img class="about-portrait" src="{{ page.image | relative_url }}" alt="{{ page.image_alt | escape }}" width="220" height="220">
  </header>

  <section class="about-section" aria-labelledby="selected-work">
    <p class="about-label">Experience</p>
    <h2 id="selected-work">What I bring to a team</h2>
    <div class="about-work">
      <div class="about-card">
        <h3>Technical delivery</h3>
        <p>I break complex projects into releases the team can deliver, and stay involved through implementation, rollout and production support.</p>
      </div>
      <div class="about-card">
        <h3>Backend architecture</h3>
        <p>I design and build APIs and event-driven services, with attention to how data moves between systems and how those systems can change over time.</p>
      </div>
      <div class="about-card">
        <h3>Production reliability</h3>
        <p>I&rsquo;ve led incident response, improved database performance and coordinated framework upgrades across multiple services.</p>
      </div>
    </div>
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
  </section>
</article>
