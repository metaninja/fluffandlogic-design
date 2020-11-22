<template>
  <main class="page-project">
    <header class="site-header-container" style="background-color: #FFA802;">
      <site-header></site-header>
      <div class="hero">
        <div class="hero-text">
          <h2 class="hero-title">Onyx</h2>
          <p class="hero-desc">
            Helping a company break out of their niche into a bigger, more profitable, market.
          </p>
        </div>
        <div class="hero-media">
          <img src="/img/home/project-onyx.png" alt="">
        </div>
      </div>
    </header>

    <div class="summary-container">
      <div class="summary">
        <p>
          Hotels use commissions to build long-term relationships with event managers and event planners and encourage
          them to use their facilities and services in the future. Onyx handled the commissions process and the payment
          back and forth between hotel chains and event managers, freeing up the hotels and event managers to do what
          they do best: ensure the guests have the best experience they can have. .
        </p>
      </div>
    </div>

    <div class="section-container" style="background-color: #f8f8f8;">
      <div class="section pt-64 pb-64">
        <div class="row">
          <div class="col">
            <h3 class="section-title">Six Weeks.</h3>
          </div>
          <div class="col">
            <p class="section-desc">
              That was all the time we were given to do the discovery and design and present a business requirements
              document to the Onyx executive team. I had to carefully schedule every step of my user experience process
              right from the start. The key was to start with the outcome in mind. I then walked back week by week to
              figure out what UX artifacts we would need each week to get to the final deliverable.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="col center">
          <table class="data-table">
            <tr>
              <th>Time</th>
              <th>Stage</th>
              <th>Artifacts</th>
            </tr>
            <tr>
              <td style="white-space: nowrap;">
                Week 1
              </td>
              <td>
                Kick-off and Planning
              </td>
              <td>
                <ul>
                  <li>Vision Board</li>
                  <li>Lean Business Model Canvas</li>
                  <li>Project Model Canvas</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Week 2
              </td>
              <td>
                Discovery
              </td>
              <td>
                <ul>
                  <li>Stakeholder Interviews</li>
                  <li>Product Research</li>
                  <li>Competitive Research</li>
                  <li>Analysis of Onynx Business Model</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Week 3
              </td>
              <td>
                Discovery
              </td>
              <td>
                <ul>
                  <li>Product Research</li>
                  <li>User Interviews</li>
                  <li>Existing User Flows</li>
                  <li>Pain Points and Opportunities</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Week 4
              </td>
              <td>
                Analysis
              </td>
              <td>
                <ul>
                  <li>Personas</li>
                  <li>Journey Map</li>
                  <li>Future Workflows</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Week 5-6
              </td>
              <td>
                Ideation
              </td>
              <td>
                <ul>
                  <li>Coded Prototype</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Week 6
              </td>
              <td>
                Final Presentation
              </td>
              <td>
                <ul>
                  <li>Coded Prototype</li>
                  <li>Business Requirement Document (BRD)</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="section-container pt-64 pb-64">
      <div class="section">
        <p>
          I kicked off the user research by interviewing various users in the events process, including event managers
          on both the hotel and event side. I developed a set of personas and mapped each persona&rsquo;s user flow to
          understand where the pain points were. Below are some of the user flows.
        </p>

        <div class="figure">
          <img src="/img/projects/onyx/onyx-workflow-1.svg" alt="">
        </div>

      </div>
    </div>

    <div class="section-container">
      <div class="section">
        <div class="col pl-24 pr-24">
          I realized that there was much overlap between the various personas involved in the event management workflow.
          I used a journey map to show all that information in an easy-to-digest, scannable way.
        </div>

        <div class="figure">
          <img src="/img/projects/onyx/onyx-journey-map.png" alt="">
        </div>
      </div>
    </div>


    <div class="section-container">
      <div class="section" style="align-items: center">
        <p style="max-width: 640px; text-align: center;">
          To show Onyx what a possible solution could look like, I created a prototype in code using the BFF prototyping
          engine, a prototyping tool that I had developed to help my UX team ideate much faster than was traditionally
          possible (see Securus for additional information).
        </p>
      </div>
    </div>

    <div class="section-container">
      <div class="section">
        <div class="row">
          <div class="col center">
            <img src="/img/projects/onyx/onyx-home.jpg" class="screenshot" alt="">
          </div>
          <div class="col center">
            <img src="/img/projects/onyx/onyx-event.jpg" class="screenshot" alt="">
          </div>
        </div>
      </div>
    </div>

    <footer>
      <site-footer class="site-footer-container inverse" style="background-color: #FFA802;"></site-footer>
    </footer>

  </main>
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from "@/components/SiteFooter.vue";
    export default {
        name: "Onyx",
        components: { SiteHeader, SiteFooter }
    }
</script>

<style scoped>
  .cocoa-userflow {
    width: calc(100% - 48px);
    margin: 24px;
  }
</style>
