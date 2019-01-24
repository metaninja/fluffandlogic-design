<template>
  <section class="site-body-content">

      <header class="page-header">
        <h2 class="page-title">
          <span class="page-subtitle">EZLynx</span>
          Import Workflow
        </h2>

        <div class="page-meta-tags">
          <p class="page-meta-tag"><strong>Duration:</strong> 2 months</p>
          <p class="page-meta-tag"><strong>Roles:</strong> Reusable Workflow, Managing a Team</p>
        </div>
      </header>

      <div class="page-abstracts">
        <h3 class="page-abstract-title">About EZLynx</h3>
        <div class="page-abstract-desc">
          <p>
            EZLynx designs software that enables independent insurance agencies to do everything from get multiple quotes
            from competing insurance agencies and manage the end to end agency workflow from sales to pricing to support.
          </p>
        </div>
      </div>

      <div class="project-page-details">
        <section class="page-details">
          <h3 class="page-details-title">Background</h3>
          <div class="page-details-desc">
            <p>
              For insurance agencies dealing with commercial clients (e.g. companies with fleets of vehicles, or managing
              apartment complexes), agents have to input a considerable amount of data for each entity that they want to
              insure (vehicles, buildings, locations, etc.). Until recently, agents had to manually type in each entry one
              at a time with only a couple of places where they could bulk upload spreadsheets into the app, the preferred
              method.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">
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

        <section class="page-details">
          <h3 class="page-details-title">Ideation</h3>
          <div class="page-details-desc">
            <p>
              I created a system flow that showed how we could create a reusable workflow for all entities that needed a
              bulk upload workflow. I reused the Import Workflow I had designed for Commissions and extended it to allow for
              any kind of data that needed to be imported.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">UI Engineering</h3>
          <div class="page-details-desc">
            <p>
              The agile team initially was not able to implement the design to the satisfaction of the stakeholders. To
              ensure a quality UI, I assigned one of my UI engineers to the team to help with  the UI.
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Result</h3>
          <div class="page-details-desc">
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
  </section>
</template>
