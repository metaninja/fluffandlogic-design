$(document).ready(function() {
    var agencies = {
        agencies: [
            {
                Agency: "Bob Parr Insurance Inc",
                Distance: "5 mi",
                Address1: "543 Folsom Street",
                Address2: "Coppell TX 75014"
            },
            {
                Agency: "Mark Winters Agency",
                Distance: "4.12 mi",
                Address1: "543 Folsom Street",
                Address2: "Coppell TX 75014"
            },
            {
                Agency: "Irving Independent Insurance",
                Distance: "3.17 mi",
                Address1: "543 Folsom Street",
                Address2: "Coppell TX 75014"
            }
        ]
    };

    var agenciesTemplateScript = $("#agencies-template").html();
    var agenciesTemplate = Handlebars.compile(agenciesTemplateScript);
    var agenciesData = agenciesTemplate(agencies);
    $('#agencies').append(agenciesData);
});