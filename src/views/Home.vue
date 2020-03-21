<template>
  <div class="site-container">
    <SiteHeader />
    <section class="intro intro-home">
      <h2 class="intro-header">
        Hi. I&rsquo;m Sherif.
      </h2>
      <p class="intro-desc">
        I&rsquo;m a seasoned UX designer with a passion for turning incredibly
        complex business problems into streamlined, intuitive, user
        interfaces. What can I do for you? You can contact me via
        <a href="#">LinkedIn</a> or <a href="#">Email</a>
      </p>
    </section>

    <section class="home-projects">
      <div class="home-project" v-for="project of projects">
        <div class="home-project-media">
          <img
              class="home-project-media-image"
              v-bind:src="project.image"
              alt=""
          />
        </div>
        <h3 class="home-project-title">{{project.name}}</h3>
        <p class="home-project-desc">
          {{project.desc}}
        </p>
        <router-link
            class="home-project-link"
            v-bind:to="project.url">
          Learn More
        </router-link>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from "@/components/SiteFooter.vue";
export default {
    name: "home",
    components: { SiteHeader, SiteFooter },
    data: function() {
        return {
            projects: [
                {
                    name: "EZLynx",
                    desc: "Designing the next generation EZLynx platform.",
                    image: "/img/home/project-ezlynx.png",
                    url: "/projects/ezlynx"
                },
                {
                    name: "Yobi",
                    desc: "Designing an innovative mobile experience for a seed-stage startup.",
                    image: "/img/home/project-yobi.png",
                    url: "/projects/yobi"
                },
                {
                    name: "Cocoa",
                    desc: "An experiment in branding and app design, exploring the future of commercial  insurance software for Gen Z.",
                    image: "/img/home/project-cocoa.png",
                    url: "/projects/cocoa"
                },
                {
                    name: "Securus",
                    desc: "Re-architecting, re-branding, and modernizing a core application.",
                    image: "/img/home/project-securus.png",
                    url: "/projects/securus"
                },
                {
                    name: "Onyx",
                    desc: "Helping a company break out of their niche into a bigger, more profitable, market.",
                    image: "/img/home/project-onyx.png",
                    url: "/projects/onyx"
                },
                {
                    name: "Hacker News",
                    desc: "An experiment in designing a better mobile experience for the Hacker news website.",
                    image: "/img/home/project-hacker-news.png",
                    url: "/projects/hackernews"
                },

            ]
        }
    }
};
</script>
