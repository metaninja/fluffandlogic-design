$(document).ready(function() {
    var carriers = {
        carriers: [
            {
                Name: "A. J. Wayne & Associates (Prof Liab)",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "AAA - Auto Club Group",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "AAA Insurance",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "AAA Insurance - Western United",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "AAA MID ATLANTIC REINS CO",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "AAA SOUTHERN NEW ENGLAND INS CO",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "ABA Insurance Svc.",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "Abacus Insurance",
                Type: "Carrier",
                Visible: true
            },
            {
                Name: "ABS BOILER & MARINE INS CO",
                Type: "Carrier",
                Visible: false
            },
            {
                Name: "Acceptance Indemnity Ins Co",
                Type: "Carrier",
                Visible: false
            },
            {
                Name: "A-Central Auto Insurance Company",
                Type: "Carrier",
                Visible: true
            }
        ]
    };

    var carriersTemplateScript = $("#carriers-template").html();
    var carriersTemplate = Handlebars.compile(carriersTemplateScript);
    var carriersData = carriersTemplate(carriers);
    $('#carriers').append(carriersData);

    $(".nav-parent").eq(3).find(".nav-parent-header").addClass("active");
});