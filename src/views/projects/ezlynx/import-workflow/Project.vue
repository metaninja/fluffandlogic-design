<template>
  <section class="site-body-content">
    <div class="project-page">

      <div class="project-page-header">
        <h2 class="project-page-header-title">
          <span class="project-page-header-subtitle">EZLynx</span>
          Import Workflow
        </h2>

        <div class="project-page-header-meta-group">
          <p class="project-page-header-meta"><strong>Duration:</strong> 2 months</p>
          <p class="project-page-header-meta"><strong>Roles:</strong> Reusable Workflow, Managing a Team</p>
        </div>
      </div>

      <div class="project-page-summary">
        <h3 class="project-page-summary-title">About EZLynx</h3>
        <div class="project-page-summary-details">
          <p>
            EZLynx designs software that enables independent insurance agencies to do everything from get multiple quotes
            from competing insurance agencies and manage the end to end agency workflow from sales to pricing to support.
          </p>
        </div>
      </div>

      <div class="project-page-details">
        <section class="project-section">
          <h3 class="project-section-title">Background</h3>
          <div class="project-section-desc">
            <p>
              For insurance agencies dealing with commercial clients (e.g. companies with fleets of vehicles, or managing
              apartment complexes), agents have to input a considerable amount of data for each entity that they want to
              insure (vehicles, buildings, locations, etc.). Until recently, agents had to manually type in each entry one
              at a time with only a couple of places where they could bulk upload spreadsheets into the app, the preferred
              method.
            </p>
          </div>
        </section>

        <section class="project-section">
          <h3 class="project-section-title">Discovery</h3>
          <div class="project-section-desc">
            <p>
              We wanted to extend the ability to bulk upload entities into the many places where users need them. In
              addition, I wanted the developers to create a reusable component that could be reused with minimal
              configuration to upload other kinds of entities,
            </p>

            <p>
              I had worked on an extensive bulk upload workflow for another feature I had helped design (a redesign of the
              Commissions feature in EZLynx). In addition, I looked at the existing bulk upload features already in the
              system. Based on my analysis, every bulk upload shared a common set of steps: Upload file, Map Column Headers,
              Validate Data.
            </p>
          </div>
        </section>

        <section class="project-section">
          <h3 class="project-section-title">Ideation</h3>
          <div class="project-section-desc">
            <p>
              I created a system flow that showed how we could create a reusable workflow for all entities that needed a
              bulk upload workflow. I reused the Import Workflow I had designed for Commissions and extended it to allow for
              any kind of data that needed to be imported.
            </p>
          </div>
        </section>

        <section class="project-section">
          <h3 class="project-section-title">UI Engineering</h3>
          <div class="project-section-desc">
            <p>
              The agile team initially was not able to implement the design to the satisfaction of the stakeholders. To
              ensure a quality UI, I assigned one of my UI engineers to the team to help with  the UI.
            </p>
          </div>
        </section>

        <section class="project-section">
          <h3 class="project-section-title">Result</h3>
          <div class="project-section-desc">
            <p>
              After some initial struggles with figuring out how to handle custom validations required by certain entity
              types, the team has started to realize the value of having single reusable control that can be configured via
              JSON settings to handle almost any kind of data that the user wants to bulk import into the system.
            </p>

            <p>
              The team has completed the initial reusable component with one entity type, and is now moving on to other
              entity types.
            </p>
          </div>
        </section>

      </div>
    </div>
  </section>
</template>
