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

function editPayout(rule) {
    $(rule).parents('tr').find('.payout-split-value').removeAttr('disabled');
    $(rule).parents('tr').find('.payout-split-value-type').removeAttr('disabled');
    $(rule).parents('.js-btn-group-edit').addClass('hide-content');
    $(rule).parents('td').find('.js-btn-group-save').removeClass('hide-content');
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

    $(rule).parents('tr').find('input').attr('disabled', 'disabled');
    $(rule).parents('tr').find('select').attr('disabled', 'disabled');
    $(rule).parents('.js-btn-group-save').addClass('hide-content');
    $(rule).parents('td').find('.js-btn-group-edit').removeClass('hide-content');
    $('.js-alert-overriding-commission-rule').removeClass('hide-content');
}

function cancelPayout(rule) {
    $(rule).parents('tr').find('input').attr('disabled', 'disabled');
    $(rule).parents('tr').find('select').attr('disabled', 'disabled');
    $(rule).parents('.js-btn-group-save').addClass('hide-content');
    $(rule).parents('td').find('.js-btn-group-edit').removeClass('hide-content');
}

