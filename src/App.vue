<template>
  <main class="site-container" id="app">
    <site-header></site-header>
      <router-view/>
    <site-footer></site-footer>
  </main>
</template>

<script>
// @ is an alias to /src
import SiteHeader from "@/components/site-header.vue";
import SiteFooter from "@/components/site-footer.vue";

export default {
  name: "home",
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>

<style lang="scss">
@import "assets/styles/variables";
@import "assets/styles/general";
@import "assets/styles/site";
@import "assets/styles/site-header";
@import "assets/styles/site-footer";
@import "assets/styles/site-body";
</style>
