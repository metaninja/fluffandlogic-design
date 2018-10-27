$(document).ready(function() {
    var lob = {
        lob: [
            {
                Name: "Yacht",
                Department: "Not Set",
                ShortName: "YACHT",
                Visible: true

            },
            {
                Name: "Workplace Violence",
                Department: "Not Set",
                ShortName: "",
                Visible: true
            },
            {
                Name: "Workers Comp",
                Department: "Not Set",
                ShortName: "WORK",
                Visible: true
            },
            {
                Name: "Wind policies",
                Department: "Not Set",
                ShortName: "WIND",
                Visible: false
            },
            {
                Name: "Watercraft (small boat)",
                Department: "Personal Lines (P/L)",
                ShortName: "BOAT",
                Visible: true
            },
            {
                Name: "Warranty",
                Department: "Not Set",
                ShortName: "WRNTY",
                Visible: false
            },
            {
                Name: "Valuable Papers",
                Department: "Not Set",
                ShortName: "VALP",
                Visible: true
            },

        ]
    };

    var lobTemplateScript = $("#lob-template").html();
    var lobTemplate = Handlebars.compile(lobTemplateScript);
    var lobData = lobTemplate(lob);
    $('#lob').append(lobData);

    $(".nav-parent").eq(3).find(".nav-parent-header").addClass("active");
});