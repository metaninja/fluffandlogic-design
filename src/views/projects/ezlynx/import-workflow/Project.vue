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
        <company-ezlynx></company-ezlynx>
      </div>

      <div class="project-page-details">
        <section class="page-details">
          <h3 class="page-details-title">Background</h3>
          <div class="page-details-desc">
            <p>
              For insurance agencies dealing with commercial clients (e.g. companies with fleets of vehicles, or managing
              apartment complexes), agents have to type in a considerable amount of data for each entity that they want to
              insure (vehicles, buildings, locations, etc.) every time they want to submit a request for a quote to an insurance
              company. The agents then have to enter the information again if the customer added or removed vehicles, equipments,
              or other things to or from their inventory and wanted to update their policy coverage accordingly.</p>
            <p>
              Until recently, agents using EZLynx had to manually add or remove those entries one at a time, for every customer
              that the agent supported. It's a tedious process that takes hours and takes time away from supporting their customers.
              There were only a couple of places in EZLynx where they could bulk upload spreadsheets into the app, the preferred method.
              As EZLynx expands support for other types of insurance, the company will have to continue to add bulk upload support to
              each and every one of these new "Lines of Businesses".
            </p>
          </div>
        </section>

        <section class="page-details">
          <h3 class="page-details-title">Discovery</h3>
          <div class="page-details-desc">
            <p>At the heart of the problem is the need to modularize the EZLynx app with reusable components and API-driven interfaces.
              Why would a User Experience designer care about what is at it's core a development issue? One of the advantages I brought to
              EZLynx was a desire to understand the user experience needs of our users (both employees and customers) on a holistic level
              rather than simply on a project by project basis.

              The end result is that I'm able to see pain points that affect multiple
              teams and formulate solutions that can scale out across the organization.
            </p>
            <p>Why would a User Experience designer </p>

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

<script>
import CompanyEzlynx from '@/components/company/ezlynx.vue';
export default {
  name: "project-ezlynx-import-assets",
  components: {
    CompanyEzlynx
  }
};
</script>
