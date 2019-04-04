<template>
  <section class="site-body-content">

    <p class="hero">
      Hello.<br>
      I am a senior user experience designer with over a decade of experience scaling nearly every aspect of user
      experience design from user research to ideation, prototyping, usability testing, visual design, and UI
      engineering.
    </p>

    <ul class="benefits">
      <li class="benefit">
        I’ve worked on agile projects ranging in size from one team with a couple of developers, to multiple
        geographically distributed agile teams.
      </li>
      <li class="benefit">
        I have worked closely with marketing teams to integrate brand and marketing guidance into the design process.
      </li>
      <li class="benefit">
        I have built and maintained design systems to ensure consistency and scale designs to large teams of developers.
      </li>
      <li class="benefit">
        I advise product teams on user centered design and design thinking.
      </li>
      <li class="benefit">
        I’ve introduced usability testing and design systems to multiple companies, and developed tools for my team.
      </li>
    </ul>

    <h2 class="section-title">
      More About Me
    </h2>

    <p class="benefits">I currently manage a small team of UX designers and UI engineers. Together we support about a dozen product managers and product owners and
      nearly a dozen agile development teams split between the United States and India, using a full spectrum of UX methodologies and artifacts. </p>

    <section class="cards">
      <div class="card">
        <router-link to="projects">Here are some projects I’ve worked on.</router-link>
      </div>

      <div class="card">
        <router-link to="projects">Learn more about my process and my history as a UX designer.</router-link>
      </div>

    </section>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>
