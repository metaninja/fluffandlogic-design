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
                Policy: "123456",
                LOB: "PROP",
                TransType: "NBS",
                TransDate: "7/5/2017",
                Premium: "500.00",
                Commission: "40.00",
                MatchStatus: "Unmatched",
                Approved: true
            },
            {
                Insured: "Mark Andrew",
                MemberAgency: "",
                Policy: "345256",
                LOB: "AUTO",
                TransType: "NBS",
                TransDate: "7/4/2017",
                Premium: "1200.00",
                Commission: "120.00",
                MatchStatus: "Unmatched",
                Approved: false
            },
            {
                Insured: "John Smith",
                MemberAgency: "Penguin Insurance Services",
                Policy: "234653",
                LOB: "AVIA",
                TransType: "NBS",
                TransDate: "7/4/2017",
                Premium: "1000.00",
                Commission: "100.00",
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