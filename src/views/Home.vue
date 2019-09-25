<template>
  <main>
    <header class="site-header-container">
      <site-header></site-header>
      <div style="display: flex; justify-content: space-between">
        <img src="/img/home/photo-sherif-tariq.jpg">
      </div>

    </header>
  </main>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
export default {
  name: "home",
  components: { SiteHeader }
};
</script>
