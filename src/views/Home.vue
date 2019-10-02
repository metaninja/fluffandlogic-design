<template>
  <main class="page-home">
    <header class="site-header-container">
      <site-header></site-header>
      <div class="hero">
        <div class="hero-media">
          <img src="/img/home/photo-sherif-tariq.jpg">
        </div>
        <div class="hero-text">
          <h2 class="hero-title">Hi. I’m Sherif.</h2>
          <p class="hero-desc">
            I’m a seasoned UX designer with a passion for turning incredibly complex business problems into streamlined,
            intuitive, user interfaces. What can I do for you?
          </p>
        </div>
      </div>
    </header>

      <router-link to="/projects/cocoa">
        <div class="project-container" style="background-color: #F0CF73;">
          <div class="project">
            <div class="project-text">
              <h3 class="project-title">
                Cocoa
              </h3>
              <p class="project-desc">
                An experiment in branding and app design, exploring the future of commercial  insurance software for
                Gen Z.
              </p>
            </div>
            <div class="project-media" style="background: url(/img/home/cocoa.jpg) no-repeat center bottom">
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/projects/securus">
        <div class="project-container color-inverse" style="background-color: #0174C8;">
          <div class="project">
            <div class="project-media" style="background: url(/img/home/securus.jpg) no-repeat right bottom">
            </div>
            <div class="project-text">
              <h3 class="project-title">
                Securus
              </h3>
              <p class="project-desc">
                Re-architecting, re-branding, and modernizing a core application.
              </p>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/projects/onyx">
        <div class="project-container" style="background-color: #FFA802;">
          <div class="project">
            <div class="project-text">
              <h3 class="project-title">
                Onyx
              </h3>
              <p class="project-desc">
                Helping a company break out of their niche into a bigger, more profitable, market.
              </p>
            </div>
            <div class="project-media" style="background: url(/img/home/onyx.jpg) no-repeat center bottom">

            </div>
          </div>
        </div>
      </router-link>

<!--      <router-link to="/projects/bff">-->
<!--        <div class="project-container color-inverse" style="background-color: #00305C;">-->
<!--          <div class="project">-->
<!--            <div class="project-media" style="background: url(/img/home/bff.png) no-repeat center bottom">-->
<!--            </div>-->
<!--            <div class="project-text">-->
<!--              <h3 class="project-title">-->
<!--                BFF-->
<!--              </h3>-->
<!--              <p class="project-desc">-->
<!--                A rapid prototyping framework for UX designers.-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </router-link>-->

      <router-link to="/projects/hackernews">
        <div class="project-container color-inverse" style="background-color: #F66403;">
          <div class="project">
            <div class="project-text">
              <h3 class="project-title">
                Hacker News
              </h3>
              <p class="project-desc">
                An experiment in designing a better mobile experience for the Hacker news website.
              </p>
            </div>
            <div class="project-media" style="background: url(/img/home/hacker-news.jpg) no-repeat center bottom">
            </div>
          </div>
        </div>
      </router-link>

<!--      <router-link to="/projects/uptime">-->
<!--        <div class="project-container color-inverse" style="background-color: #401361;">-->
<!--          <div class="project">-->
<!--            <div class="project-media" style="background: url(/img/home/uptime.png) no-repeat center center">-->
<!--            </div>-->
<!--            <div class="project-text">-->
<!--              <p class="project-desc">-->
<!--                Experimental branding for an environmental control company that I worked for years ago.-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </router-link>-->

    <footer>
      <site-footer class="site-footer-container"></site-footer>
    </footer>

  </main>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: "home",
  components: { SiteHeader, SiteFooter }
};
</script>

<style lang="scss">
  .project-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-container.color-inverse {
    color: #fff;
  }
  .project {
    width: 100%;
    max-width: 1440px;
    height: 648px;
    display: flex;
    justify-content: space-between;
  }
  .project-text,
  .project-media {
    width: 50%;
  }
  .project-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
  }
  .project-title {
    font-size: 48px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
  .project-desc {
    font-size: 20px;
  }
</style>
