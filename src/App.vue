<template>
  <main class="site-container" id="app">
    <router-view></router-view>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
};
</script>

<style lang="scss">
@import "assets/styles/variables";
@import "assets/styles/general";
@import "assets/styles/layout";
@import "assets/styles/header";
@import "assets/styles/typography";
@import "assets/styles/utilities";
</style>
