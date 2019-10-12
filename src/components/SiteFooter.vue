<template>
    <div class="site-footer">
        <div>&copy; 2019 Sherif Tariq</div>

        <nav class="site-nav" v-bind:class="{ inverse: inverse}" role="navigation">
            <ul>
                <li>
                    <router-link to="/" class="site-nav-link">Home</router-link>
                </li>
                <li>
                    <a class="site-nav-link" href="https://linkedin.com/in/metaninja/">LInkedIn</a>
                </li>
                <li>
                    <a class="site-nav-link" href="mailto:fluffandlogic@gmail.com">Email</a>
                </li>
            </ul>
            <!--            <router-link to="/" class="site-nav-link">Home</router-link>-->
            <!--            <router-link to="about" class="site-nav-link">About</router-link>-->
            <!--            <router-link to="contact" class="site-nav-link">Contact</router-link>-->
        </nav>
    </div>
</template>

<script>
export default {
  name: "site-footer"
};
</script>

<style lang="scss">
    .site-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .site-nav {
        ul {
            list-style-type: none;
            margin: 0;
            display: flex;

            li {
                padding: 0;
            }
        }
    }
</style>
