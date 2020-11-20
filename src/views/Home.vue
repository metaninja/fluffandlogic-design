<template>
  <main>
    <header>
      <h1>
        <span>We are</span>
        Fluff And Logic
      </h1>
    </header>

    <div class="profile">
      <section class="profile-left">
        <h2>Saadia Ahmed</h2>
        <h3>Senior Marketing Consultant </h3>

        <p>
          Saadia has over 20 years of experience in helping non-profits and charitable organizations 
          build concensus with their community. I have been doing social media since 2008.
        </p>

        <p>
          I have worked with almost every masjid in the DFW area, TMWF, Gem Advisers, and many others.
        </p>

        <div class="profile-contact">
          <a href="#">Contact me</a>
        </div>
        
      </section>

      <section class="profile-right">
        <h2>Sherif Tariq</h2>
        <h3>Senior UX Consultant </h3>

        <p>
          Sherif has over 20 years of experience as a web designer and over 10 years as a user 
          experience designer, leading teams to sucessful product launches. 
        </p>

        <p>
          I have consulted startups and companies in Silicon Valley, Las Vegas, DFW, Boston, and many other cities.
        </p>

        <div class="profile-contact">
          <router-link to="/sherif">View my portfolio</router-link>
        </div>
      </section>
    </div>



    <footer>
      <p>How can we help you?</p>
    </footer>

  </main>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap');

  body {
    background-color: #013143;
    color: rgba(255,255,255,.8);    
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 40px;
  }

  h1, 
  h2, 
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Bebas Neue', cursive;
    color: #fff;    
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 640px;
    margin: auto;
    text-align: center;
    flex-direction: column;
    margin-top: 74px;
    margin-bottom: 165px;
    border-bottom: 1px solid #fff;
    font-size: 120px;
  }

  h1 span {
    display: flex;
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 24px;  
    color: rgba(255,255,255,.8);
  }

  h2 {
    font-size: 64px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 32px;
    margin-bottom: 48px;
  }

  a {
    color: #84DCC6;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  footer p {    
    margin-top: 128px;
    padding-top: 12px;
    padding-bottom: 12px;
    width: 300px;
    border-top: 1px solid rgba(255,255,255, 0.6);
    border-bottom: 1px solid rgba(255,255,255, 0.6);
    font-size: 40px;
    line-height: 40px;
    text-align: center;    
    font-family: 'Bebas Neue', cursive;
    font-size: 40px;
    color: rgba(255,255,255,.6);

  }

  .profile {
    display: flex;
    justify-content: center;    
  }
  .profile section {
    width: 457px;
    text-align: center;
  }
  .profile-left {
    padding-right: 128px;
    border-right: 1px dashed rgba(255,255,255,.6)
  }
  .profile-right {
    padding-left: 128px;
  }

  @media only screen and (max-width: 1100px) {
    
  }
</style>
