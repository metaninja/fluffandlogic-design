<template>
  <div class="page-home">
    <header class="site-header-container">
      <site-header></site-header>
      <div class="hero">
        <div class="hero-text">
          <h2 class="hero-title">Hi. I’m Sherif.</h2>
          <p class="hero-desc">
            I’m a seasoned UX designer with a passion for turning incredibly complex business problems into streamlined,
            intuitive, user interfaces. What can I do for you?
          </p>
        </div>
        <div class="hero-media">
          <img src="/img/home/photo-sherif-tariq.jpg" class="hero-sherif" alt="">
        </div>
      </div>
    </header>

    <router-link to="/projects/ezlynx">
      <div class="project-container" style="background-color: #37474F;">
        <div class="project">
          <div class="project-text inverse">
            <h3 class="project-title">
              EZLynx
            </h3>
            <p class="project-desc">
              Designing the next generation EZLynx platform.
            </p>
          </div>
          <div class="project-media media-ezlynx">
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/projects/yobi">
      <div class="project-container inverse" style="background-color: #852DDD;">
        <div class="project">
          <div class="project-media media-yobi"></div>
          <div class="project-text">
            <h3 class="project-title">
              Yobi
            </h3>
            <p class="project-desc">
              Designing an innovative mobile experience for a seed-stage startup.
            </p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/projects/cocoa">
      <div class="project-container cocoa-bg">
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
          <div class="project-media media-cocoa">
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/projects/securus">
      <div class="project-container inverse" style="background-color: #0174C8;">
        <div class="project">
          <div class="project-media media-securus">
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
          <div class="project-media media-onyx">

          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/projects/hackernews">
      <div class="project-container inverse" style="background-color: #F66403;">
        <div class="project">
          <div class="project-media media-hacker-news">
          </div>
          <div class="project-text inverse">
            <h3 class="project-title">
              Hacker News
            </h3>
            <p class="project-desc">
              An experiment in designing a better mobile experience for the Hacker news website.
            </p>
          </div>
        </div>
      </div>
    </router-link>

<!--      <router-link to="/projects/bff">-->
<!--        <div class="project-container inverse" style="background-color: #00305C;">-->
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



<!--      <router-link to="/projects/uptime">-->
<!--        <div class="project-container inverse" style="background-color: #401361;">-->
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

  </div>
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
  .project-text.inverse {
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
    line-height: 1;
    text-transform: uppercase;
  }
  .project-desc {
    font-size: 20px;
  }
  .cocoa-bg {
    background-image: linear-gradient(180deg, #F9E9AB 0%, #F0CF73 100%);
  }
  .media-ezlynx {
    max-width: 90%;
    background: url(/img/projects/ezlynx/ezlynx-policies.png) no-repeat left top;
    height: 584px;
  }
  .media-yobi {
    max-width: 562px;
    height: 629px;
    background: url(/img/home/yobi.png) no-repeat center bottom;
  }
  .media-cocoa {
    max-width: 509px;
    height: 621px;
    background: url(/img/home/cocoa.png) no-repeat center bottom;
  }
  .media-securus {
    max-width: 775px;
    height: 625px;
    background: url(/img/home/securus.png) no-repeat right bottom;
  }
  .media-onyx {
    max-width: 596px;
    height: 549px;
    background: url(/img/home/onyx.jpg) no-repeat center bottom;
  }
  .media-hacker-news {
    max-width: 707px;
    height: 525px;
    background: url(/img/home/hacker-news.jpg) no-repeat center bottom;
  }

  @media only screen and (max-width: 1100px) {
    .hero-sherif {
      max-width: 400px;
      width: 90%;
      height: auto;
    }
    .hero-text {
      width: 90%;
    }
    .project {
      flex-direction: column;
      align-items: center;
      height: auto;
      padding: 48px 20px 0 20px;
    }
    .project-text {
      width: 90%;
    }
    .project-media {
      max-width: 90%;
      background-size: 100%;
      height:450px;
    }
    .project-container.inverse .project {
      flex-direction: column-reverse;
    }
  }
</style>
