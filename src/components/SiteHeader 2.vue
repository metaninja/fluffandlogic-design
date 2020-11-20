<template>
    <header class="site-header">
        <h1 class="site-nav-brand">
            <router-link to="/" class="site-nav-link">
                Fluff + Logic
            </router-link>
        </h1>
    </header>
</template>

<script>
export default {
  name: "SiteHeader",
  props: ["inverse"]
};
</script>
