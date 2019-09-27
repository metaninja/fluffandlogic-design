<template>
    <section class="site-header">
        <a href="/">
            <h1 class="site-brand">
                Fluff &amp; Logic
            </h1>
        </a>

        <nav class="site-nav" v-bind:class="{ inverse: inverse}">
            <router-link to="/" class="site-nav-link">Home</router-link>
            <router-link to="about" class="site-nav-link">About</router-link>
            <router-link to="contact" class="site-nav-link">Contact</router-link>
        </nav>
    </section>
</template>

<script>
export default {
  name: "SiteHeader",
  props: ["inverse"]
};
</script>

<style scoped>
.inverse,
.inverse a {
  color: #fff;
}
</style>
