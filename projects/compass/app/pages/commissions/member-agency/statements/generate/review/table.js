$(document).ready(function() {
    var commissions = {
        commissions: [
            {
                MemberAgency: "Alex Huan Agency",
                StatementNumber: "1007",
                Premium: "20,000.00",
                TotalCommissionFromCarrier: "2,000.00",
                MyAgencyCommission: "1,500.00",
                AgencyFee: "50.00",
                PolicyFee: "50.00",
                InspectionFee: "75.00",
                MemberAgencyCommission: "500.00",
                Status: ""
            },
            {
                MemberAgency: "Cactus Independent Insurance",
                StatementNumber: "1007",
                Premium: "20,000.00",
                TotalCommissionFromCarrier: "2,000.00",
                MyAgencyCommission: "1,500.00",
                AgencyFee: "50.00",
                PolicyFee: "50.00",
                InspectionFee: "75.00",
                MemberAgencyCommission: "500.00",
                Status: ""
            },
            {
                MemberAgency: "Penguin Insurance Services",
                StatementNumber: "1007",
                Premium: "20,000.00",
                TotalCommissionFromCarrier: "2,000.00",
                MyAgencyCommission: "1,500.00",
                AgencyFee: "50.00",
                PolicyFee: "50.00",
                InspectionFee: "75.00",
                MemberAgencyCommission: "500.00",
                Status: "Sent 1/22/2018 3:54pm"
            }
        ]
    };

    var commissionsTemplateScript = $("#commissions-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#commissions').append(commissionsData);
});