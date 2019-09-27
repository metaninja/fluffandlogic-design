<template>
  <main class="page-project">
    <header class="site-header-container" style="background-color: #F0CF73;">
      <site-header></site-header>
      <div class="hero">
        <div class="hero-text">
          <h2 class="hero-title">Cocoa</h2>
          <p class="hero-desc">
            An experiment in branding and app design, exploring the future of commercial insurance software for Gen Z.
          </p>
        </div>
        <div class="hero-media" style="background: url(/img/home/cocoa.jpg) no-repeat center 38px">
        </div>
      </div>
    </header>

    <div class="summary-container">
      <div class="summary">
        <p>
          Cocoa is a fictional app based on my experience designing insurance software. The goal is to figure out where
          insurance software needs to go to appeal to the next generation of insurance agents: Generation Z and beyond.
          For more details on this project, including context scenarios and other research information,
          <router-link to="/contact">contact me</router-link>.
        </p>
      </div>
    </div>

    <div class="section-container" style="background-color: #f8f8f8;">
      <div class="section pt-64 pb-64">
        <div class="col center">
          <h3 class="section-title">Meet Maria.</h3>
          <p class="section-desc">
            Maria is a young insurance agent. She’s completed her training and is looking for a way to earn a living as
            an agent. Maria didn’t choose to become an agent. She did so because there wasn’t enough money coming from
            freelancing as an Uber driver, or running tasks using Task Rabbit. She wants a more steady source of income.
            Her mother was an insurance agent and she recommended Maria at least try being an agent. After going through
            the training she’s ready to at least try being an agent.
          </p>

          <p class="section-desc">
            Maria wants minimum on-boarding, and maximum productivity from the get-go. She wants a delightful, intuitive,
            and engaging experience even in a commercial, enterprise app. Maria will not accept sub-par experiences. She
            demands a higher quality experience.
          </p>
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/photo-maria.jpg" class="cocoa-screenshot" style="width: 350px; height: 350px;">
        </div>
      </div>
    </div>

    <div class="section-container pt-64 pb-64" >
      <div class="section">
          <h3 class="section-title" style="text-align: center;">User Flows.</h3>
      </div>

      <div class="row">
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-coworker-discussion.png" class="cocoa-userflow">
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-customer-discussion.png" class="cocoa-userflow">
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-customer-requests.png" class="cocoa-userflow">
        </div>
      </div>

      <div class="row">
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-discussions.png" class="cocoa-userflow">
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-new-customer.png" class="cocoa-userflow">
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-policies.png" class="cocoa-userflow">
        </div>
      </div>

      <div class="row">
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-responding-to-discussions.png" class="cocoa-userflow">
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/workflow-underwriter-discussion.png" class="cocoa-userflow">
        </div>
      </div>

    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="col center">
          <img src="/img/projects/cocoa/cocoa-dashboard.png" class="cocoa-screenshot">
        </div>
        <div class="col center">
          <h3 class="section-title">Homepage.</h3>
          <p class="section-desc">
            The homepage offers Maria an at-a-glance view of how her business is doing. Insurance agents get paid with
            commissions and agency fees on premiums from customers. Keeping track of that information vs. the number of
            claims that are eating into their revenue and profits is an important indicator on how Maria’s agency is
            doing.
          </p>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="col center">
          <h3 class="section-title">Customer Details.</h3>
          <p class="section-desc">
            Maria can quickly search for any customer and find out about their policy details, claims history, premiums
            and other information. The app is built around search. Speed is the key.
          </p>
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/cocoa-profile.png" class="cocoa-screenshot">
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="col center">
          <img src="/img/projects/cocoa/cocoa-chat.png" class="cocoa-screenshot">
        </div>
        <div class="col center">
          <h3 class="section-title">Chat With Customers.</h3>
          <p class="section-desc">
            For an insurance agent like Maria with hundreds of customers, it’s very difficult to remember the last thing
            a customer might have said weeks or months ago. For Maria’s customer though, that is the thing they
            remember. And they expect their agent to be able to quick respond based on their last converstaion. The Chat
            view is a Slack-style interface that lets Maria talk to one customer or dozens, and quickly switch context
            when a customer asks a question.
          </p>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section pt-64 pb-64">
        <div class="col center">
          <h3 class="section-title">Maria's Todos.</h3>
          <p class="section-desc">
            Maria has a lot on her mind. Rather than try to juggle hundreds of tasks on pieces of paper or across
            several apps, Cocoa has a built-in todo manager that helps Maria keep track of her tasks and relate them to
            the specific customers that they are related to.
          </p>
        </div>
        <div class="col center">
          <img src="/img/projects/cocoa/cocoa-todos.png" class="cocoa-screenshot">
        </div>
      </div>
    </div>

  </main>
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    export default {
        name: "Cocoa",
        components: { SiteHeader }
    }
</script>

<style scoped>
  .cocoa-screenshot {
    max-width: 400px;
  }
  .cocoa-userflow {
    width: calc(100% - 48px);
    height: auto;
    margin: 24px;
  }
</style>
