$(document).ready(function() {
    var commissions = {
        commissions: [
            {
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                ReadyToFinalize: true,
                ReadyToSend: true,
                Note: "This is a note added to this statement."
            },
            {
                Carrier: "ACE",
                StatementNumber: "2345",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                ReadyToFinalize: false,
                ReadyToSend: false
            },
            {
                Carrier: "ACE",
                StatementNumber: "2345",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                ReadyToFinalize: false,
                ReadyToSend: false
            },
            {
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                ReadyToFinalize: true,
                ReadyToSend: true
            },
            {
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                Premium: "$1,250.00",
                Commission: "$125.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                ReadyToFinalize: false,
                ReadyToSend: true,
                Note: "This is another note that was added for the SafeCo Commission statement."
            }
        ]
    };

    var commissionsTemplateScript = $("#commissions-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#commissions').append(commissionsData);
});