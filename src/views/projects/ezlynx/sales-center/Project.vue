<template>
  <section class="site-body-content">

      <header class="page-header">
        <h2 class="page-title">
          <span class="page-subtitle">EZLynx</span>
          Sales Center
        </h2>

        <div class="page-meta-tags">
          <p class="page-meta-tag"><strong>Duration:</strong> 2 months</p>
          <p class="page-meta-tag"><strong>Roles:</strong> User Research, Ideation, Prototyping</p>
        </div>
      </header>

      <div class="page-abstracts">
        <company-ezlynx></company-ezlynx>
      </div>

      <div class="project-page-details">
        <section class="page-details">
          <h3 class="page-details-title">Background</h3>
          <div class="page-details-desc">
            <p>
              Sales is the lifeblood of an independent insurance agency. Most agents only get paid when they sell a policy.
              For an agency to survive and grow, every agent has to call dozens of new prospects (potential customers)
              every day; only a handful of those prospects become customers that buy policies. Agents have to keep track
              of where these prospects are in the sales funnel from calling customers to presenting competitive pricing
              to convince the customer to switch to their agency.
            </p>

            <p>
              EZLynx developed Sales Center to help agents manage this very critical aspect of an agency's workflow.
              The discovery and development process had taken over a year. By the end, the executive team was ready to launch
              the product and there wasn't much thought given to the actual user experience. Instead, the team was told
              to use a workflow and UI design from an existing EZLynx product. The product was rushed to market the week
              after I joined EZLynx.
            </p>

            <p>
              This turned out to be a disaster.
            </p>

            <p>The initial release of Sales Center had enormous usability issues.
              A lot of the initial customers cancelled their Sales Center contracts after a couple of months. Switching
              products is incredibly painful for an agency, so once EZLynx lost a customer,
              they wouldn't be coming back for another 4-5 years, unless something radical changed in Sales Center.
            </p>

            <p>
              About six months after the botched Sales Center release, the Product team finally had enough sales data to
              convince the executive team to fix the user experience. That was when I was asked to help.
            </p>

            <p>I was given one month to do it. No pressure.</p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">
            <p>When I started working on the project, I knew little about the sales process. I tried to do some online
              research to learn about how sales worked and I interviewed the Product Manager, Brenna, to understand the feedback
              from the users and to get access to sales people or agents. I wasn't able to get access to
              any real users but one of my colleagues, Ryan, had been a sales person in his previous job.
            </p>

            <p>I interviewed
              Ryan to understand the mindset of a sales person and build a mental model that I could refer to. In
              addition I did some competitive research on tools for managing the sales process. I then compared the Sales
              Center interface with what I had learnt and it was obvious what the problem was.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Analysis</h3>
          <div class="page-details-desc">
            <p>The sales process is a pipeline. For each prospect that an agent contacts, they have to walk them
              through a sequence of steps. They then have to repeat the same process for every single customer in their
              list.</p>

            <p>Every morning, agents pull up a spreadsheet to see which prospects to call next, and to see what they
              need to do next to move that prospect closer to purchasing a policy. The process is very similar to a
              kanban board or a tool like Trello.</p>

            <figure>
              <img src="@/assets/images/ezlynx/sales-center/5-Pannel-Funnel.jpg"  class="figure">
              <figcaption>
                Reference: <a href="https://fitsmallbusiness.com/sales-funnel-templates/">Fit Small Business</a>
              </figcaption>
            </figure>

            <p>At each stage of the sales pipeline, there's a large amount of money that will get left on the table if
            the agent doesn't make an effort to call their prospects and move them to the next step in the pipeline. </p>

            <p>Agents earn commissions as a percentage of the premium from a policy; the bigger the premium, the more
              money that an agent (and an agency) can make. Agency owners are acutely aware of this and wanted to motivate
              their agents to spend more time on the larger, more valuable (VIP) prospects.</p>

            <p>An agent can call potentially dozens of people a day,  keeping track of all those prospects, what they
              said to them, where that prospect is in the conversation, how big of a policy they might potentially purchase,
              the type of policy that they're interested in (there are dozens of categories beyond just auto and home that
              you might see in an ad for Liberty Mutual or Progressive).
            </p>

            <p>Keeping track of the dozens of customers in each stage of the pipeline is where agents struggled with
              with their current toolset.
            </p>

            <p>Unfortunately, this was the problem that Sales Center <strong>didn't solve</strong>:</p>

            <ul>
              <li>While there was a pipeline in Sales Center, it wasn't obvious and there was no flow.</li>
              <li>The screen was dense with information. When you clicked on a prospect to learn more, the screen
              filled with even more densely packed information.</li>
              <li>There was no hierarchy to the information. What should the agent look at first? Which prospect was a
              VIP? Where were they in the sales funnel? How much money was being left on the table?</li>
            </ul>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Ideation</h3>
          <div class="page-details-desc">
            <p>Once I had completed my analysis, I was able to mock up a solution in a few days.</p>

            <figure>
              <img src="@/assets/images/ezlynx/sales-center/sales-center-home.png"  class="figure">
            </figure>

            <p>In the old interface, the sales funnel was represented as a set of tabs with labels that confused everyone.
              By changing the tabs into arrows, I made the sales funnel very clear to the users. Each arrow represented a
            stage in the sales pipeline. Below each stage was a list of prospects that were at that stage of the sales process.
            The arrows also included information on the number of prospects and the potential sales volume.</p>

            <p>This new interface gave the agents a bird's eye view of all their sales. They could immediately see:</p>
            <ul>
              <li>Who to call next</li>
              <li>Who they had spoken to, their preferred contact method, and the potential value of each sale.</li>
              <li>The total number of prospects at each stage, and the potential sales volume they could earn if they
              completed the sales.</li>
            </ul>

            <p>The card based view acted as a daily todo list to help agents manage their day and helped agency owners
              motivate their sales team to make the calls and close the deals.
            </p>

            <p>When an agent clicked on a prospect, they would be taken to a detailed view on a different screen, instead
            of having it clutter up the landing page as in the original design.</p>

            <figure>
              <img src="@/assets/images/ezlynx/sales-center/sales-center-opportunity.png"  class="figure">
            </figure>

            <p>The information on this screen was non-negotiable. Insurance agents are used to dealing with an incredible
              amount of information, so removing any information here would have been a deal-killer. Instead, I introduced
              an information and functional hierarchy to the data, so the most important information was at the top
              and easily glanceable. Secondary and tertiary information was moved to tabs that users could look at if
              they need it.</p>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Prototyping</h3>
          <div class="page-details-desc">
            <p>The initial design was done in UXPin, but there’s only so much you can show with a static mockup. We needed to
              prototype the interface in code to show stakeholders and customers how it would really work. I hired an
              intern to prototype the Sales Center mockups in code. I worked closely with him to implement additional
              functionality like drag-and-drop for the cards, lazy loading the prospects at each stage, and more.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Reaction</h3>
          <div class="page-details-desc">
            <p>The reaction from agents was <strong>electric</strong>! Every agency owner and agent that we demoed the product
              to loved the new interface. In particular, the arrows showing the direction of the sales funnel was the
              "a-ha!" moment: it turned out to be the biggest pain point in the old interface, and a big reason for the users
              finally understanding the Sales Center workflow. The new detail view let agents quickly scan and prioritize
              their tasks in a way they couldn't with the original Sales Center.
            </p>

            <p>Sales Center was re-launched a few months later with some aspects of the new interface I had mocked up.
            This was enough to reverse the sales decline of Sales Center and reduce support calls for
            existing customers.</p>

            <p>At the time of writing, the card view had still not been implemented due to competing development priorities.
            However, customers who had seen the prototype continue to clamor for the card-style interface. My hope is that
            the card-based UI is eventually prioritized and developed.</p>
          </div>
        </section>

      </div>

  </section>
</template>

<script>
import CompanyEzlynx from "@/components/company/ezlynx.vue";

export default {
  name: "project-ezlynx-import-assets",
  components: {
    CompanyEzlynx
  }
};
</script>


<style lang="scss">
caption {
  display: block;
  width: 100%;
  font-size: 1rem;
}
</style>
