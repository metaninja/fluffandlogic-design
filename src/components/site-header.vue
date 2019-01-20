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
                        <router-link to="/" class="site-nav-link active" >Home</router-link>
                    </li>
                    <li class="site-nav-item">
                        <a class="site-nav-link" href="projects">Projects</a>
                    </li>
                    <li class="site-nav-item">
                        <a class="site-nav-link" href="process">Process</a>
                    </li>
                    <li class="site-nav-item">
                        <a class="site-nav-link" href="about">About</a>
                    </li>
                    <li class="site-nav-item">
                        <a class="site-nav-link" href="contact">Contact</a>
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
