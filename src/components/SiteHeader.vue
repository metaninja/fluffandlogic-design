<template>
    <section class="site-header">
        <a href="/">
            <h1 class="site-brand">
                Fluff &amp; Logic
            </h1>
        </a>

        <nav class="site-nav" v-bind:class="{ inverse: inverse}" role="navigation">
            <ul>
                <li>
                    <router-link to="/" class="site-nav-link">Home</router-link>
                </li>
                <li>
                    <a class="site-nav-link" href="https://linkedin.com/in/metaninja/">LInkedIn</a>
                </li>
                <li>
                    <a class="site-nav-link" href="mailto:fluffandlogic@gmail.com">Email</a>
                </li>
            </ul>
<!--            <router-link to="/" class="site-nav-link">Home</router-link>-->
<!--            <router-link to="about" class="site-nav-link">About</router-link>-->
<!--            <router-link to="contact" class="site-nav-link">Contact</router-link>-->
        </nav>
    </section>
</template>

<script>
export default {
  name: "SiteHeader",
  props: ["inverse"]
};
</script>

<style lang="scss" scoped>
    .site-nav {
        ul {
            list-style-type: none;
            margin: 0;
            display: flex;

            li {
                padding: 0;
            }
        }
    }
</style>
