$('document').ready(function() {
    $('.js-show-line-item-details').hide();
})


function toggleTableRow() {
    $(this).toggleClass("linearicon-chevron-down linearicon-chevron-up");
    $(this).closest('tr').next().toggle();
}

$(document).ready(function() {

    var records = {
        records: [
            {
                Insured: "John Smith",
                MemberAgency: "",
                Carrier: "StateFarm",
                Policy: "123456",
                LOB: "PROP",
                TransType: "NBS",
                TransDate: "7/5/2017",
                Premium: "10,000.00",
                Commission: "1000.00",
                MatchStatus: "Unmatched",
                Approved: true
            },
            {
                Insured: "Mark Andrew",
                MemberAgency: "",
                Carrier: "AllState",
                Policy: "345256",
                LOB: "AUTO",
                TransType: "NBS",
                TransDate: "7/4/2017",
                Premium: "16,000.00",
                Commission: "1,600.00",
                MatchStatus: "Unmatched",
                Approved: false
            },
            {
                Insured: "John Smith",
                MemberAgency: "Penguin Insurance Services",
                Carrier: "Liberty Mutual",
                Policy: "234653",
                LOB: "AVIA",
                TransType: "NBS",
                TransDate: "7/4/2017",
                Premium: "24,000.00",
                Commission: "2,400.00",
                MatchStatus: "Matched",
                Approved: true
            }
        ]
    };

    var recordsTemplateScript = $("#records-template").html();
    var recordsTemplate = Handlebars.compile(recordsTemplateScript);
    var recordsData = recordsTemplate(records);
    $('#records').append(recordsData);
    $('.js-show-line-item-details').hide();

});