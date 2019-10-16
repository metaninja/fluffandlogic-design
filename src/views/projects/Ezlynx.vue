<template>
  <main class="page-project">
    <header class="site-header-container inverse project-ezlynx">
      <site-header></site-header>
      <div class="hero hero-inverse">
        <div class="hero-text">
          <h2 class="hero-title">EZLynx</h2>
          <p class="hero-desc">
            Designing the next generation EZLynx platform.
          </p>
        </div>
        <div class="hero-media">
          <img src="/img/home/project-ezlynx.png" alt="">
        </div>
      </div>
    </header>

    <div class="summary-container">
      <div class="summary">
        <p>
          This section is still a work in progress. But, if you&rsquo;re wondering if I can take the most complex enterprise
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
        <img src="/img/projects/ezlynx/cert-user-flow.jpg" class="figure" alt="">
      </div>
    </div>

    <div class="section-container">
      <div class="section">
        <div class="row">
          <div class="col center pl-24 pr-24">
            <img src="/img/projects/ezlynx/cert-master-wireframe.png" class="figure" alt="">
          </div>
          <div class="col center pl-24 pr-24">
            <img src="/img/projects/ezlynx/cert-new-workflow.png" class="figure" alt="">
          </div>
        </div>
      </div>
    </div>


    <div class="section-container">
      <div class="section">
        <img src="/img/projects/ezlynx/ezlynx-certs.png" class="screenshot" alt="">
      </div>
    </div>

    <div class="section-container">
      <div class="section">
        <img src="/img/projects/ezlynx/ezlynx-policies.png" class="screenshot" alt="">
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
</style>
