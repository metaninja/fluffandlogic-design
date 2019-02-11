<template>
  <section class="site-body-content">

      <header class="page-header">
        <h2 class="page-title">
          <span class="page-subtitle">EZLynx</span>
          Submission Center
        </h2>

        <div class="page-meta-tags">
          <p class="page-meta-tag"><strong>Duration:</strong> 1 week</p>
          <p class="page-meta-tag"><strong>Roles:</strong> Project Vision, User Flows, Ideation</p>
        </div>
      </header>

      <div class="page-abstracts">
        <company-ezlynx></company-ezlynx>
      </div>

      <div class="project-page-details">
        <section class="page-details">
          <h3 class="page-details-title">About Commercial Insurance</h3>
          <div class="page-details-desc">
            <p>
              In the insurance industry, there are two kinds of insurance: Personal and Commercial. Personal
              insurance (homes, auto, RV) is mostly a solved problem that can be easily automated.
            </p>

            <p>
              <strong>Commercial insurance</strong> &mdash; for farms, schools, apartment buildings) &mdash; however, is incredibly
              complex and has so far defied any kind  of quote automation except for the very simplest of quotes. For
              insurance companies and independent  agents the process of getting an average commercial quote can take
              anywhere from a couple of weeks to over a month.
            </p>

            <p>
              Commercial however is the most profitable section of the insurance industry today. Personal insurance
              has  been automated to the point where the profit margins are slim. Commercial on the other hand
              continues  to be hugely profitable as it still requires a lot of manual effort to get a good deal.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">The Problem With Commercial</h3>
          <div class="page-details-desc">
            <p>
              The biggest problem with commercial quoting today is that it requires a tremendous amount of time from
              an  actual person (called an underwriter) to review all the supporting documents and the commercial
              entity  itself before the insurance company can provide a quote.
            </p>

            <p>
              This is not a problem that will be solved any time soon.
            </p>

            <p>
              Instead, EZLynx and other companies working on solutions for commercial insurance have focused on the
              second biggest problem: how to help agents manage the multiple workflows for each customer they have to
              get a quote for. These workflows, called submissions, look something like the following:
            </p>

            <ol>
              <li>Format all the supporting documents into standard industry documents that the insurance companies
                will accept.</li>
              <li>Email the documents to the insurance companies underwriter</li>
              <li>Wait for a response from the underwriter. Typically this can take several days to several weeks.</li>
              <li>The underwriter might respond by one of several requests:
                <ol style="list-style-type: lower-alpha">
                  <li>The customer needs to send more supporting documents</li>
                  <li>The application was rejected because the insurance company didn’t want to handle that particular
                    risk at this time (although that might change the next year)</li>
                  <li>The insurance company might be willing to cover only part of the risk. The agent then has to
                    take the rest of the insurance application and try to find another insurance company that might
                    be willing to accept that risk.</li>
                </ol>
              </li>
              <li>Respond to the underwriters request, or apply to another insurance company.</li>
              <li>Repeat the process for each insurance company that the agent is using for this application only.</li>
              <li>Repeat steps 1-6 for every insurance application for every customer that the agent is trying to get
              a quote for.</li>
            </ol>

            <p>
              Managing this workflow for one customer is difficult enough. Doing this day in and day out for the
              dozens of customers each agent has to manage is a herculean effort.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Background</h3>
          <div class="page-details-desc">
            <p>
              The initial Submission Center app had been built by the development team without any UX involvement, and
              it showed. They had built the app using pieces from apps I had designed at EZLynx until then, but
              without really doing any user research or usability testing to validate the overall design.
            </p>

            <p>
              The management team was unhappy with the results and brought me in to look at what the team had built and
              fix it.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Analysis</h3>
          <div class="page-details-desc">
            <p>
              The product owner assigned to the project was new to EZLynx and resistant to any UX involvement in the
              project. To help alleviate his concerns, I asked him to walk me through the app. It was just as bad as
              the management team had said it was.
            </p>

            <p>
              To try and understand what they were trying to achieve with the product, I asked the product owner to
              walk me through submission process they were trying to code. As I sketched out the workflow, it was
              apparent that there was a tremendous disconnect between what the app was doing and what
              <strong>an actual agent wanted to do</strong>.
            </p>

            <p>
              The product owner realized the issues with the app that the team had built but he was unwilling to budge
              from his timeline. After a lot of persuasion and explanation of how a poor user experience could
              severly impact both the development timeline (as the team would have to spend a lot of time fixing the
              UI) and the time-to-market, I was able to get him to delay the release by one week so I could do some
              very rapid discovery and ideation.
            </p>


          </div>
        </section>


        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">
            <p>
            </p>


          </div>
        </section>



        <section class="page-details">
          <h3 class="page-details-title">Ideation</h3>
          <div class="page-details-desc">
            <p></p>

            <figure>
              <img src="@/assets/images/ezlynx/sales-center/sales-center-home.png"  class="figure">
            </figure>



          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Reaction</h3>
          <div class="page-details-desc">
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
