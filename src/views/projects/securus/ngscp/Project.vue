<template>
  <section class="site-body-content">

      <header class="page-header">
        <h2 class="page-title">
          <span class="page-subtitle">Securus</span>
          Secure Communication Platform
        </h2>

        <div class="page-meta-tags">
          <p class="page-meta-tag"><strong>Duration:</strong> 22 months</p>
          <p class="page-meta-tag"><strong>Roles:</strong> Rapid Prototyping, Design System, Visual Design, Front-End Development, Usability Testing
          </p>
        </div>
      </header>

      <div class="page-abstracts">
        <h3 class="page-abstract-title">About Securus</h3>
        <div class="page-abstract-desc">
          <p>
            Securus’s Secure Communication Platform (SCP) is used by prisons to monitor inmate communications with the
            outside world and to analyze the conversations for potentially criminal activity.
          </p>

        </div>
      </div>

      <div class="project-page-details">

        <section class="page-details">
          <h3 class="page-details-title">Background</h3>
          <div class="page-details-desc">
            <p>Features had been layered organically over the years without much thought to the user experience or
              performance. By 2013, there were millions of records in the system, and the performance had slowed to a
              crawl. A single search could take upwards of 5-8 minutes before it returned any results (or no
              results). Users had time to hit search, go make a fresh batch of coffee, and take their time coming
              back, and would find the search hadn't finished yet.
            </p>

            <p>
              The user interface was extremely complicated and confusing. The interface had been designed by developers
              and had grown organically over the years as new features were added without any thought to information
              architecture.
            </p>

            <p>To say nothing of the branding which had become stale and dated and didn't refect the company's
              philosophy.</p>

            <p>
              Securus needed to overhaul everything: the backend software, the frontend code, the visual design,
              information architecture, and even the branding.
            </p>
            <figure>
              <img src="@/assets/images/securus/login.jpg">
              <figcaption>Redesigned Login Page Using Identity Developed By My UX Manager, Tracey Nolte</figcaption>
            </figure>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">
            <p>
              Sadly, I was <strong>not</strong> involved in the initial discovery process (user research, personas, existing
              workflows, etc.) Credit for that goes to the existing UX team who had spent months doing user research,
              creating personas, and  preparing the project for the development team.
            </p>

            <p>
              Instead, I spent a very painful, but ultimately productive six months on a parallel project at
              Securus helping to manage a project that was far behind schedule and poorly managed and lacked any
              developers. I learnt how to write JavaScript code using the AngularJS UI framework, and about front-end
              tools like Grunt for task automation, Subversion for source control, and Bower to install packages.
              Developing with AngularJS not only ratcheted up my front-end development skills but also taught me the
              value of breaking up functionality into reusable, API-driven components.
            </p>

            <p>
              By the time I joined the NGSCP UX team, the discovery process had been completed and development had
              begun. The team had been struggling to keep pace with the developers. They had been using traditional
              design tools like Axure, but the developers needed more direct guidance and there wasn't a front-end
              designer or developer to help convert mockups into usable code.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">

            <p>
              The UX team had resorted to designing in code using a pair of now defunct online
              editors that outputted HTML using the Bootstrap UI Framework. But the code was only barely usable and
              the team continued to fall behind.
            </p>

            <p>
              Once I joined the team, I experimented with with several other tools that could help the UX team be
              productive. Nothing worked. Frustrated, I set aside a couple of days to develop my own tool, using my
              experience with AngularJS to understand what would make for an effective tool.
            </p>

            <p>
              The result of that spike was a tool I named <a href="http://bff.how" target="_blank"><strong>BFF</strong></a>,
              a tongue-in-cheek acronym that stood for Barebones Functional Framework. It was a collection of
              development libraries and tools tied together by a custom stripped-down JavaScript framework that I
              wrote from scratch based on my analysis of how Angular JS worked.
            </p>

            <figure>
              <img src="@/assets/images/securus/bff.png">
              <figcaption>
                BFF (Barebones Functional Framework)
              </figcaption>
            </figure>

            <p>
              With the BFF tool and my ability to prototype in code faster than with the prior prototyping tools. We
              finally caught up to the development team and pushed ahead until we had at least several weeks of
              backlog for the developers to choose from.
            </p>

            <p>
              This was only the beginning of my contribution to the NGSCP project. Listed below are some of the roles
              that I played and deliverables that I delivered over the next year and a half.
            </p>

            <table>
              <tr>
                <th>Role</th>
                <th>Deliverable</th>
              </tr>
              <tr>
                <td>
                  User Researcher and Analyst
                </td>
                <td>
                  <ul>
                    <li>Stakeholder interviews and reviews</li>
                    <li>Writing user stories</li>
                    <li>Business Acceptance</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Front-End Designer
                </td>
                <td>
                  <ul>
                    <li>Prototype designs in code using BFF every week until the end of the project</li>
                    <li>Develop a pattern library</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Graphics Design
                </td>
                <td>
                  <ul>
                    <li>Visual Design For NGSCP application</li>
                    <li>Color Palette</li>
                    <li>Icons</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Front-End Developer
                </td>
                <td>
                  <ul>
                    <li>Experiment with new UI libraries</li>
                    <li>Migrate prototype styles to development environment</li>
                    <li>Develop design system (towards the end of the project)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Usability Testing</td>
                <td>
                  <ul>
                    <li>Traveled to multiple sites (including an actual prison) to do on-site usability testing</li>
                    <li>Facilitated usability testing</li>
                  </ul>
                </td>
              </tr>
            </table>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Visual Design</h3>
          <div class="page-details-desc">

            <p>Between building out designs in the BFF prototyping engine, and developing the BFF tool itself, there
            were several improvements to the visual design of the NGSCP application.</p>

            <figure>
              <img src="@/assets/images/securus/flat-design.jpg">
              <figcaption>
                Visual Design Pitch Deck.
                <a href="/img/securus/flat-design.pdf">
                  <strong>
                    View PDF
                  </strong>
                </a>
              </figcaption>
            </figure>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Usability Testing</h3>
          <div class="page-details-desc">
            <p>
              About a year in, we had prototyped enough functionality that we needed to do usability testing to
              ensure users would be comfortable with the new workflow. In addition to preparing the prototype for
              usability testing, I wrote the usability testing guidelines and scripts. I traveled to three separate
              facilities (including one inside an actual prison) to get user feedback and tweak the design accordingly.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Design System</h3>
          <div class="page-details-desc">
            <p>
              During the two years of development, the number of teams working on the project grew from one small team
              with a handful of developers, to four teams &mdash; two based out of the Securus office, one based out of
              Chicago, and another based out of Montreal, with a total of over 30 developers. Each team had a
              different way of collaborating and handling UI direction.
            </p>

            <p>
              We started with a pattern library to encourage developers to follow a common set of guidelines. This
              pattern library eventually evolved into a full fledged design system maintained by a dedicated team of
              designers and developers.
            </p>

            <figure>
              <img src="@/assets/images/securus/pattern-library.jpg">
              <figcaption>
                Pattern Library. Predecessor To Design System
                <a href="/img/securus/pattern-library.pdf">
                  <strong>
                    View PDF
                  </strong>
                </a>
              </figcaption>
            </figure>

          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Results</h3>
          <div class="page-details-desc">
            <p>
              The Securus NGSCP project ended up becoming one of the most important projects I've worked on. A lot of
              my current methodologies and philosophy on how to scale design and support the product design process
              were forged in the fires of the NGSCP project:
            </p>

            <ul>
              <li>
                Refining my techniques for prototyping in code.
              </li>
              <li>Building out the BFF prototyping engine, a tool that I continue to use even to this day. I have
                researched numerous prototyping and development tools, including Webpack, Angular, Vue.js,
                and even static site generators, but nothing to date matches the speed or ease of use of BFF.
              </li>
              <li>
                Learning how to manage multiple agile teams.
              </li>
              <li>
                Developing and maintaining a design system.
              </li>
            </ul>

            <p>
              <a href="/projects/securus/wireframes/#/pages/dashboard/">
                <span class="bigger"><strong>View the fully interactive Securus prototype here &raquo;</strong></span>
              </a><br>
              <span class="smaller"><strong>Note:</strong> Be patient as it will take a few seconds for the initial load
                .</span>
            </p>
          </div>
        </section>

      </div>
  </section>
</template>
