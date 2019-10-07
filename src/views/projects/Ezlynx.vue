<template>
  <main class="page-project">
    <header class="site-header-container inverse" style="background-color: #37474F;">
      <site-header></site-header>
      <div class="hero hero-inverse">
        <div class="hero-text">
          <h2 class="hero-title">EZLynx</h2>
          <p class="hero-desc">
            Designing the next generation EZLynx platform.
          </p>
        </div>
        <div class="hero-media">
          <div style="background: url(/img/projects/ezlynx/ezlynx-policies.png) no-repeat left top; width: 100%; height: 455px; box-shadow: 0 -5px 25px rgba(0,0,0,.48)"></div>
        </div>
      </div>
    </header>

    <div class="summary-container">
      <div class="summary">
        <p>
          This section is still a work in progress. But, if you're wondering if I can take the most complex enterprise
          workflows and turn them into streamlined, intuitive, interfaces (in this case personal and commercial
          workflows for independent insurance agents), the answer is yes. Yes, I can.
          For more details on this project, including workflows and how many hundreds of mockups, conversations with
          developers, product managers, product owners, and executives I had to have to get to this point,
          <a href="mailto:sherif.tariq@gmail.com">contact me</a>.
        </p>
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <img src="/img/projects/ezlynx/ezlynx-certs.png" class="screenshot">
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <img src="/img/projects/ezlynx/ezlynx-policies.png" class="screenshot">
      </div>
    </div>

    <footer>
      <site-footer class="site-footer-container inverse" style="background-color: #37474F;"></site-footer>
    </footer>

  </main>
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from '@/components/SiteFooter.vue';
    export default {
        name: "Ezlynx",
        components: { SiteHeader, SiteFooter }
    }
</script>

<style scoped>
  .screenshot {
    max-width: 100%;
    height: auto;
    box-shadow: 0 5px 25px rgba(0,0,0,.24);
  }
  .figure {
    margin: 64px 0;
    padding:24px;
    border:1px solid rgba(0,0,0,.24);
    box-shadow: 0 2px 15px rgba(0,0,0,.12);
  }
</style>
