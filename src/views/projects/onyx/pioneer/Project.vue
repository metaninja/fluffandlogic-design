<template>
  <section class="site-body-content">

      <header class="page-header">
        <h2 class="page-title">
          <span class="page-subtitle">Onyx</span>
          Pioneer
        </h2>

        <section class="page-meta-tags">
          <p class="page-meta-tag"><strong>Duration:</strong> 3 months</p>
          <p class="page-meta-tag"><strong>Roles:</strong> User Research, Journey Map, Prototyping</p>
        </section>
      </header>

      <section class="page-abstracts">
        <section class="page-abstract">
          <h3 class="page-abstract-title">About Onyx</h3>

          <p class="page-abstract-desc">
            Hotels use commissions to build long-term relationships with event managers and event planners and
            encourage  them to use their facilities and services in the future. For a hotel, keeping track of all of
            the payments can become involved and result in missed payments.
          </p>
        </section>
      </section>

      <section class="page-details">

        <h3 class="page-details-title">Background</h3>
        <section class="page-details-desc">
          <p>
            This is where Onyx came in. Onyx handled the commissions process and the payment back and forth between
            hotel  chains and event managers, freeing up the hotels and event managers to do what they do best:
            ensure  the guests have the best experience they can have.
          </p>

          <p>
            Late in 2015, Onyx approached Slalom to help them grow beyond the commissions processing market.
          </p>

        </section>

          <h3 class="page-details-title">Discovery</h3>
          <section class="page-details-desc">
            <p>
              With only six weeks to complete the entire project, I had to carefully schedule every step of my user
              experience process right from the start. The key was to start with the outcome in mind. I then walked
              back  week by week to figure out what UX artifacts we would need each week to get to the final deliverable.
            </p>

            <table>
              <tr>
                <th>Time</th>
                <th>Stage</th>
                <th>Artifacts</th>
              </tr>
              <tr>
                <td style="white-space: nowrap;">
                  Week 1
                </td>
                <td>
                  Kick-off and Planning
                </td>
                <td>
                  <ul>
                    <li>Vision Board</li>
                    <li>Lean Business Model Canvas</li>
                    <li>Project Model Canvas</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Week 2
                </td>
                <td>
                  Discovery
                </td>
                <td>
                  <ul>
                    <li>Stakeholder Interviews</li>
                    <li>Product Research</li>
                    <li>Competitive Research</li>
                    <li>Analysis of Onynx Business Model</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Week 3
                </td>
                <td>
                  Discovery
                </td>
                <td>
                  <ul>
                    <li>Product Research</li>
                    <li>User Interviews</li>
                    <li>Existing User Flows</li>
                    <li>Pain Points and Opportunities</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Week 4
                </td>
                <td>
                  Analysis
                </td>
                <td>
                  <ul>
                    <li>Personas</li>
                    <li>Journey Map</li>
                    <li>Future Workflows</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Week 5-6
                </td>
                <td>
                  Ideation
                </td>
                <td>
                  <ul>
                    <li>Coded Prototype</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Week 6
                </td>
                <td>
                  Final Presentation
                </td>
                <td>
                  <ul>
                    <li>Coded Prototype</li>
                    <li>Business Requirement Document (BRD)</li>
                  </ul>
                </td>
              </tr>
            </table>

            <p>I kicked off the user research by interviewing various users in the events process, including event
              managers on both the hotel and event side. I
              developed a set
            of personas and mapped each persona's user flow to understand where the pain points were.</p>

            <!--<figure>-->
            <!--<img src="@/assets/images/onyx/current/Pre-Contract.png" class="figure">-->
            <!--<figcaption>Existing Workflow: Shopping For Venues</figcaption>-->
            <!--</figure>-->

            <figure>
              <img src="@/assets/images/onyx/current/Pre-Event.png" class="figure">
              <figcaption>Existing Workflow: Before The Event</figcaption>
            </figure>

            <!--<figure>-->
            <!--<img src="@/assets/images/onyx/current/Event.png" class="figure">-->
            <!--<figcaption>Existing Workflow: During The Event</figcaption>-->
            <!--</figure>-->

            <figure>
              <img src="@/assets/images/onyx/current/Commissions.png" class="figure">
              <figcaption>Existing Workflow: Post-Event Getting Paid</figcaption>
            </figure>

          </section>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Analysis</h3>
          <section class="page-details-desc">

            <p>
              I realized that there was much overlap between the various personas involved in the event management
              workflow. I used a journey map to show all that information in an easy-to-digest, scannable way.
            </p>


            <figure>
              <img src="@/assets/images/onyx/current/Journey.png" class="figure">
              <figcaption>Journey Map</figcaption>
            </figure>


          </section>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Ideation</h3>
          <section class="page-details-desc">
            <p>
              To show Onyx what a possible solution could look like, I created a prototype in code using the
              <a href="http://bff.how/" target="_blank"><strong>BFF prototyping engine</strong></a>, a prototyping
              tool that I had developed to help my UX team ideate much faster than was traditionally possible (see
              <router-link to="/projects/securus/ngscp/"><strong>Securus</strong></router-link> for additional
              information).</p>

            <figure>
              <div style="display: flex;">
                <img src="@/assets/images/onyx/screens/onyx-home.png" class="figure">
                <img src="@/assets/images/onyx/screens/onyx-event-details.png" class="figure">
              </div>
            </figure>


          </section>
        </section>


      </section>
</template>
