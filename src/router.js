import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Bff from "./views/projects/Bff.vue";
import Cocoa from "./views/projects/Cocoa.vue";
import HackerNews from "./views/projects/HackerNews.vue";
import Onyx from "./views/projects/Onyx.vue";
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
      path: "/project/cocoa",
      name: "cocoa",
      component: Cocoa
    },
    {
      path: "/project/securus",
      name: "securus",
      component: Securus
    },
    {
      path: "/project/onyx",
      name: "onyx",
      component: Onyx
    },
    {
      path: "/project/bff",
      name: "bff",
      component: Bff
    },
    {
      path: "/project/hackernews",
      name: "hackernews",
      component: HackerNews
    },
    {
      path: "/project/uptime",
      name: "uptime",
      component: Uptime
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
