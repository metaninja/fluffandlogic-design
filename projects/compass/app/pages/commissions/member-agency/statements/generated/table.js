$(document).ready(function() {
    var commissions = {
        commissions: [
            {
                Agency: "Alex Huan Agency",
                StatementNumber: "1007",
                StatementDate: "4/6/2018",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Sent",
                DownloadDate: "4/6/2018",
                DateSent: "4/6/2018 12:34pm"
            },
            {
                Agency: "Cactus Independent Insurance",
                StatementNumber: "1007",
                StatementDate: "4/6/2018",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Open",
                DownloadDate: "4/6/2018",
                DateSent: "4/6/2018 12:34pm"
            },
            {
                Agency: "Penguin Insurance Services",
                StatementNumber: "1007",
                StatementDate: "4/6/2018",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Open",
                DownloadDate: "4/6/2018",
                DateSent: "4/6/2018 12:34pm",
            },
        ]
    };

    var commissionsTemplateScript = $("#commissions-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#commissions').append(commissionsData);
});