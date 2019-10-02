<template>
  <main class="page-project">
    <header class="site-header-container inverse" style="background-color: #FF6600;">
      <site-header></site-header>
      <div class="hero hero-inverse">
        <div class="hero-text">
          <h2 class="hero-title">Hacker News</h2>
          <p class="hero-desc">
            Designing a better mobile experience for the Hacker news website.
          </p>
        </div>
        <div class="hero-media" style="background: url(/img/home/hacker-news.jpg) no-repeat center 38px">
        </div>
      </div>
    </header>

<!--    <div class="summary-container">-->
<!--      <div class="summary">-->
<!--        <p>-->

<!--        </p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="section-container" style="background-color: #f8f8f8;">-->
<!--      <div class="section pt-64 pb-64">-->
<!--        <div class="row">-->
<!--          <div class="col">-->
<!--          </div>-->
<!--          <div class="col">-->
<!--            <p class="section-desc">-->

<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->



    <div class="section-container">
      <div class="section center" style="width: auto; max-width: auto;">
        <div class="figure" style="width: auto; max-width: auto;">
          <img src="/img/projects/hacker-news/hacker-news-workflows.png">
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section">
        <div class="row pt-64 pb-64">
          <div class="col center">
            <img src="/img/projects/hacker-news/hacker-news-home.jpg" class="screenshot">
          </div>
          <div class="col center">
            <img src="/img/projects/hacker-news/hacker-news-comments.jpg" class="screenshot">
          </div>
          <div class="col center">
            <img src="/img/projects/hacker-news/hacker-news-navigation.jpg" class="screenshot">
          </div>
        </div>
      </div>
    </div>

    <footer>
      <site-footer class="site-footer-container inverse" style="background-color: #FF6600;"></site-footer>
    </footer>

  </main>
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from "@/components/SiteFooter.vue";
    export default {
        name: "HackerNews",
        components: { SiteHeader, SiteFooter }
    }
</script>

<style scoped>
  .screenshot {
    max-width: 400px;
  }
  .figure {
    margin: 64px 0;
    padding:24px;
    border:1px solid rgba(0,0,0,.24);
    box-shadow: 0 2px 15px rgba(0,0,0,.12);
  }
  .cocoa-userflow {
    width: calc(100% - 48px);
    height: auto;
    margin: 24px;
  }
</style>
