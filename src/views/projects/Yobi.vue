<template>
  <main class="page-project">
    <header class="site-header-container inverse project-yobi">
      <site-header></site-header>
      <div class="hero hero-inverse">
        <div class="hero-text">
          <h2 class="hero-title">Yobi</h2>
          <p class="hero-desc">
            Helping a company break out of their niche into a bigger, more profitable, market.
          </p>
        </div>
        <div class="hero-media">
          <img src="/img/home/project-yobi.png" alt="">
        </div>
      </div>
    </header>

    <div class="summary-container">
      <div class="summary">
        <p>
          Yobi is a seed-stage Silicon Valley startup working on building a platform for small businesses to streamline
          their social media efforts so they can spend more time making their small businesses awesome. With Yobi,
          business owners can make phone calls, send and receive text messages, and view all their social media messages
          in one integrated view, without having to switch between multiple apps.
        </p>
      </div>
    </div>

    <div class="section-container" style="background-color: #f8f8f8;">
      <div class="section pt-64 pb-64">
        <div class="row">
          <div class="col">
            <h3 class="section-title">
              But first, they’re going to need funding.
            </h3>
            <p class="section-desc">
              Silicon Valley is awash in incredibly brilliant and hard-working enterpreneurs working on the next big idea.
              To scale their ideas into million (and billion dollar) companies they need funding from venture capitalists
              and other investors so they can build a team and start growing. Yobi’s founder was candid about the problem:
              to secure much needed investment, the pitch had to look amazing. That’s where I came in.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container pt-64 pb-64">
      <div class="section">
        <div class="row">
          <div class="col center">
            <h3 class="section-title">
              The first iteration.
            </h3>
            <p class="section-desc">
              The first idea for Yobi was a desktop or web app. I was able to use my experience designing intuitive UIs for
              complex enterprise apps.
            </p>
          </div>
          <img src="/img/projects/yobi/yobi-desktop.png" class="screenshot" alt="">
          </div>
        </div>
      </div>

    <div class="section-container pt-64 pb-64">
      <div class="section center">
        <div class="row">
          <div class="col center">
            <img src="/img/projects/yobi/yobi-jane-thread-1.png" class="screenshot" alt="">
          </div>
          <div class="col center">
            <h3 class="section-title">
              The future is mobile first.
            </h3>
            <p>
              As the team continued to explore how users would use the app, I referenced some user research I had done
              over the previous year or so. The world is going mobile first. Most Gen Z and Millenial users are going to
              spend to spend their time on mbile devices instead of desktops. So we switched from desktop to mobile.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container pt-64 pb-64">
      <div class="section">
        <div class="row">
          <div class="col center">
            <h3 class="section-title">
              Onboarding has to be dead simple.
            </h3>
            <p class="section-desc">
              For Yobi to succeed, the onboarding experience has to be as easy as possible. A poor onboarding experience
              can result in a lot of support calls before the user has even started to use the app, and that can mean
              angry customers and cancellations. To make sure the Yobi onboarding experience is as painless as possible,
              I had to match the onboarding experience as closely as possible with the user&rsquo;s mental model. I did
              extensive research into various social media apps to understand what users were expecting.
            </p>
          </div>
          <div class="col center">
            <img src="/img/projects/yobi/yobi-first-time-user.png" class="screenshot" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="section-container pt-64 pb-64">
      <div class="section">
        <h3 class="section-title">
          Next, we need a website. And logo. And identity.
        </h3>
        <p class="section-desc">
          In my experience, a seamless brand experience is key in helping people remember your product. For Yobi, The
          brand had to be polished so they could create an incredible pitch deck and rise above the other startup
          pitches. In addition, the founders wanted to get early adopters interested in the product and start signing up.
          For Yobi, I designed an interim logo, designed the website, and settled on a brand color.
        </p>

        <img src="/img/projects/yobi/yobi-website.jpg" class="screenshot" alt="">
      </div>

    </div>


    <footer>
      <site-footer class="site-footer-container inverse" style="background-color: #852DDD;"></site-footer>
    </footer>

  </main>
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from "@/components/SiteFooter.vue";
    export default {
        name: "Yobi",
        components: { SiteHeader, SiteFooter }
    }
</script>
