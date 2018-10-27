var websites = {
    websites:  [
            {
                URL: "safeco.com",
                Description: "Safeco Insurance main website",
                LOBs: [ "All" ]
            },
            {
                URL: "commercial.safeco.com",
                Description: "Safeco Insurance Commercial",
                LOBs: [
                        { lob: "Businessowners" },
                        { lob: "Commercial Property" },
                        { lob: "Commercial Automobile" },
                        { lob: "General Liability" },
                        { lob: "Workers Compensation" },
                        { lob: "Personal Automobile" },
                        { lob: "Homeowners" },
                        { lob: "Personal Umbrella" }
                    ]
            },

        ]
};

function renderWebsites() {
    var websitesTemplateScript = $("#websites-template").html();
    var websitesTemplate = Handlebars.compile(websitesTemplateScript);
    var websitesData = websitesTemplate(websites);
    $('#websites').html(websitesData);
}

renderWebsites();