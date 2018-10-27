$(document).ready(function() {
    var policies = {
        policies: [
            {
                certificateHolder: "Bank of America",
                lastSent: "11/22/2017 12:31pm",
                destination: "mwinters2@bankofamerica.com",
                email: true,
                fax: false,
                mail: false,
                text: false,
                client: false,
            },
            {
                certificateHolder: "Capital One",
                lastSent: "11/23/2017 2:11pm",
                destination: "jane.smith@capitalone.com",
                email: true,
                fax: false,
                mail: false,
                text: false,
                client: false,
            },
            {
                certificateHolder: "City of Dallas",
                lastSent: "11/23/2017 2:11pm",
                destination: "1392 Frankford Rd, Suite 213, Dallas TX 75092",
                email: false,
                fax: false,
                mail: true,
                text: false,
                client: false,
            },
            {
                certificateHolder: "Collin College",
                lastSent: "11/25/2017 5:12pm",
                destination: "sara.richards@cccc.edu",
                email: true,
                fax: false,
                mail: false,
                text: false,
                client: false
            },
            {
                certificateHolder: "SuperCut #31",
                lastSent: "Never",
                destination: "(972) 145-2341",
                email: false,
                fax: false,
                mail: false,
                text: true,
                client: false
            },
            {
                certificateHolder: "Wachovia Bank",
                lastSent: "Never",
                destination: "",
                email: false,
                fax: false,
                mail: false,
                text: false,
                client: true
            },
        ]
    };

    var policiesTemplateScript = $("#policies-template").html();
    var policiesTemplate = Handlebars.compile(policiesTemplateScript);
    var policiesData = policiesTemplate(policies);
    $('#policies').append(policiesData);
});