<template>
    <section class="site-body-content">

        <header class="page-header">
            <h2 class="page-title">
                <span class="page-subtitle">EZLynx</span>
                Import Assets
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
                        For insurance agencies dealing with commercial clients (e.g. companies with fleets of vehicles,
                        or managing apartment complexes), agents have to input a considerable amount of data for
                        each entity that the customer wants to insure (vehicles, buildings, locations, etc.) every time
                        they want to submit a request for a quote to an insurance company. The agents then have to enter
                        the information again if the customer added or removed vehicles, equipments, or other things
                        to or from their inventory and wanted to update their policy coverage accordingly.</p>
                    <p>
                        Until recently, agents using EZLynx had to manually add or remove those entries one at a time,
                        for every customer that the agent supported. It's a tedious process that takes hours and
                        takes time away from supporting their customers. There were only a couple of places in EZLynx
                        where they could bulk upload spreadsheets into the app, the preferred method. As EZLynx
                        expands support for other types of insurance, the company will have to continue to add bulk
                        upload support to each and every one of these new "Lines of Businesses".
                    </p>
                </div>
            </section>

            <section class="page-details">
                <h3 class="page-details-title">Discovery</h3>
                <div class="page-details-desc">
                    <p>
                        The problem went beyond simply creating an intuitive UI and required thinking of the import
                        workflow across all of EZLynx. Why? Since joining EZLynx, I had run into issues where
                        developers would push back on all but the simplest UI changes. The product managers were
                        focusing on speed to market and ignoring the enormous tech debt that had resulted from that
                        approach.
                    </p>

                    <p>
                        To get around this problem, I had factor in reusability, modularity, and API-driven
                        interfaces into my design discussions and then push the product managers and developers to
                        factor that into the development process.
                    </p>
                </div>
            </section>

            <section class="page-details">
                <h3 class="page-details-title">Analysis</h3>
                <div class="page-details-desc">
                    <p>
                        I had worked on an extensive bulk upload workflow for another feature I had helped design (a
                        redesign of the Commissions feature in EZLynx). In addition, I looked at the existing bulk
                        upload features already in the system. Based on my analysis, every bulk upload shared a
                        common set of steps:
                    </p>

                    <ul>
                        <li>Upload file</li>
                        <li>Map Column Headers</li>
                        <li>Validate Data</li>
                    </ul>

                    <p>
                        I tested the workflow with various scenarios to validate the idea. The idea made sense on the
                    surface, barring any technical and architectural challenges.
                    </p>

                    <p>
                        I then expanded the workflow to show how we could make the component generic enough to deal
                        with the various object schemas and validation rules that different types of entities would
                        required. For example, importing vehicles into EZLynx requires validating the VIN, which
                        importing buildings and locations would not. However buildings and locations have to have
                        valid USPS addresses, and so on.
                    </p>

                    <figure>
                        <img src="@/assets/images/ezlynx/import-assets/discovery-workflow.svg" style="width: 100%">
                    </figure>
                </div>
            </section>

            <section class="page-details">
                <h3 class="page-details-title">Ideation</h3>
                <div class="page-details-desc">
                    <p>
                        The design went through several iterations after development began. The initial designs were
                        meant to reuse as much of the existing styles and UI components as possible. However, once we
                        started adding test data, we noticed that the existing guidelines pushed the actual data too
                        far down in the page, requiring a lot of scrolling every time the user navigated to a
                        different step in the workflow. The executive team reviewing the sprint weren't too keen on
                        the design either.
                    </p>

                    <p>
                        Working with the product owner, Ricky, we tweaked the design, removing redundant text,
                        allowing components to flow next to each other. I was concerned that the development team
                        would not be able to achieve the design to our satisfaction, and that concern was borne out
                        by the team lead.  To resolve this issue, I added one of my UI engineer, Suhas, to the project to
                        work on the presentation layer (HTML, CSS, Angular JavaScript code).
                    </p>

                    <figure>
                        <img src="@/assets/images/ezlynx/import-assets/10-upload-file.png" style="width: 100%">
                        <figcaption>Upload File</figcaption>
                    </figure>

                    <figure>
                        <img src="@/assets/images/ezlynx/import-assets/20-map-col-headers.png" style="width: 100%">
                        <figcaption>Map Column Headers</figcaption>
                    </figure>

                    <figure>
                        <img src="@/assets/images/ezlynx/import-assets/30-validating.png" style="width: 100%">
                        <figcaption>Validating Data</figcaption>
                    </figure>

                    <figure>
                        <img src="@/assets/images/ezlynx/import-assets/40-fix-errors.png" style="width: 100%">
                        <figcaption>Review Imported Data</figcaption>
                    </figure>

                    <p>Late in the development process, we added the ability to upload files from either the agent's
                    computer or the EZLynx document library, an account specific storage that agents used to
                    streamline their workflow. This workflow was different enough from the typical file upload
                    workflow, that I had to ideate on how to keep the workflow intuitive.</p>

                    <figure>
                      <img src="@/assets/images/ezlynx/import-assets/00-upload-file-workflows.png" style="width:100%">
                    </figure>

                </div>
            </section>

            <section class="page-details">
                <h3 class="page-details-title">Result</h3>
                <div class="page-details-desc">
                    <p>
                        The team had some initial struggles with figuring out how to handle custom validations
                        required by certain entity types, in addition to several other develoment challenges,
                        including creating a common foundation, and learning Angular 7 and Angular Material.
                    </p>

                    <p>
                        Once the team resolved those challenges, they discovered the real value of a reusable import
                        asset component. The team was able to reduce the time taken to add support for each
                        additional entity (vehicles, equipment, locations and buildings) from the several weeks it
                        would have taken them in the past, to 1-2 weeks with the new reusable architecture.
                    </p>

                    <p>The team also realized the value of having a UI engineer on the team focus on the
                        presentation layer. Most developers loathe working on UI code. Having a dedicated UI engineer
                        working with the team let them focus on the functional and server-side code, increasing
                        their velocity and resolving a major complaint from the executive team.
                    </p>

                    <p>
                        As of writing, the team is on schedule to deliver the ability to import at least 4-5 entity
                        types. The response from the executive team to the new UI and the improved performance has been
                        phenomenal.
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
