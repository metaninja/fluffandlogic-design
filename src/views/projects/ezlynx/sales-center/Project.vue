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
        <div class="page-abstract">
          <!--<h3 class="page-abstract-title">About EZLynx</h3>-->
          <div class="page-abstract-desc">
            <p>
              Sales are the lifeblood of an independent insurance agency. For an agency to survive and grow, an insurance
              agent has to contact dozens or hundreds of leads every day. Only a handful of those become prospects (i.e.,
              potential customers) and even fewer become customers and buy their policies from the agency.
            </p>
          </div>
        </div>
      </div>

      <div class="project-page-details">
        <section class="page-details">
          <h3 class="page-details-title">Background</h3>
          <div class="page-details-desc">
            <p>
              EZLynx developed Sales Center to help agents manage this very critical aspect of an agency's workflow.
              The initial release had a lot of usability issues. The team knew that there were problems with the
              interface, but didn't know how to solve it.
            </p>

            <p>
              Several of the customers that signed up for Sales Center canceled their subscriptions after a couple of
              months. Switching products is incredibly painful for an agency, so once EZLynx lost a customer, they
              wouldn't come back for another 4-5 years unless something radical changed in Sales Center.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">
            <p>
              I interviewed the product manager to gather the feedback she had received from customers during beta
              testing, and to understand the problem she was trying to solve in Sales Center. In addition, I performed
              a heuristic analysis of the existing Sales Center user interface to understand how it stacked up against
              some standard usability guidelines.
            </p>

            <p>
              I researched the sales process to build a mental model of what a salesperson thinks about or does during a
              typical conversation with a prospect. I analyzed competitors to Sales Center including Pipedrive, Trello,
              and JIRA, to see how they had approached the sales process for their customers.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Analysis</h3>
          <div class="page-details-desc">
            <p>
              The sales process is a pipeline. Sales agents tend to follow a consistent set of steps as they go from
              pitching their product to a prospect to finally closing the deal. While a salesperson may label the steps
              differently to match the industry they were working in, the process almost always looks like a pipeline:
              a salesperson has to follow a consistent, prescribed set of steps to move a lead from prospect to customer.
            </p>

            <p>
              Based on the user research and heuristic analysis, I came to the following conclusions:
            </p>

            <ul>
              <li>
                In the existing Sales Center app, the steps in the pipeline had cryptic labels that did not match
                salesperson mental model I had built during the discovery process.
              </li>
              <li>
                It also wasn't obvious how to move prospects to the next step in the sales process.
              </li>
              <li>
                The user interface was incredibly dense with information. The interface was not scannable. Every time a
                user opened up Sales Center, they would have to spend several seconds acclimating to the barrage of data
                on the screen and understand what to look for.
              </li>
              <li>
                There was no hierarchy to the information. What should the agent look at first? Which prospect was a
                VIP? Where were they in the sales funnel? How much money were the salespeople leaving behind on the table?
              </li>
            </ul>

            <figure>
              <img src="@/assets/images/ezlynx/sales-center/5-Pannel-Funnel.jpg"  class="figure">
              <figcaption>
                Reference: <a href="https://fitsmallbusiness.com/sales-funnel-templates/">Fit Small Business</a>
              </figcaption>
            </figure>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Ideation</h3>
          <div class="page-details-desc">

            <figure>
              <img src="@/assets/images/ezlynx/sales-center/sales-center-home.png"  class="figure">
            </figure>

            <h4>Make the Sales Pipeline More Intuitive</h4>

            <p>Each
              arrow represented a stage in the sales pipeline. Below each stage was a list of prospects that were at
              that stage of the sales process. The arrows also included information on the number of prospects and
              the potential sales volume.</p>

            <h4>Summarize Prospect&rsquo;s Info</h4>

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

            <h4>Move Prospect Details To A Details Screen</h4>

            <p>When an agent clicked on a prospect, they would be taken to a detailed view on a different screen, instead
            of having it clutter up the landing page as in the original design.</p>

            <figure>
              <img src="@/assets/images/ezlynx/sales-center/sales-center-opportunity.png"  class="figure">
            </figure>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Prototyping</h3>
          <div class="page-details-desc">
            <p>The initial design was done in UXPin. We needed to prototype the interface in code to show stakeholders
              and customers how it would really work. I hired an intern to prototype the Sales Center mockups in
              code. I worked closely with him to implement additional functionality like drag-and-drop for the cards,
              lazy loading the prospects at each stage, and more.
            </p>
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
