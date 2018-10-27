$(document).ready(function() {
    var policies = {
        policies: [
            {
                Customer: "Alonzo Sanders",
                Carrier: "AAA Insurance",
                Policy: "234561",
                LOB: "Auto (Commercial)",
                EffectiveDate: "12/15/2017 12:32pm"
            },
            {
                Customer: "Mark Smith",
                Carrier: "SafeCo",
                Policy: "SF234561",
                LOB: "Auto (Personal)",
                EffectiveDate: "12/15/2017 12:32pm"
            },
            {
                Customer: "Jane Folger",
                Carrier: "SafeCo",
                Policy: "SF0324958",
                LOB: "Auto (Personal)",
                EffectiveDate: "12/15/2017 12:32pm"
            },
            {
                Customer: "Karen Jacobs",
                Carrier: "State Farm",
                Policy: "ST190238",
                LOB: "Home",
                EffectiveDate: "12/15/2017 12:32pm"
            },
            {
                Customer: "William Baker",
                Carrier: "Travelers Insurance",
                Policy: "P1235098",
                LOB: "Home",
                EffectiveDate: "12/15/2017 12:32pm"
            },
            {
                Customer: "Riker Sparth",
                Carrier: "State Farm",
                Policy: "ST385041",
                LOB: "Auto (Home)",
                EffectiveDate: "12/15/2017 12:32pm"
            },


        ]
    };

    var policiesTemplateScript = $("#policies-template").html();
    var policiesTemplate = Handlebars.compile(policiesTemplateScript);
    var policiesData = policiesTemplate(policies);
    $('#policies').append(policiesData);
});