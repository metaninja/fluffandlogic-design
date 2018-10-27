$(document).ready(function() {
    $('.js-row-edit-code').hide();
    $('.js-btn-add-code').click(function() {
        $('.js-row-add-code').hide();
        $('.js-row-edit-code').show();
    });

    $('.js-btn-save-code').click(function() {
        $('.js-row-add-code').show();
        $('.js-row-edit-code').hide();
    });

    $('.js-btn-cancel-code').click(function() {
        $('.js-row-add-code').show();
        $('.js-row-edit-code').hide();
    });

    var codes = {
        codes: [
            {
                AgencyName: "Bob Parr Insurance Inc",
                Carrier: "State Farm",
                AgencyCode: "10100",
                ProducerCode: "2400"
            },
            {
                AgencyName: "Bob Parr Insurance Inc",
                Carrier: "State Farm",
                AgencyCode: "10100",
                ProducerCode: "2454"
            },
            {
                AgencyName: "Bob Parr Insurance Inc",
                Carrier: "State Farm",
                AgencyCode: "10100",
                ProducerCode: "2967"
            },
            {
                AgencyName: "Mark Winters Agency",
                Carrier: "State Farm",
                AgencyCode: "12312",
                ProducerCode: "1544"
            },
            {
                AgencyName: "Mark Winters Agency",
                Carrier: "State Farm",
                AgencyCode: "12312",
                ProducerCode: "1590"
            },
            {
                AgencyName: "Mark Winters Agency",
                Carrier: "State Farm",
                AgencyCode: "12312",
                ProducerCode: "1678"
            },
        ]
    };

    var codesTemplateScript = $("#codes-template").html();
    var codesTemplate = Handlebars.compile(codesTemplateScript);
    var codesData = codesTemplate(codes);
    $('#codes').append(codesData);

    $(".nav-parent").eq(3).find(".nav-parent-header").addClass("active");
});