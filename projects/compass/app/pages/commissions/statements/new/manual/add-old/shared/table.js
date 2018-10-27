$(document).ready(function() {
    var records = {
        records: [
            {
                Insured: "John Smith",
                MemberAgency: "Penguin Insurance Services",
                Policy: "123456",
                LOB: "PROP",
                TransType: "NBS",
                TransDate: "7/5/2017",
                Premium: "10,000.00",
                ExpectedCommission: "1,500.00",
                ActualCommission: "1450.00",
                Variance: "-0.50",
                PolicyFee: "100.00",
                InspectionFee: "300.00",
                AgencyFee: "100.00",
                MatchStatus: "Matched",
                Approved: true
            },
            {
                Insured: "Mark Andrew",
                MemberAgency: "Alex Huan Agency",
                Policy: "345256",
                LOB: "AUTO",
                TransType: "NBS",
                TransDate: "7/4/2017",
                Premium: "5085.00",
                ExpectedCommission: "762.75",
                ActualCommission: "750.00",
                Variance: "-12.75",
                PolicyFee: "150.00",
                InspectionFee: "200.00",
                AgencyFee: "100.00",
                MatchStatus: "Matched",
                Approved: true
            },
            {
                Insured: "John Smith",
                MemberAgency: "Penguin Insurance Services",
                Policy: "234653",
                LOB: "AVIA",
                TransType: "NBS",
                TransDate: "7/4/2017",
                Premium: "5757.40",
                ExpectedCommission: "863.61",
                ActualCommission: "861.11",
                Variance: "-2.50",
                PolicyFee: "175.00",
                InspectionFee: "300.00",
                AgencyFee: "100.00",
                MatchStatus: "Matched",
                Approved: true
            }
        ]
    };

    var recordsTemplateScript = $("#records-template").html();
    var recordsTemplate = Handlebars.compile(recordsTemplateScript);
    var recordsData = recordsTemplate(records);
    $('#records').append(recordsData);
    $('[data-toggle="popover"]').popover();


    $('.js-rule-expanded').hide();
    $('.js-rule-collapsed').show();

    $('.js-btn-expand-rule').click(function() {
       $('.js-rule-collapsed').hide();
       $('.js-rule-expanded').show();
    });

    $('.js-btn-collapse-rule').click(function() {
        $('.js-rule-expanded').hide();
        $('.js-rule-collapsed').show();
    });

    $('.js-edit-payees').click(function() {
        $(this).parents('.js-payees-list').find('[disabled]').removeAttr('disabled');
        $('.js-edit-actions').hide();
        $('.js-update-actions').show();
    });

    $('.js-save-payees').click(function() {
        $(this).parents('.js-payees-list').find('input').attr('disabled','disabled');
        $(this).parents('.js-payees-list').find('select').attr('disabled','disabled');
        $('.js-edit-actions').show();
        $('.js-update-actions').hide();
        $('.js-alert-overriding-commission-rule').removeClass('hide-content');
    });

    $('.js-payee-amount').change(function() {
        if ($(this).val() === '%A') {
            $('.js-payee-amount-percent').show();
            $('.js-payee-amount-flat-fee').hide();
        }
        else if ($(this).val() === '%P') {
            $('.js-payee-amount-percent').show();
            $('.js-payee-amount-flat-fee').hide();
        }
        if ($(this).val() === '$') {
            $('.js-payee-amount-percent').hide();
            $('.js-payee-amount-flat-fee').show();
        }
    });

    $('.js-cancel-override').click(function() {
        $('.js-alert-overriding-commission-rule').addClass('hide-content');
    });

});