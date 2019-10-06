import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Bff from "./views/projects/Bff.vue";
import Cocoa from "./views/projects/Cocoa.vue";
import HackerNews from "./views/projects/HackerNews.vue";
import Onyx from "./views/projects/Onyx.vue";
import Yobi from "./views/projects/Yobi.vue";
import Securus from "./views/projects/Securus.vue";
import Uptime from "./views/projects/Uptime.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      alias: "/projects",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/projects/cocoa",
      name: "cocoa",
      component: Cocoa
    },
    {
      path: "/projects/securus",
      name: "securus",
      component: Securus
    },
    {
      path: "/projects/onyx",
      name: "onyx",
      component: Onyx
    },
    {
      path: "/projects/hackernews",
      name: "hackernews",
      component: HackerNews
    },
    {
      path: "/projects/yobi",
      name: "yobi",
      component: Yobi
    },
    {
      path: "/projects/bff",
      name: "bff",
      component: Bff
    },
    {
      path: "/projects/uptime",
      name: "uptime",
      component: Uptime
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
