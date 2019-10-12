<template>
  <main class="page-project">
    <header class="site-header-container" style="background-color: #0174C8;">
      <site-header inverse="true"></site-header>
      <div class="hero hero-inverse">
        <div class="hero-text">
          <h2 class="hero-title">Securus</h2>
          <p class="hero-desc">
            Re-architecting, re-branding, and modernizing a core application.
          </p>
        </div>
        <div class="hero-media" style="background: url(/img/home/securus.jpg) no-repeat right 38px">
        </div>
      </div>
    </header>

    <div class="summary-container">
      <div class="summary">
        <p>
          Securus’s Secure Communication Platform (SCP) is used by facilities to monitor inmate communications with the
          outside world and to analyze the conversations for potentially illegal activity.
        </p>
      </div>
    </div>

    <div class="section-container" style="background-color: #f8f8f8;">
      <div class="section pt-64 pb-64">
        <div class="row">
          <div class="col">
            <h3 class="section-title">The Problem.</h3>
          </div>
          <div class="col pl-24">
            <p class="section-desc">
              Features had been layered organically over the years without much thought to the user experience or
              performance. Performance had slowed to a crawl. Users had time to hit search, go make a fresh batch of
              coffee, and take their time coming back, and would find the search hadn&rsquo;t finished yet.
            </p>

            <p class="section-desc">
              The user interface was extremely complicated and confusing. The company brand had become stale and
              dated and didn&rsquo;t refect the company's philosophy.
            </p>
          </div>
          <div class="col pl-24">
            <p class="section-desc">
              Securus needed to overhaul everything: the backend software, the frontend code, the visual design,
              information architecture, and even the branding.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="row">
          <div class="col center">
            <img src="/img/projects/securus/securus-calls.jpg" class="screenshot" alt="">
          </div>
          <div class="col center">
            <h3 class="section-title">Prototyping in Code.</h3>
            <p class="section-desc">
              When I joined the project, the UX  team had been struggling to keep pace with the developers. They had been
              using traditional design tools like Axure, but the developers needed more direct guidance. The team had
              resorted to designing in code using a pair of now defunct online editors. But the code was only barely
              usable and the team continued to fall behind.
            </p>

            <p class="section-desc">
              I set aside a couple of days to develop my own tool. The result of that spike was a tool I named BFF, a
              tongue-in-cheek acronym that stood for Barebones Functional Framework. With BFF, we finally caught up to the
              development team and pushed ahead until we had at least several weeks of backlog for the developers to
              choose from.
            </p>

            <p class="section-desc">
              In addition to building the BFF prototyping tool, I took on others roles over the next year and a half (see
              below).
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="row">
          <div class="col center">

            <table class="data-table">
              <tr>
                <th>Role</th>
                <th>Deliverables</th>
              </tr>
              <tr>
                <td>
                  User Research and Analysis
                </td>
                <td>
                  <ul>
                    <li>Stakeholder interviews and reviews</li>
                    <li>Writing user stories</li>
                    <li>Business Acceptance</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Front-End Design
                </td>
                <td>
                  <ul>
                    <li>Prototype designs in code using BFF every week until the end of the project</li><li>Develop a pattern library</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Graphics Design
                </td>
                <td>
                  <ul>
                    <li>Visual Design For NGSCP application</li>
                    <li>Color Palette</li>
                    <li>Icons</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Front-End Development
                </td>
                <td>
                  <ul>
                    <li>Experiment with new UI libraries</li>
                    <li>Migrate prototype styles to development environment</li>
                    <li>Develop design system (towards the end of the project)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Usability Testing</td>
                <td>
                  <ul>
                    <li>Traveled to multiple sites (including an actual prison) to do on-site usability testing</li>
                    <li>Facilitated usability testing</li>
                  </ul>
                </td>
              </tr>
            </table>

          </div>
          <div class="col center">
            <img src="/img/projects/securus/securus-dashboard.jpg" class="screenshot" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="row">
          <div class="col center">
            <img src="/img/projects/securus/securus-design-system.jpg" class="screenshot" alt="">
          </div>
          <div class="col center">
            <h3 class="section-title">Building a Design System.</h3>
            <p class="section-desc">
              The number of teams working on the project grew from one small team with a handful of developers, to four
              teams: two based out of the Securus office, one based out of Chicago, and another based out of Montreal,
              with a total of over 30 developers.
            </p>

            <p class="section-desc">
              To maintain consistency in the design, and reduce developer frustration, I helped build a design system that
              was eventually maintained by a dedicated team of designers and developers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <site-footer class="site-footer-container inverse" style="background-color: #0174C8;"></site-footer>
    </footer>

  </main>
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from "@/components/SiteFooter.vue";
    export default {
        name: "Securus",
        components: { SiteHeader, SiteFooter }
    }
</script>

<style scoped>
  .screenshot {
    max-width: 100%;
    border: 1px solid rgba(0,0,0,.12);
    box-shadow: 0 1px 25px rgba(0,0,0,.2);
    border-radius: 8px;
  }
</style>
