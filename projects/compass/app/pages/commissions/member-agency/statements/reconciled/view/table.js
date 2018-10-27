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
                TotalCommission: "2,950.00",
                ExpectedCommission: "1,500.00",
                ActualCommission: "1,450.00",
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
                Premium: "5,085.00",
                TotalCommission: "1,512.75",
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
                Premium: "5,757.40",
                TotalCommission: "1,724.72",
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

var payouts = {
    myagency: {
        Commission: 1200,
        PolicyFee: 70,
        InspectionFee: 100,
        AgencyFee: 50
    },
    member: {
        Commission: 300,
        PolicyFee: 50,
        InspectionFee: 100,
        AgencyFee: 50
    }
};

renderPayouts();

function renderPayouts() {
    $('.js-payout-commission .payout-split-value').val( function() {
        if ($('.js-payout-commission .payout-split-value-type option:checked').val() === '$') {
            $('.js-payout-commission').find('.payout-split-dollars').addClass('hide-content');
            return payouts.myagency.Commission;
        }
        else {
            $('.js-payout-commission').find('.payout-split-dollars').removeClass('hide-content');
            return payouts.myagency.Commission / (payouts.member.Commission +  payouts.myagency.Commission) * 100;
        }
    });

    $('.js-payout-policy-fee .payout-split-value').val( function() {
        if ($('.js-payout-policy-fee .payout-split-value-type option:checked').val() === '$') {
            $('.js-payout-policy-fee').find('.payout-split-dollars').addClass('hide-content');
            return payouts.myagency.PolicyFee;
        }
        else {
            $('.js-payout-policy-fee').find('.payout-split-dollars').removeClass('hide-content');
            return payouts.myagency.PolicyFee / (payouts.member.PolicyFee +  payouts.myagency.PolicyFee) * 100;
        }
    });

    $('.js-payout-inspection-fee .payout-split-value').val( function() {
        if ($('.js-payout-inspection-fee .payout-split-value-type option:checked').val() === '$') {
            $('.js-payout-inspection-fee').find('.payout-split-dollars').addClass('hide-content');
            return payouts.myagency.InspectionFee;
        }
        else {
            $('.js-payout-inspection-fee').find('.payout-split-dollars').removeClass('hide-content');
            return payouts.myagency.InspectionFee / (payouts.member.InspectionFee +  payouts.myagency.InspectionFee) * 100;
        }
    });

    $('.js-payout-agency-fee .payout-split-value').val( function() {
        if ($('.js-payout-agency-fee .payout-split-value-type option:checked').val() === '$') {
            $('.js-payout-agency-fee').find('.payout-split-dollars').addClass('hide-content');
            return payouts.myagency.AgencyFee;
        }
        else {
            $('.js-payout-agency-fee').find('.payout-split-dollars').removeClass('hide-content');
            return payouts.myagency.AgencyFee / (payouts.member.AgencyFee +  payouts.myagency.AgencyFee) * 100;
        }
    });
}

var selectedRow;

function editPayout(row) {
    selectedRow = $('.js-payees-list tbody').find('tr')[row];

    $(selectedRow).find('.payout-split-value').removeAttr('disabled');
    $(selectedRow).find('.payout-split-value-type').removeAttr('disabled');
    $(selectedRow).find('.js-btn-group-edit').addClass('hide-content');
    $(selectedRow).find('.js-btn-group-save').removeClass('hide-content');
}

function savePayout(rule) {

    $('.js-payout-agency-fee .payout-split-value').val( function() {
        if ($('.js-payout-agency-fee .payout-split-value-type option:checked').val() === '$') {
            $('.js-payout-agency-fee').find('.payout-split-dollars').addClass('hide-content');
            return payouts.myagency.AgencyFee;
        }
        else {
            $('.js-payout-agency-fee').find('.payout-split-dollars').removeClass('hide-content');
            return payouts.myagency.AgencyFee / (payouts.member.AgencyFee +  payouts.myagency.AgencyFee) * 100;
        }
    });

    $(selectedRow).find('input').attr('disabled', 'disabled');
    $(selectedRow).find('select').attr('disabled', 'disabled');
    $(selectedRow).find('.js-btn-group-save').addClass('hide-content');
    $(selectedRow).find('.js-btn-group-edit').removeClass('hide-content');
    $('.js-alert-overriding-commission-rule').removeClass('hide-content');
}

function cancelPayout(rule) {
    $(selectedRow).find('input').attr('disabled', 'disabled');
    $(selectedRow).find('select').attr('disabled', 'disabled');
    $(selectedRow).find('.js-btn-group-save').addClass('hide-content');
    $(selectedRow).find('.js-btn-group-edit').removeClass('hide-content');
}

function changeSplitValueType(split) {
    var selected = $(split).find('option:selected').val();
    if (selected === '%') {
        $(split).parents('td').find('.payout-split-dollars').removeClass('hide-content');
    }
    else {
        $(split).parents('td').find('.payout-split-dollars').addClass('hide-content');
    }
}

function toggleTableRow() {
    $(this).parents('tr').find('.col-expand i').toggleClass("linearicon-chevron-down linearicon-chevron-up");
    $(this).closest('tr').next().toggle();
}