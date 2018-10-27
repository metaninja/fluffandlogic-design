$(document).ready(function() {
    var commissions = {
        commissions: [
            {
                Carrier: "ACE",
                Policy: "BOP340958",
                LOB: "BOP",
                EffectiveDate: "3/31/2017",
                ExpirationDate: "3/31/2018",
                TransType: "NBS",
                StatementNumber: "1497",
                StatementDate: "4/7/2017",
                Premium: "$2,000.00",
                ExpectedCommission: "$200.00",
                DownloadDate: "4/7/2017",
            },
            {
                Carrier: "Geico",
                Policy: "GL-09234A",
                LOB: "General Liability",
                StatementNumber: "2345",
                EffectiveDate: "3/31/2017",
                ExpirationDate: "3/31/2018",
                TransType: "RNW",
                StatementDate: "4/7/2017",
                Premium: "$950.00",
                ExpectedCommission: "$95.00",
            },
            {
                Carrier: "Progressive",
                Policy: "AUTO-923084AH",
                LOB: "Auto (Personal)",
                StatementNumber: "2345",
                EffectiveDate: "3/31/2017",
                ExpirationDate: "3/31/2018",
                StatementDate: "4/7/2017",
                TransType: "NBS",
                Premium: "$5000.00",
                ExpectedCommission: "$500.00",
            },
            {
                Carrier: "Safeco",
                Policy: "AU-920923AH",
                LOB: "Auto (Personal)",
                StatementNumber: "1497",
                EffectiveDate: "3/31/2017",
                ExpirationDate: "3/31/2018",
                TransType: "NBS",
                StatementDate: "4/7/2017",
                Premium: "$1500.00",
                ExpectedCommission: "$150.00",
            },
            {
                Carrier: "StateFarm",
                Policy: "DW23094890",
                LOB: "Home",
                StatementNumber: "1497",
                EffectiveDate: "3/31/2017",
                ExpirationDate: "3/31/2018",
                TransType: "NBS",
                StatementDate: "4/7/2017",
                Premium: "$4300.00",
                ExpectedCommission: "$430.00",
            }
        ]
    };

    var commissionsTemplateScript = $("#commissions-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#commissions').append(commissionsData);
});