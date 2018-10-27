$(document).ready(function() {
    var commissions = {
        commissions: [
            {
                Agency: "Penguin Insurance Services",
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                DateSent: "",
                Note: "This is a note added to this statement."
            },
            {
                Agency: "Penguin Insurance Services",
                Carrier: "ACE",
                StatementNumber: "2345",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Sent",
                DownloadDate: "4/7/2017",
                DateSent: "4/8/2017"
            },
            {
                Agency: "Alex Huan Agency",
                Carrier: "ACE",
                StatementNumber: "2345",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Sent",
                DownloadDate: "4/7/2017",
                DateSent: "4/8/2017"
            },
            {
                Agency: "Cactus Independent Insurance",
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                DateSent: ""
            },
            {
                Agency: "Alex Huan Agency",
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                DateSent: "",
                Note: "This is another note that was added for the SafeCo Commission statement."
            }
        ]
    };

    var commissionsTemplateScript = $("#commissions-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#commissions').append(commissionsData);
});