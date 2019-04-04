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
              The MVP for the Submission Center app had been built by the development team without any UX involvement,
              and it showed. Instead of streamlining the commercial submission process, it made it even more
              convoluted. The screens didn't logically flow from one state to the next. Users would have to hunt
              around the screen to figure out what to complete next.
            </p>

            <p>
              I was brought in to look at what the team had built and fix it.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Analysis</h3>
          <div class="page-details-desc">
            <p>
              To understand the usability problems with the software already built, I worked with the product owner
              to sketch out a user flow and mental model of how agents currently handled submissions. Once I did so,
              it was obvious that there was a tremendous disconnect between what the app was doing and what
              <strong>an actual agent wanted to do</strong>.
            </p>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/discovery/mental-model.svg"  class="figure">
              <figcaption>A Typical Commercial Insurance Agent's Mental Model</figcaption>
            </figure>

            <p>
              The team wanted to launch an alpha release first and then fix the usability issues later. Based on my
              previous experience, I knew that a poor user experience (even in an alpha product) could
              severely impact both the development timeline (as the team would have to spend a lot of time fixing the
              UI) and the time-to-market. I was eventually able to negotiate a one week delay to the project so I could
              do some very rapid discovery and ideation and present an
              alternate solution.
            </p>

          </div>
        </section>


        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">
            <h4>DAY 1</h4>
            <p>
              Given the very compressed timeline, I knew I was going to need some help. I brought in another product
              owner I had worked with, who had worked on a startups in the past. Our goal was to treat this
              project like a lean startup. We spent the first day establishing the business goals and product-market fit
              by creating a lean business model canvas and value proposition canvas.
            </p>

            <h4>DAY 2</h4>
            <p>
              Based on what we learnt from the Lean Business Model and Value Proposition exercise, we started
              building out an ideal future system flows to streamline the Submission workflow. We knew we wouldn't be
              able to build out some of the processes and connectors in the system flow any time soon (and definitely
              not for the MVP) it would help us build out a roadmap and objective to drive towards, and also help
              differentiate EZLynx from out competitors and build a moat around our product early on.
            </p>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/discovery/high-level-screen-flow.svg"  class="figure">
              <figcaption>High Level Screen And System Flow</figcaption>
            </figure>
          </div>
        </section>



        <section class="page-details">
          <h3 class="page-details-title">Ideation</h3>
          <div class="page-details-desc">
            <h4>DAY 3</h4>
            <p>
              Ordinarily, I would develop somewhat high-fidelity mockups using reusable components in the design
              system library I had built in UXPin. However, given the limited amount of time and the fact that there
              was already a pre-existing app which I had only seen briefly, I decided to keep the mockups at a very
              high level, so the developers would be able to easily translate the wireframes into whatever UI
              framework or library they were using.
            </p>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/wireframes/dashboard.png"  class="figure">
              <figcaption>Submission Center Dashboard</figcaption>
            </figure>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/wireframes/overview.png"  class="figure">
              <figcaption>Overview Of A Single Submission</figcaption>
            </figure>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/wireframes/email.png"  class="figure">
              <figcaption>Email With Mail Merge Fields And Completed Submission Attached</figcaption>
            </figure>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/wireframes/discussion.png"  class="figure">
              <figcaption>Submission Discussion Thread (Contextual Sidebar)</figcaption>
            </figure>

            <h4>DAY 4</h4>
            <p>We reviewed the wireframes with a subject matter expert (SME). The SME had worked
            in the insurance industry for 30 years before joining EZLynx. She was able to surface problems with
              our wireframes and suggest solutions based on her previous experience working as a commercial agent.</p>

            <h4>DAY 5</h4>
            <p>We presented the high-level system flow and the wireframes to the product owner and the
              development team.</p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Initial Reaction</h3>
          <div class="page-details-desc">
            <p>Due to prior commitments, the team decided to go to alpha with the app they had originally built,
              instead of developing the new streamlined UI.</p>

            <p>
              Over the next few weeks I continued to push for usability testing. I supported the team as best as I could
              with mockups to help ensure the product was consistent with the new EZLynx 5 design guidelines.
            </p>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/mockups/10-initial-overview.png"  class="figure">
              <figcaption>Light Styling To Existing Screens. Workflow Is Still Not Ideal.</figcaption>
            </figure>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/mockups/20-initial-details-view.png"  class="figure">
              <figcaption>Light Styling To Existing Screens. Workflow Is Still Not Ideal.</figcaption>
            </figure>

            <p>
              Once the product was released to alpha and we had real customers using the product, the team finally
              acknowledged the problems with the existing UI.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Ideation, Again</h3>
          <div class="page-details-desc">
            <p>
              I was pulled back into the product design process and asked to figure out how to fix the design.
              I revamped the initial designs and created more detailed interactive mockups with a much more
              streamlined workflow.</p>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/mockups/30-improved-overview.png"  class="figure">
              <figcaption>Improved Submission Provides Birds Eye View Of All Carrier Threads In A
                Submission</figcaption>
            </figure>

            <figure>
              <img src="@/assets/images/ezlynx/submission-center/mockups/40-new-submission.png"  class="figure">
              <figcaption>Cleaned Up Details View To Make Data Entry Faster, More Scannable</figcaption>
            </figure>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Results</h3>
          <div class="page-details-desc">
            <p>In the absence of usability testing, I needed to get some user analytics once
              the alpha / beta users were using the new screens. At the time, I had been working on getting buy-in
              for either <a href="https://hotjar.com" target="_blank">HotJar</a> or <a href="https://fullstory.com">
              FullStory</a>, both of which can record user interactions on a screen and provide valuable feedback
              that page-level tools like Google Analytics might miss.
            </p>

            <p>
              At the time of writing, the product was still in alpha release. FullStory is still in the process of
              being approved. Based on my recommendation, Submission Center will be one of the first products at
              EZLynx to use FullStory.
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
blockquote {
  position: relative;
  display: inline-block;
  margin-top: 0;
  padding-left: 48px;
  padding-right: 48px;
}
blockquote:before {
  position: absolute;
  left: 0;
  top: -16px;
  content: "\201C";
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 3em;
  color: var(--color-gray-lighter);
}
blockquote:after {
  position: absolute;
  right: 0;
  top: -16px;
  content: "\201D";
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 3em;
  color: var(--color-gray-lighter);
}
</style>
