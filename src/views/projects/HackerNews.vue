<template>
  <main class="page-project">
    <header class="site-header-container project-hacker-news inverse">
      <site-header></site-header>
      <div class="hero hero-inverse">
        <div class="hero-text">
          <h2 class="hero-title">Hacker News</h2>
          <p class="hero-desc">
            Designing a better mobile experience for the Hacker news website.
          </p>
        </div>
        <div class="hero-media">
          <img src="/img/home/project-hacker-news.png" alt="">
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
          <img src="/img/projects/hacker-news/hacker-news-workflows.png" class="figure" alt="">
      </div>
    </div>

    <div class="section-container">
      <div class="section">
        <div class="row pt-64 pb-64">
          <div class="col center">
            <img src="/img/projects/hacker-news/hacker-news-home.jpg" class="screenshot" alt="">
          </div>
          <div class="col center">
            <img src="/img/projects/hacker-news/hacker-news-comments.jpg" class="screenshot" alt="">
          </div>
          <div class="col center">
            <img src="/img/projects/hacker-news/hacker-news-navigation.jpg" class="screenshot" alt="">
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
  .cocoa-userflow {
    width: calc(100% - 48px);
    margin: 24px;
  }
</style>
