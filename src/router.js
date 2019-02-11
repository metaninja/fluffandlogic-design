import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/Projects.vue")
    },
    {
      path: "/projects/ezlynx/design-system",
      name: "ezlynx-design-system",
      component: () =>
        import("./views/projects/ezlynx/design-system/Project.vue")
    },
    {
      path: "/projects/ezlynx/import-assets",
      name: "ezlynx-import-assets",
      component: () =>
        import("./views/projects/ezlynx/import-assets/Project.vue")
    },
    {
      path: "/projects/ezlynx/sales-center",
      name: "ezlynx-sales-center",
      component: () =>
        import("./views/projects/ezlynx/sales-center/Project.vue")
    },
    {
      path: "/projects/ezlynx/submission-center",
      name: "ezlynx-submission-center",
      component: () =>
          import("./views/projects/ezlynx/submission-center/Project.vue")
    },
    {
      path: "/projects/ezlynx/ux",
      name: "ezlynx-ux",
      component: () => import("./views/projects/ezlynx/ux/Project.vue")
    },
    {
      path: "/projects/fedex-office/oes",
      name: "fedex-office-oes",
      component: () => import("./views/projects/fedexoffice/oes/Project.vue")
    },
    {
      path: "/projects/onyx/pioneer",
      name: "onynx-pioneer",
      component: () => import("./views/projects/onyx/pioneer/Project.vue")
    },
    {
      path: "/projects/securus/ngscp",
      name: "securus-ngscp",
      component: () => import("./views/projects/securus/ngscp/Project.vue")
    },
    {
      path: "/projects/slalom/usability",
      name: "slalom-usability",
      component: () => import("./views/projects/slalom/usability/Project.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
