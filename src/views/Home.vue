<template>
  <section class="site-body-content">

    <p class="hero">
      Hello.<br>
      I am a senior user experience designer with over a decade of experience scaling nearly every aspect of user experience design from user research to ideation, prototyping, usability testing, visual design, and UI engineering.
    </p>

    <ul class="benefits">
      <li class="benefit">
        I’ve worked on agile projects ranging in size from one team with a couple of developers to multiple agile teams each with their own sprints and schedules.
      </li>
      <li class="benefit">
        I have collaborated with marketing teams to integrate brand and marketing guidance into the design process.
      </li>
      <li class="benefit">
        I have introduced pattern libraries and design systems to ensure consistency and scale designs to large teams of developers.
      </li>
      <li class="benefit">
        I have advised product teams on user experience research and ideation.
      </li>
      <li class="benefit">
        I am a problem solver. I’ve introduced usability testing and design systems to multiple companies, and even developed tools for my team to be more productive.
      </li>
    </ul>

    <h2 class="section-title">
      More About Me
    </h2>

    <section class="cards">
      <div class="card">
        <router-link to="projects">Here are some projects I’ve worked on.</router-link>
      </div>

      <div class="card">
        <router-link to="projects">Learn more about my process and my history as a UX designer.</router-link>
      </div>

      <div class="card">
        <router-link to="projects">Ready to talk? Here’s where you can find me.</router-link>
      </div>

    </section>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>
