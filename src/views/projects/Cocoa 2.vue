<template>
  <div class="site-container">
    <SiteHeader />

    <section class="intro">
      <h2 class="intro-title">
        Cocoa Agency Management
      </h2>
      <p class="intro-desc">
        Since 2016, I've spent a lot of time learning about the insurance industry. I know a lot more about it now than
        I ever could have wanted. Honestly, I had no idea that the world of insurance could be so complicated. And
        unfortunately, so archaic. It's an industry that's still stuck in the early 90s, with customers required to
        answer an endless series of questions, and agents forced to manage mountains of paperwork so that they can serve
        their customers.
      </p>
    </section>

    <section class="body-content">
      <p class="body-content-desc">
        The next generation of insurance agents is around the corner, and they're not going to put up with that crap.
        Generation Z will have grown up with Snapchat, Facebook, and the iPhone. While past users were willing to make
        do with handwritten paper forms and face-to-face meetings, the upcoming generation will be a lot more demanding.
      </p>

      <p class="body-content-desc">
        As the senior UX designer at EZLynx, it is my responsibility to collaborate with all the product managers and
        product owners at EZLynx and ensure a consistent, intuitive, and engaging user experience. But there's only so
        much I can do. I can do the user research, ideate on new designs, and validate those design with usability
        testing, but if the development team isn't willing to execute on that vision, the software that they develop
        won't remain competitive for long, and the next generation of users will look for better alternatives.
      </p>

      <p class="body-content-desc">
        This exercise is an attempt to take all of the knowledge I have acquired on designing software for the insurance
        industry and answering a question: what would a modern agency management system look like if we developed it for
        a much more exacting audience?
      </p>
    </section>

    <section class="screenshot-container">
      <img class="screenshot" style="width: 50%" src="/img/projects/cocoa/cocoa-dashboard.png" alt="" />
    </section>

    <section class="body-content">
      <h3 class="body-content-title">
        Introducing Cocoa, the Agency Management system for Gen Z
      </h3>

      <p class="body-content-desc">
        Cocoa is the Agency Management software for the next generation of insurance agents. Cocoa is targeted at
        Gen Z users. We wanted to attract a younger customer base that came of age with touch screen devices apps like
        Snapchat, Facebook, and Twitter, and expects good design.
      </p>


      <p class="body-content-desc">
      </p>

      <p class="body-content-desc">
      </p>


    </section>

    <section class="body-content">
      <h3 class="body-content-title">
        Discovery
      </h3>

      <p class="body-content-desc">
        To build Cocoa, I had to treat it like any other product I have worked on in the past. I had to start with the
        outcome in mind, think about who Cocoa's users will be, and what kind of experience they'll be expecting. I had
        to take Cocoa through a complete user experience discovery process and develop artifacts such as personas,
        context scenarios, user flows, and more.
      </p>
    </section>

    <section class="body-content">
      <h3 class="body-content-title">
        Scope
      </h3>

      <p class="body-content-desc">
        For Cocoa, I wanted to focus on the commercial insurance industry. The personal insurance industry is a crowded
        space with a lot of VC-funded insurtech (insurance technology startups competing for customers. The margins are
        thin, and the volumes have to be incredibly high to make any profits.
      </p>

      <p class="body-content-desc">
        Commercial insurance, on the other hand, is a far more complex market but with the potential for much higher
        profits. Besides, the commercial insurance industry is ripe for disruption. Unlike personal, commercial requires
        filling in a lot of paperwork. There’s not much automation and almost no big data or machine learning techniques
        being used to streamline this process. Commercial insurance still requires a lot of back and forth communication
        between the person requesting the insurance, the commercial agent — and potential user of Cocoa — and the
        underwriter in the insurance company that decides whether to accept or decline coverage.
      </p>

    </section>

    <section class="intro">
      <h2 class="intro-title">
        Persona
      </h2>
      <p class="intro-desc">
        Based on my research, our primary persona belongs to Gen Z. Our user wants minimum on-boarding, and maximum
        productivity from the get-go. She wants a delightful, intuitive, and engaging experience even in a commercial,
        enterprise app.
        Gen Z users will not accept sub-par experiences. They demand a higher quality experience.
      </p>
    </section>

    <section class="body-content">
      <img src="/img/projects/cocoa/photo-maria.jpg" class="screenshot" style="width: 50%; margin-bottom: 24px;" alt="">
      <h3 class="body-content-title">
        Meet Maria.
      </h3>
      <p class="body-content-desc">
        Maria is a young insurance agent. She’s completed her training and is looking for a way to earn a living as
        an agent. Maria didn’t choose to become an agent. She did so because there wasn’t enough money coming from
        freelancing as an Uber driver, or running tasks using Task Rabbit. She wants a more steady source of income.
        Her mother was an insurance agent and she recommended Maria at least try being an agent. After going through
        the training she’s ready to at least try being an agent.
      </p>

      <h3 class="body-content-title">
        Maria, Commercial Agent
      </h3>

      <p class="body-content-desc">
        Maria didn’t want to be an agent. She’s seen her mother work on paper forms and terrible UIs, and doesn’t want
        any of it.
      </p>

      <p class="body-content-desc">
        She had heard from her mother how commercial agents had to juggle getting new customers (called leads), emailing
        multiple underwriters to try and get a competitive quote for a potential customer (called a prospect, and manage
        the needs of her existing customers, such as filing claims, adding vehicles and drivers.
      </p>

      <p class="body-content-desc">
      On top of all that she also has to continue to stay on top of increases in the cost of insurance (premium) for her
        customers.
      </p>

      <p class="body-content-desc">
      With Cocoa, we have to change Maria’s mind.
      </p>

      <ul class="body-content-list">
        <li class="body-content-list-item">
          We have to convince Maria that the Cocoa experience is nothing like traditional insurance software, that this
          is something that she can do and even enjoy doing.
        </li>
        <li class="body-content-list-item">
          The initial experience with Cocoa has to be killer.
        </li>
        <li class="body-content-list-item">
          Onboarding cannot take more than a few hours or a day at most. Maria is used to Uber where she was onboarded
          easily in just a few minutes. That is our competition.
        </li>
        <li class="body-content-list-item">
          The day-to-day Cocoa experience has to be engaging.
        </li>
        <li class="body-content-list-item">
          She doesn’t want to be overwhelmed with information. She expects help when she needs it.
        </li>
        <li class="body-content-list-item">
          We also expect Maria’s customers (the ones purchasing insurance policies from Maria) to be able to help
          themselves without having to call Maria for every little change to the policy (which is a problem with a lot
          of the legacy insurtech).
        </li>
        <li class="body-content-list-item">
          Maria’s customers are also like her, Millenials and Gen Z users who grew up with Google, Twitter, Instagram,
          and Uber and expect the same ease-of-use.
        </li>
        <li class="body-content-list-item">
          Maria is comfortable with apps like Slack, Dropbox, Gmail, and SquareSpace. She expects a similar experience from Cocoa.
        </li>
      </ul>

      <p class="body-content-desc">
        Maria wants minimum on-boarding, and maximum productivity from the get-go. She wants a delightful, intuitive,
        and engaging experience even in a commercial, enterprise app. Maria will not accept sub-par experiences. She
        demands a higher quality experience.
      </p>
    </section>

    <h2 class="intro-title">
      Goals
    </h2>

    <section class="flash-cards">
      <div class="flash-card" style="width: 25%">
        Minimum Onboarding
      </div>

      <div class="flash-card" style="width: 25%">
        Mobile First
      </div>

      <div class="flash-card" style="width: 25%">
        Intuitive Experience
      </div>
    </section>

    <section class="body-content">

      <h2 class="body-content-title">
        Minimum Onboarding
      </h2>
      <p class="body-content-desc">
        Today, a lot of users have to spend months onboarding with an enterprise app before they’re productive. That’s
        too long for our primary persona, as most of them will jump ship by month 3. With Cocoa, our users need to be
        productive within hours or days.
      </p>

      <h2 class="body-content-title">
        Mobile First
      </h2>
      <p class="body-content-desc">
        When researching this persona, we noted that most users in this age range do almost everything on their phones.
        They pay their bills, keep in touch with their families, and do a lot of their work on the go. They want the
        flexibility of being able to work from anywhere; they don’t want to be tied to a desk in a stuffy office.
        We’re assuming that 80% of the interactions with Cocoa will be done via a mobile device, 15% might be done on a
        tablet, and the remaining 5% on a computer.
      </p>

      <h2 class="body-content-title">
        Intuitive Experience
      </h2>
      <p class="body-content-desc">
        Cocoa’s users expect a familiar interface. Because Cocoa is meant to be a one-stop shop for all commercial
        insurance work, we wanted to leverage ideas from existing apps that have become de facto standards in their
        industries to build a central hub for everything that a commercial agent would want to do.
      </p>

      <p class="body-content-desc">
        For example:
      </p>
      <ul class="body-content-list">
        <li class="body-content-list-item">
          Communication between the user and their customers should be via a Slack style UI.
        </li>
        <li class="body-content-list-item">
          Cocoa needs a central Dropbox-like storage for storing documents.
        </li>
        <li class="body-content-list-item">
          Google-style universal search so users can search for anything from a central place.
        </li>
        <li class="body-content-list-item">
          An iOS or Google Contacts style interface to manage the list of accounts that a user has.
        </li>
        <li class="body-content-list-item">
          Squarespace style web builder for our users’ customers and potential customers to get self-service and help
          themselves 24 hours a day, seven days a week.
        </li>
      </ul>

      <p class="body-content-desc">
        Cocoa was designed from the ground up to learn from its users and streamline tasks over time. With Cocoa, we use
        a combination of human-powered analytics and machine learning algorithms to understand more about our users and
        their customers and to help improve their workflows.
      </p>
    </section>

    <section class="intro">
      <h2 class="intro-title">
        Context Scenarios
      </h2>
    </section>

    <section class="body-content">
      <h2 class="body-content-title">
        Scenario #1
      </h2>
      <p class="body-content-desc">
        Maria is our Gen Z persona. She is a new commercial agent. She has passed her certification and is ready if
        reluctant to start selling commercial insurance.
      </p>

      <ol class="body-content-list">
        <li class="body-content-list-item">
          Maria has just downloaded the Cocoa app. It’s her first day as an agent. She’s ready to start selling. She
          goes through the onboarding experience. Her mother referred her a customer. To make things easy, Maria’s
          mother gave her one of the simplest commercial applications available: Commercial Auto.
        </li>
        <li class="body-content-list-item">
          The customer calls Maria. After the initial introductions, Maria adds the customer in Cocoa. Maria asks him to
          describe his business. She writes down the details. She then asks him what he’s trying to insure. As the
          customer describes the details of his small fleet of vehicles (he owns a bakery and delivers fresh baked goods
          to offices), Maria writes down the details. Maria then walks him through the kind of coverage that she
          recommends for the vehicles. Once she’s done, she explains that it will take a few days to get quotes from all
          her carriers and she’ll contact him so he can decide who to go with.
        </li>
        <li class="body-content-list-item">
          Maria ends the call. She looks at the information she has taken down. She doesn’t yet have the knowledge her
          mother has about which carriers will accept what risk and what to expect in terms of customer service, and
          pricing, etc. All that will come with time. For now, she’s going to email all her carriers’ underwriters with
          the application that she’s taken down and ask for quotes.
        </li>
        <li class="body-content-list-item">
          Maria adds the application details to her email and sends it to her underwriters. Now she has to wait.
        </li>
        <li class="body-content-list-item">
          A couple of days later, some of the underwriters have started to respond. One asked for additional information.
          Maria notes down the information this specific underwriter requested and adds it to her todo list for that customer.
        </li>
        <li class="body-content-list-item">
          Other underwriters have responded with some quotes. Maria adds the quote information,
        </li>
        <li class="body-content-list-item">
          A couple of underwriters declined to quote. Maria notes that in the application.
        </li>
        <li class="body-content-list-item">
          Once she has enough information, she contacts the customer and walks him through the quotes she got back. She
          also mentions the carriers that wanted to additional information. The customer promises to contact her with
          the additional information.
        </li>
        <li class="body-content-list-item">
          In the meantime, the customer would like to wait for those additional quotes before making a decision.
        </li>
        <li class="body-content-list-item">
          An hour later, the customer contacts Maria with the additional information that some of the carriers requested.
          Maria forwards the info to the corresponding carriers.
        </li>
        <li class="body-content-list-item">
          Finally a couple of days later, she has the last of the quotes that she was waiting for. Maria contacts her
          customer again and explains the various options. The customer listens, and decides to go with one of the
          carriers. Maria logs into the carrier website and enters the information. A few minutes later, she has a
          policy in her hand.
        </li>
        <li class="body-content-list-item">
          She enters the policy information for her customer and forwards it to him.
        </li>
        <li class="body-content-list-item">
          She sighs. She’s just added her first customer. The process went a lot smoother than she would have expected,
          and as a result she feels confident that she can do this.
        </li>
      </ol>
    </section>

    <figure class="figure">
      <img src="/img/projects/cocoa/workflow-policies.png" alt="" />
      <p class="figure-caption">Creating or updating a customer policy</p>
    </figure>

    <figure class="figure">
      <img src="/img/projects/cocoa/workflow-underwriter-discussion.png" alt="" />
      <p class="figure-caption">Test caption</p>
    </figure>

    <section class="body-content">
      <h2 class="body-content-title">
        Scenario #2
      </h2>
      <p class="body-content-desc">
        Maria has been using the Cocoa app for a few months now. She’s signed up dozens of customers. Now the customers
        that she’s signed up want service (they need a certificate so they can do business as a contractor, or they need
        to file a claim, or increase or decrease the coverage.)
      </p>

      <p class="body-content-desc">
        In this scenario, Maria is our freshman commercial agent. Carlos is one of Maria’s customers.
      </p>

      <ol class="body-content-list">
        <li class="body-content-list-item">
          Carlos is a plumber. He has a small company and his own company car that he uses to visit locations to do work.
        </li>
        <li class="body-content-list-item">
          Carlos is a subcontractor on a project to rennovate one of the Plano municipal offices in East Plano. The city
          of Plano won’t let Carlos do work unless he presents what’s called a Certificate of insurance.
        </li>
        <li class="body-content-list-item">
          Carlos remembered that Maria had mentioned that he could contact Maria anytime via the Cocoa customer-facing
          app. This app let’s Carlos automatically pull up his policy, view his ID cards, and download documents.
        </li>
        <li class="body-content-list-item">
          Carlos downloads the app and logs in. He notices the prominent search bar in the app that’s labeled
          “Ask me anything.”
        </li>
        <li class="body-content-list-item">
          Carlos types “I need a certificate.” The Cocoa app uses machine learning to improve the search results for
          Carlos based on what other people have searched for. The app comes back with some suggestions including one
          for Create Certificate.
        </li>
        <li class="body-content-list-item">
          Carlos follows the instructions and before long he has a PDF of a certificate.
        </li>
        <li class="body-content-list-item">
          Cocoa offers to let Carlos email the certificate to City of Plano from the app.
        </li>
        <li class="body-content-list-item">
          Carlos fills in the email address, subject, and message, and sends it.
        </li>
        <li class="body-content-list-item">
          The process is straightforward. And he didn’t have to call Maria even once.
        </li>
      </ol>
    </section>

    <figure class="figure">
      <img src="/img/projects/cocoa/workflow-customer-requests.png" alt="" />
      <p class="figure-caption">Test caption</p>
    </figure>

    <figure class="figure">
      <img src="/img/projects/cocoa/workflow-customer-discussion.png" alt="" />
      <p class="figure-caption">Customer discussion</p>
    </figure>

    <figure class="figure">
      <img src="/img/projects/cocoa/workflow-coworker-discussion.png" alt="" />
      <p class="figure-caption">Coworker discussion</p>
    </figure>

    <figure class="figure">
      <img src="/img/projects/cocoa/workflow-discussions.png" alt="" />
      <p class="figure-caption">Discussion workflow</p>
    </figure>

    <figure class="figure">
      <img src="/img/projects/cocoa/workflow-responding-to-discussions.png" alt="" />
      <p class="figure-caption">Responding to discussion</p>
    </figure>


    <section class="intro">
      <h2 class="intro-title">
        Branding and Design
      </h2>
      <p class="intro-desc">
        A lot of insurance software targeted at insurance agents look like they were designed in the 1990s and never
        evolved. Branding continues to be an afterthought, and the integration between branding and product design is
        almost nill. Insurance software companies paint one picture with their marketing materials and websites, but
        then present a completely different view once the user logs in. The disconnect between marketing and product
        design is jarring and often results in users feeling like they’ve been misled. This feeling doesn’t usually
        manifest on the surface but can result in abrasive calls to support that can make the user and the support agent
        feel unhappy.
      </p>
      <p class="intro-desc">
        My belief based on my experience working in both brand and product is that these two areas of design should work
        collaboratively together to create a seamless transition from the moment they hear about the product, to landing
        on our website, signing up for the product, and finally using the product. This can help to manage a customer's
        expectations and their attitude and mood if and when they have to interact with sales, marketing, or support.
      </p>
    </section>

    <section class="body-content">
      <h2 class="body-content-title">
        What’s In A Name
      </h2>
      <p class="body-content-desc">
        Why Cocoa? I wanted a name that would be friendly, easy to pronounce and represent the feeling that users will
        get when using the app. Users can be turned off by masculine sounding names like Insurance Technologies, LLC, or
        Vertical Integrations, LTD.
      </p>
      <p class="body-content-desc">
        If you look at the insurtech market, products have friendly names like Lemonade, Hippo, Next, with color schemes
        that strike a more upbeat tone and are designed to stand out.
      </p>
      <p class="body-content-desc">
        The name Cocoa suggests a product that can kick start the users slow and archaic processes with a streamlined
        rocess. We want to present a positive vibe. With Cocoa, we want our users to picture a smooth glass of chocolate
        milk, delicious and energizing.

      </p>
      <h2 class="body-content-title">
        Design
      </h2>
      <p class="body-content-desc">
        One of the problems with traditional insurtech companies is that many were started up in the 80s, 90s, and 2000s
        and it shows. These companies continue to design for an archaic desktop-only experience even as mobile and tablet
        device usage has exploded and users clamor for better, and sometimes any mobile experiences. They don't take
        advantage of big data, machine learning, or spend more time analyzing the data to streamline the user experience.
        And forget about accessibility.
      </p>

      <p class="body-content-desc">
        With Cocoa, I wanted to start with a modern approach to product design from the beginning. At Cocoa, every
        website and app that we build is designed from the ground up to be mobile first. Cocoa is a progressive web app
        (PWA), which means that accessibility is built into the design and development workflow instead of an afterthought.
        Every screen starts with a semantic structure; only then do we layer on the functionality on top of each other,
        finishing off with delightful details such as animations, transitions, and illustrations.
      </p>
    </section>

    <section class="screenshot-container">
      <div class="screenshots">
        <img class="screenshot" style="width: 50%" src="/img/projects/cocoa/cocoa-dashboard.png" alt="" />
        <img class="screenshot" style="width: 50%" src="/img/projects/cocoa/cocoa-profile.png" alt="" />
      </div>
    </section>

    <section class="screenshots-desc-container">
      <div class="row">
        <div class="col" style="width: 50%">
          <h3 class="body-content-title">
            Homepage
          </h3>
          <p class="body-content-desc">
            The homepage offers Maria an at-a-glance view of how her business is doing. Insurance agents get paid with
            commissions and agency fees on premiums from customers. Keeping track of that information vs. the number of
            claims that are eating into their revenue and profits is an important indicator on how Maria’s agency is
            doing.
          </p>
        </div>

        <div class="col" style="width: 50%">
          <h3 class="body-content-title">
            Customer Details
          </h3>
          <p class="body-content-desc">
            Maria can quickly search for any customer and find out about their policy details, claims history, premiums
            and other information. The app is built around search. Speed is the key.
          </p>
        </div>
      </div>
    </section>

    <section class="screenshot-container">
      <div class="screenshots">
        <img class="screenshot" style="width: 50%"  src="/img/projects/cocoa/cocoa-chat.png" alt="">
        <img class="screenshot" style="width: 50%"  src="/img/projects/cocoa/cocoa-todos.png" alt="">
      </div>
    </section>

    <section class="screenshots-desc-container">
      <div class="row">
        <div class="col" style="width: 50%">
          <h3 class="body-content-title">
            Chat With Customers
          </h3>
          <p class="body-content-desc">
            For an insurance agent like Maria with hundreds of customers, it’s very difficult to remember the last thing
            a customer might have said weeks or months ago. For Maria’s customer though, that is the thing they
            remember. And they expect their agent to be able to quick respond based on their last converstaion. The Chat
            view is a Slack-style interface that lets Maria talk to one customer or dozens, and quickly switch context
            when a customer asks a question.
          </p>
        </div>

        <div class="col" style="width: 50%">
          <h3 class="body-content-title">
            Maria&rsquo;s Todos.
          </h3>
          <p class="body-content-desc">
            Maria has a lot on her mind. Rather than try to juggle hundreds of tasks on pieces of paper or across
            several apps, Cocoa has a built-in todo manager that helps Maria keep track of her tasks and relate them to
            the specific customers that they are related to.
          </p>
        </div>
      </div>
    </section>


    <footer class="page-footer">
      Photo by Omar Lopez on Unsplash
    </footer>

    <SiteFooter />
  </div>
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from '@/components/SiteFooter.vue';
    export default {
        name: "Cocoa",
        components: { SiteHeader, SiteFooter }
    }
</script>

<style scoped>
</style>
