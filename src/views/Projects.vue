<template>
    <section class="site-body-content">
        <h2 class="section-title">Projects</h2>
        <section class="cards">
            <div class="card" v-for="item in items">
                <h3 class="card-title">
                    <span class="card-subtitle">
                        {{ item.company }}
                    </span>
                    <router-link v-bind:to="item.url">
                        {{ item.name }}
                    </router-link>
                </h3>
            </div>
        </section>
    </section>
</template>

<script>
const items = [
  {
    index: 1,
    name: 'Sales Center',
    company: 'EZLynx',
    url: 'projects/ezlynx/sales-center'
  },
  {
    index: 2,
    name: 'Import Workflow',
    company: 'EZLynx',
    url: 'projects/ezlynx/import-workflow'
  },
  {
    index: 3,
    name: 'Pioneer',
    company: 'Onyx',
    url: 'projects/onyx/pioneer'
  },
  {
    index: 4,
    name: 'Secure Communication Platform',
    company: 'Securus',
    url: 'projects/securus/ngscp'
  },
  {
    index: 5,
    name: 'Order Entry Simplification',
    company: 'FedEx Office',
    url: 'projects/fedex-office/oes'
  },
  {
    index: 6,
    name: 'Building A Design System',
    company: 'EZLynx',
    url: 'projects/ezlynx/design-system'
  },
  {
    index: 7,
    name: 'Establishing A UX Foundation',
    company: 'EZLynx',
    url: 'projects/ezlynx/ux'
  },
  {
    index: 8,
    name: 'Introducing Usability Testing',
    company: 'Slalom',
    url: 'projects/slalom/usability'
  }
];
export default {
  name: "projects",
  data: function() {
    return {
        items: items
    };
  }
};
</script>

<style scoped>
</style>
