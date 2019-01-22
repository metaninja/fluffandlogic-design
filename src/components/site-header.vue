<template>
    <header class="site-header">
        <section class="site-header-content">
            <a href="">
                <h1 class="site-brand">
                    Sherif Tariq
                    <span class="site-tagline">
            UX Designer
          </span>
                </h1>
            </a>

            <nav class="site-nav">
                <ul class="site-nav-list">
                    <li class="site-nav-item">
                        <router-link to="/" class="site-nav-link">Home</router-link>
                    </li>
                    <li class="site-nav-item">
                        <router-link to="projects" class="site-nav-link" >Projects</router-link>
                    </li>
                </ul>
            </nav>
        </section>
    </header>

</template>

<script>
export default {
  name: "site-header"
};
</script>

<style lang="scss">
</style>
