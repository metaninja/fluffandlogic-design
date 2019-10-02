<template>
    <div>
        <section class="site-footer">
            <span>&copy; 2019 Sherif Tariq</span>

            <nav class="site-nav" v-bind:class="{ inverse: inverse}">
                <router-link to="/" class="site-nav-link">Home</router-link>
                <a class="site-nav-link" href="https://linkedin.com/in/metaninja/">LInkedIn</a>
                <a class="site-nav-link" href="mailto:fluffandlogic@gmail.com">Email</a>
                <!--            <router-link to="/" class="site-nav-link">Home</router-link>-->
                <!--            <router-link to="about" class="site-nav-link">About</router-link>-->
                <!--            <router-link to="contact" class="site-nav-link">Contact</router-link>-->
            </nav>
        </section>
    </div>
</template>

<script>
export default {
  name: "site-footer"
};
</script>

<style lang="scss">
</style>
