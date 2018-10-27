$(document).ready(function() {
    var policies = {
        policies: [
            {
                Name: "",
                Source: "Manual",
                Status: "Matched",
                DownloadDate: "08/04/2017",
                Premium: "$1,000.00",
                Insured: "Madison, John",
                Agency: "Penguin Insurance Services",
                Carrier: "AARP",
                PolicyNum: "304570",
                LOB: "Auto (Commercial)",
                TransType: "New Business",
                Type: "Commercial",
                NetChg: "$0.00",
                TransDate: "08/04/2017",
                AppliedDate: "08/04/2017",
                EffDate: "08/22/2012",
                ExpDate: "08/15/2017",
                ProducerCode: ""
            },
            {
                Name: "",
                Source: "Manual",
                Status: "Matched",
                DownloadDate: "08/03/2017",
                Premium: "$771.00",
                Insured: "Anderson, Mark",
                Agency: "Alex Huan Agency",
                Carrier: "NY Central Mutual",
                PolicyNum: "Z230948",
                LOB: "Auto (Personal)",
                TransType: "Renewal Image",
                Type: "Personal",
                NetChg: "$0.00",
                TransDate: "08/04/2017",
                AppliedDate: "01/10/2017",
                EffDate: "08/03/2015",
                ExpDate: "08/22/2012",
                ProducerCode: ""
            },
            {
                Name: "",
                Source: "Manual",
                Status: "Matched",
                DownloadDate: "08/04/2017",
                Premium: "$1,225.00",
                Insured: "Parisi, Nichol",
                Agency: "Alex Huan Agency",
                Carrier: "AAA Insurance",
                PolicyNum: "304570",
                LOB: "Auto (Commercial)",
                TransType: "New Business",
                Type: "Commercial",
                NetChg: "$0.00",
                TransDate: "08/04/2017",
                AppliedDate: "08/04/2017",
                EffDate: "08/22/2012",
                ExpDate: "08/15/2017",
                ProducerCode: ""
            },
            {
                Name: "",
                Source: "Manual",
                Status: "Matched",
                DownloadDate: "08/02/2017",
                Premium: "$905.00",
                Insured: "Parisi, Nichol",
                Agency: "Cactus Independent Insurance",
                Carrier: "SafeCo",
                PolicyNum: "SF039845",
                LOB: "Auto (Commercial)",
                TransType: "New Business",
                Type: "Commercial",
                NetChg: "$0.00",
                TransDate: "08/02/2017",
                AppliedDate: "08/04/2017",
                EffDate: "08/22/2018",
                ExpDate: "08/15/2018",
                ProducerCode: ""
            }
        ]
    };

    var policiesTemplateScript = $("#policies-template").html();
    var policiesTemplate = Handlebars.compile(policiesTemplateScript);
    var policiesData = policiesTemplate(policies);
    $('#policies').append(policiesData);

    // $(".nav-parent").eq(5).find(".nav-parent-header").addClass("active");
});