$(document).ready(function() {
    var commissions = {
        commissions: [
            {
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                StatementType: "Manual",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Open",
                UnmatchedLineItems: "3",
                DownloadDate: "4/7/2017",
                DeliveryStatus: "Ready to Generate",
                ReadyToFinalize: true,
                ReadyToSend: true,
                Note: "This is a note added to this statement."
            },
            {
                Carrier: "ACE",
                StatementNumber: "2345",
                StatementDate: "4/7/2017",
                StatementType: "Import",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Ready To Finalize",
                UnmatchedLineItems: "",
                DownloadDate: "4/7/2017",
                DeliveryStatus: "",
                ReadyToFinalize: false,
                ReadyToSend: false
            },
            {
                Carrier: "ACE",
                StatementNumber: "2345",
                StatementDate: "4/7/2017",
                StatementType: "Import",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Closed",
                UnmatchedLineItems: "5",
                DownloadDate: "4/7/2017",
                DeliveryStatus: "",
                ReadyToFinalize: true,
                ReadyToSend: true,
                Sent: "12/13/2017 3:22pm"
            },
            {
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                StatementType: "Download",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Ready To Finalize",
                UnmatchedLineItems: "23",
                DownloadDate: "4/7/2017",
                DeliveryStatus: "Ready to Generate",
                ReadyToFinalize: true,
                ReadyToSend: false
            },
            {
                Carrier: "Safeco",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                StatementType: "Manual",
                Premium: "$1,250.00",
                Commission: "$125.00",
                PolicyFee: "$100.00",
                InspectionFee: "$350.00",
                AgencyFee: "$100.00",
                Status: "Open",
                DownloadDate: "4/7/2017",
                DeliveryStatus: "ReadyToFinalize",
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