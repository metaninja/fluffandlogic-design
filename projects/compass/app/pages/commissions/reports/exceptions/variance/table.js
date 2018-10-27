var variance = {
    variance: [
        {
            Carrier: "ACE",
            Policy: "BOP340958",
            LOB: "BOP",
            EffectiveDate: "3/31/2017",
            TransType: "NBS",
            StatementNumber: "1497",
            StatementDate: "4/7/2017",
            Premium: "$2,000.00",
            ExpectedCommission: "$200.00",
            ActualCommission: "$125.00",
            Variance: "-$75.00",
            UnmatchedLineItems: "3",
            DownloadDate: "4/7/2017",
            DeliveryStatus: "Ready to Generate",
            ReadyToFinalize: true,
            ReadyToSend: true,
            Status: "Resolved",
            Note: "Carrier will send updated statement with corrected commissions."
        },
        {
            Carrier: "Geico",
            Policy: "GL-09234A",
            LOB: "General Liability",
            StatementNumber: "2345",
            EffectiveDate: "3/31/2017",
            TransType: "RNW",
            StatementDate: "4/7/2017",
            Premium: "$950.00",
            ExpectedCommission: "$95.00",
            ActualCommission: "$45.00",
            Variance: "-$50.00",
            UnmatchedLineItems: "5",
            DownloadDate: "4/7/2017",
            DeliveryStatus: "",
            ReadyToFinalize: false,
            ReadyToSend: false,
            Status: "Unresolved"
        },
        {
            Carrier: "Progressive",
            Policy: "AUTO-923084AH",
            LOB: "Auto (Personal)",
            StatementNumber: "2345",
            EffectiveDate: "3/31/2017",
            StatementDate: "4/7/2017",
            TransType: "NBS",
            Premium: "$5000.00",
            ExpectedCommission: "$500.00",
            ActualCommission: "$310.54",
            Variance: "-$189.46",
            Status: "Open",
            UnmatchedLineItems: "5",
            DownloadDate: "4/7/2017",
            DeliveryStatus: "",
            ReadyToFinalize: true,
            ReadyToSend: true,
            Sent: "12/13/2017 3:22pm",
            Status: "Unresolved"
        },
        {
            Carrier: "Safeco",
            Policy: "AU-920923AH",
            LOB: "Auto (Personal)",
            StatementNumber: "1497",
            EffectiveDate: "3/31/2017",
            TransType: "NBS",
            StatementDate: "4/7/2017",
            Premium: "$1500.00",
            ExpectedCommission: "$150.00",
            ActualCommission: "$145.00",
            Variance: "-$5.00",
            Status: "Open",
            UnmatchedLineItems: "2",
            DownloadDate: "4/7/2017",
            DeliveryStatus: "Ready to Generate",
            ReadyToFinalize: true,
            ReadyToSend: false,
            Status: "Not An Issue",
            Note: "Variance is too small to care."
        },
        {
            Carrier: "StateFarm",
            Policy: "DW23094890",
            LOB: "Home",
            StatementNumber: "1497",
            EffectiveDate: "3/31/2017",
            TransType: "NBS",
            StatementDate: "4/7/2017",
            Premium: "$4300.00",
            ExpectedCommission: "$430.00",
            ActualCommission: "$397.00",
            Variance: "-$33.00",
            Status: "Open",
            UnmatchedLineItems: "3",
            DownloadDate: "4/7/2017",
            DeliveryStatus: "ReadyToFinalize",
            ReadyToFinalize: false,
            ReadyToSend: true,
            Status: "Unresolved",
        }
    ]
};

function renderVarianceTable() {
    var varianceTemplateScript = $("#variance-template").html();
    var varianceTemplate = Handlebars.compile(varianceTemplateScript);
    var varianceData = varianceTemplate(variance);
    $('#variance').html(varianceData);
}

renderVarianceTable();

var selectedRow = 0;
function VarianceAction(row, status) {
    selectedRow = row;
    variance.variance[row].Status = status;
    renderVarianceTable();
    $('#variance-comment-modal').modal('show');
}