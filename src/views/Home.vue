<template>
  <main>
    <header>
      <h1>
        <span>We are</span>
          Fluff And Logic
          <span class="title-underline"></span>
          <span class="title-underline"></span>
      </h1>
    </header>

    <div class="profile">
      <section class="profile-left">
        <h2>Saadia Ahmed</h2>
        <h3>Communications, Development, & Strategy Consultant; Community Advocate and Connector</h3>

        <p>
          Saadia Ahmed graduated in International Studies from Austin College where she intensified her commitment to serving the community.
          She is a community and thought leader in Dallas/Fort Worth in addition to being the founder and adviser to numerous nonprofit and
          community initiatives. 
        </p>

        <p>
          Saadia was awarded the "Trailblazer" award by Texas Muslim Women's Foundation and "Community Leader of the Year" award by CAIR D/FW.
           She was also the first recipient of Radio Azad’s “Unsung Hero” recognition. 
        </p>

        <p>
          Saadia's areas of expertise include event planning, social media optimization, individual major giving, DEI training, and annual fund development.
        </p>

        <div class="profile-contact">
          <a href="https://www.facebook.com/saadia.ahmed">Contact me</a>
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
          He has consulted startups and companies in Silicon Valley, Las Vegas, DFW, Boston, and many other cities.
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
    font-size: 1.5rem;
    line-height: 2.5rem;
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
    width: 41.875%; //640px
    margin: auto;
    text-align: center;
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 10rem;    
    font-size: 7.5rem;
  }

  h1 span {
    display: flex;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.5rem;  
    color: rgba(255,255,255,.8);
  }

  h2 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 4rem;
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
    margin-top: 8rem;
    padding-top: .75rem;
    padding-bottom: .75rem;
    width: 20%;
    border-top: 1px solid rgba(255,255,255, 0.6);
    border-bottom: 1px solid rgba(255,255,255, 0.6);
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: center;    
    font-family: 'Bebas Neue', cursive;
    font-size: 2.5rem;
    color: rgba(255,255,255,.6);

  }

  .title-underline {
    display: block;
    width: 100%;
    height: 0;
    border-bottom: 1px solid rgba(255,255,255,.6);
    margin-top: 4px;
    margin-bottom: 4px;
  }

  .profile {
    display: flex;
    justify-content: center;    
  }
  .profile section {
    width: 45.55555%;
    text-align: center;
  }
  .profile-left {
    padding-right: 8.888888%;
    border-right: 1px dashed rgba(255,255,255,.6)
  }
  .profile-right {
    padding-left: 8.888888%;
  }
  .profile-contact {    
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 4rem;
    font-family: 'Bebas Neue', cursive;
    font-size: 3rem;
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      width: 90%;
    }
    .profile {
      flex-direction: column;
      align-items: center;
    }
    .profile section {
      width: 90%;
      padding: 0;
    }
    .profile-left {
      border-right: none;
    }
    .profile-contact {
      border-bottom: 1px solid rgba(255,255,255,.4);
    }

    footer p {
      width: 20rem;
    }    
  }
</style>
