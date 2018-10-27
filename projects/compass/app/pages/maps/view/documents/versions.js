$(document).ready(function() {
    var versions = {
        versions: [
            {
                Modified: "12/31/2016 12:53pm",
                User: "Shawn Smith"
            },
            {
                Modified: "11/12/2016 5:22pm",
                User: "Shawn Smith"
            },
            {
                Modified: "11/5/2016 2:11pm",
                User: "Shawn Smith"
            },
            {
                Modified: "10/24/2016 9:01am",
                User: "Shawn Smith"
            }
        ]
    };

    var versionsTemplateScript = $("#versions-template").html();
    var versionsTemplate = Handlebars.compile(versionsTemplateScript);
    var versionsData = versionsTemplate(versions);
    $('#versions').append(versionsData);
});