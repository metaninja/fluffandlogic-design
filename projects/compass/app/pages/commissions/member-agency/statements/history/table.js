$(document).ready(function() {
    var commissions = {
        commissions: [
            {
                Agency: "Penguin Insurance Services",
                StatementNumber: "1003",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                DateSent: "2/2/2018 12:34pm",
                Recent: true
            },
            {
                Agency: "Alex Huan Agency",
                StatementNumber: "1005",
                StatementDate: "4/6/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Sent",
                DownloadDate: "4/6/2017",
                DateSent: "2/2/2018 12:34pm"
            },
            {
                Agency: "Cactus Independent Insurance",
                StatementNumber: "1006",
                StatementDate: "4/6/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Open",
                DownloadDate: "4/6/2017",
                DateSent: "2/2/2018 12:34pm"
            },
            {
                Agency: "Sunshine State Independent Agency",
                StatementNumber: "1007",
                StatementDate: "4/5/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Open",
                DownloadDate: "4/5/2017",
                DateSent: "12/3/2017 4:22pm"
            }
        ]
    };

    var commissionsTemplateScript = $("#commissions-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#commissions').append(commissionsData);
});