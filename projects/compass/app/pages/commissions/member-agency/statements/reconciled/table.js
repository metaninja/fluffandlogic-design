var commissions = {
    commissions: [
        {
            checked: false,
            Carrier: "Safeco",
            StatementNumber: "1497",
            StatementDate: "4/7/2017",
            StatementType: "Manual",
            Premium: "$1,250.00",
            Commission: "$125.00",
            PolicyFee: "$100.00",
            InspectionFee: "$350.00",
            AgencyFee: "$100.00",
            Status: "Ready To Send",
            UnmatchedLineItems: "3",
            DownloadDate: "4/7/2017",
            DeliveryStatus: "Ready to Generate",
            ReadyToFinalize: true,
            ReadyToSend: true,
            Exceptions: false,
            Note: "This is a note added to this statement."
        },
        {
            checked: false,
            Carrier: "ACE",
            StatementNumber: "2345",
            StatementDate: "4/7/2017",
            StatementType: "Import",
            Premium: "$1,250.00",
            Commission: "$125.00",
            PolicyFee: "$100.00",
            InspectionFee: "$350.00",
            AgencyFee: "$100.00",
            UnmatchedLineItems: "",
            DownloadDate: "4/7/2017",
            ReadyToFinalize: false,
            ReadyToSend: true,
            Status: "Sent 12/31/2017 3:22pm",
        },
        {
            checked: false,
            Carrier: "ACE",
            StatementNumber: "2345",
            StatementDate: "4/7/2017",
            StatementType: "Download",
            Premium: "$1,250.00",
            Commission: "$125.00",
            PolicyFee: "$100.00",
            InspectionFee: "$350.00",
            AgencyFee: "$100.00",
            UnmatchedLineItems: "5",
            DownloadDate: "4/7/2017",
            Status: "Calculate Splits",
            ReadyToSend: false,
            Exceptions: false,
        },
        {
            checked: false,
            Carrier: "Safeco",
            StatementNumber: "1497",
            StatementDate: "4/7/2017",
            StatementType: "Manual",
            Premium: "$1,250.00",
            Commission: "$125.00",
            PolicyFee: "$100.00",
            InspectionFee: "$350.00",
            AgencyFee: "$100.00",
            UnmatchedLineItems: "23",
            DownloadDate: "4/7/2017",
            Status: "Ready to Send",
            ReadyToSend: true,
            Exceptions: false,
        },
        {
            checked: false,
            Carrier: "Safeco",
            StatementNumber: "1497",
            StatementDate: "4/7/2017",
            StatementType: "Import",
            Premium: "$1,250.00",
            Commission: "$125.00",
            PolicyFee: "$100.00",
            InspectionFee: "$350.00",
            AgencyFee: "$100.00",
            DownloadDate: "4/7/2017",
            Status: "Ready to Send",
            ReadyToSend: true,
            Exceptions: true,
            Note: "This is another note that was added for the SafeCo Commission statement."
        }
    ]
};

renderTable();

function renderTable() {
    var commissionsTemplateScript = $("#commissions-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#commissions').html(commissionsData);
}

function rowChecked(checkbox, row) {

    if (row === 999) {
        for (var i=0; i<commissions.commissions.length; i++) {
            commissions.commissions[i].checked = $(checkbox).is(':checked');
        }
    }
    else {
        commissions.commissions[row].checked = $(checkbox).is(':checked');
    }
    renderTable();


    if ($(checkbox).is(':checked')) {
        $('.js-btn-generate-statements').removeAttr('disabled');
    } else {
        $('.js-btn-generate-statements').attr('disabled', 'disabled');
    }
}