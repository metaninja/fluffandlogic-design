$('.policy-member-agency').select2();
$('.policy-lob').select2();
$('.policy-transaction-type').select2();
$('.policy-carrier').select2();


$('#line-item-modal').on('show.bs.modal', function() {
    resetLineItem();
    resetEditor();
});

var lineItemNumber = -1;

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

function resetSearchExistingPolicy() {
    $('.js-policy-found').addClass('hide-content');
    $('.js-policy-not-found').addClass('hide-content');
    $('.js-policy-searching').addClass('hide-content');
    $('.js-policy-searching-progress-bar').addClass('hide-content');
    $('.js-btn-create-new-policy').addClass('hide-content');
}

function resetLineItem() {
    $('.js-enter-line-item input[type="text"]').val('');
}

function resetEditor() {
    $('#line-item-title').html('Add/Edit Line Item');
    $('#checkbox-create-new-policy').removeAttr('checked');

    resetSearchExistingPolicy();
    resetLineItem();

    $('.js-btn-save-add-another').removeClass('hide-content');
    $('.js-btn-save-line-item').removeClass('hide-content');
    $('.js-btn-save-existing-line-item').addClass('hide-content');
    $('.js-btn-save-and-add-policy').addClass('hide-content');
    $('.js-btn-save-policy').addClass('hide-content');

    $('.js-search-policy-number .type-ahead-input').val('');
    $('.js-transaction-number .type-ahead-input').val('');
    $('.js-btn-save-add-another').show();
    $('.js-search-for-policy').addClass('hide-content');
    $('.js-enter-line-item').removeClass('hide-content');
    $('.js-enter-line-item .form-group:first-child input').focus();
}

function showTab(activeTab, tabContent) {
    $('.js-tab').hide();
    $(activeTab).parents('.tabs').find('.tab-link').removeClass('active');
    $(activeTab).addClass('active');
    $(tabContent).show();
}

function hideEditor() {
    resetEditor();
    $('.js-editor').addClass('hide-content');
    $('.js-callouts').removeClass('hide-content');
    $('.js-table-heading').removeClass('hide-content');
    $('.js-filter').removeClass('hide-content');

    $('.editor').removeClass('show');
}

function showEditor() {
    resetEditor();

    // $('#match-line-item-modal').modal('hide');
    $('#line-item-modal').modal('show');

    $('.js-enter-line-item .editor-row-item:first-child input').focus();
}

function EnterKeyPressed(event) {
    if (event.keyCode === 13) {
        saveAndAddAnother();
    }
}

function EscKeyPressed(event) {
    if (event.keyCode === 27) {
        hideEditor();
    }
}

function EnableSaveAndAddPolicy(checkbox) {
    if ($(checkbox).is(':checked')) {
        $('.js-btn-save-add-another').addClass('hide-content');
        $('.js-btn-save-line-item').addClass('hide-content');
        $('.js-btn-save-existing-line-item').addClass('hide-content');
        $('.js-btn-save-and-add-policy').removeClass('hide-content');
    } else {
        $('.js-btn-save-add-another').removeClass('hide-content');
        $('.js-btn-save-line-item').removeClass('hide-content');
        $('.js-btn-save-existing-line-item').addClass('hide-content');
        $('.js-btn-save-and-add-policy').addClass('hide-content');
    }
}

function searchExistingPolicy(input) {
    $('.js-policy-found').addClass('hide-content');
    $('.js-policy-not-found').addClass('hide-content');
    $('.js-policy-searching').removeClass('hide-content');
    $('.js-policy-searching-progress-bar').removeClass('hide-content');

    setTimeout(function() {
        $('.js-policy-searching-progress-bar').addClass('hide-content');
        $('.js-policy-searching').addClass('hide-content');

        if ($(input).val().toLowerCase() === 'pl1234') {
            $('.js-policy-found').removeClass('hide-content');
            $('.js-policy-not-found').addClass('hide-content');
            $('.js-btn-create-new-policy').addClass('hide-content');
            $('.js-btn-save-add-another').removeClass('hide-content');
        }
        else {
            $('.js-policy-found').addClass('hide-content');
            $('.js-policy-not-found').removeClass('hide-content');
            $('.js-btn-create-new-policy').removeClass('hide-content');
            $('.js-btn-save-add-another').addClass('hide-content');
        }
    }, Math.random() * 1000 + 1000);

}

function editLineItem(row) {
    var selectedRow = records.records[row];
    lineItemNumber = row;
    showEditor();

    $('.js-btn-save-existing-line-item').show();
    $('.js-btn-save-line-item').hide();
    $('.js-btn-save-add-another').hide();
    $('.js-search-for-policy').addClass('hide-content');
    $('.js-enter-line-item').removeClass('hide-content');
    $('.js-policy-empty-insured').val(selectedRow.Insured);
    $('.js-policy-empty-member-agency input').val(selectedRow.MemberAgency);
    $('.js-policy-empty-policy-number').val(selectedRow.Policy);
    $('.js-policy-empty-lob input').val(selectedRow.LOB);
    $('.js-policy-empty-transaction-type').val(selectedRow.TransType);
    $('.js-policy-empty-transaction-date').val(selectedRow.TransDate);
    $('.js-policy-empty-premium').val(selectedRow.Premium);
    $('.js-policy-empty-expected-commission').val(selectedRow.ExpectedCommission);
    $('.js-policy-empty-actual-commission').val(selectedRow.ActualCommission);
    $('.js-policy-empty-policy-fee').val(selectedRow.PolicyFee);
    $('.js-policy-empty-inspection-fee').val(selectedRow.InspectionFee);
    $('.js-policy-empty-agency-fee').val(selectedRow.AgencyFee);
}

function saveLineItem(existingItem) {

    if ($('#checkbox-create-new-policy').is(':checked')) {
        $('#line-item-title').html('Add New Policy');
        $('.js-modal-body-add-policy').slideDown();
        $('.js-modal-body-edit-line-item').slideUp();
        $('.js-btn-save-line-item').addClass('hide-content');
        $('.js-btn-save-existing-line-item').addClass('hide-content');
        $('.js-btn-create-new-policy').addClass('hide-content');
        $('.js-btn-save-policy').removeClass('hide-content');

    } else {
        var variance = $('.js-policy-empty-actual-commission').val() - $('.js-policy-empty-expected-commission').val();
        var lineItem = {};

        lineItem.Insured = $('.js-policy-empty-insured').val();
        lineItem.MemberAgency = $('.js-policy-empty-member-agency input').val();
        lineItem.Policy = $('.js-policy-empty-policy-number').val();
        lineItem.LOB = $('.js-policy-empty-lob input').val();
        lineItem.TransType = $('.js-policy-empty-transaction-type').val();
        lineItem.TransDate = $('.js-policy-empty-transaction-date').val();
        lineItem.Premium = $('.js-policy-empty-premium').val();
        lineItem.ExpectedCommission = $('.js-policy-empty-expected-commission').val();
        lineItem.ActualCommission = $('.js-policy-empty-actual-commission').val();
        lineItem.Variance = variance;
        lineItem.PolicyFee = $('.js-policy-empty-policy-fee').val()  ;
        lineItem.InspectionFee = $('.js-policy-empty-inspection-fee').val()  ;
        lineItem.AgencyFee = $('.js-policy-empty-agency-fee').val()   ;

        if (!existingItem) {
            lineItem.Matched = false;
            lineItem.Approved = false;
            records.records.unshift(lineItem);
            renderLineItems();
            $('#records tr:first-child').addClass('highlight-row');
        }
        else {
            lineItem.Matched = records.records[lineItemNumber].Matched;
            lineItem.Approved = records.records[lineItemNumber].Approved;
            records.records.splice(lineItemNumber, 1, lineItem);
            renderLineItems();
            $($('#records').find('tr')[lineItemNumber]).addClass('highlight-row');
            lineItemRow = -1;
        }
        hideEditor();
        resetEditor();
    }
}

function addPolicy() {
    resetEditor();
    $('.js-btn-save-and-add-policy').addClass('hide-content');
    $('.js-modal-body-edit-line-item').slideDown();
    $('.js-modal-body-add-policy').slideUp();
}

function saveAndAddAnother() {
    saveLineItem(false);
    resetEditor();
    resetLineItem();
    $('.js-search-policy-number').find('input').focus();
}

function typeAheadSearch() {
    if (this.value === "") {
        $(this).parents('.type-ahead').find('.type-ahead-results').removeClass('show');
    } else {
        $(this).parents('.type-ahead').find('.type-ahead-results').addClass('show');
    }
}

function typeAheadSearchResult() {
    $(this).parents('.type-ahead').find('.type-ahead-results').removeClass('show');
    $('.js-transaction-number .type-ahead-results').addClass('show');
    $(this).parents('.type-ahead').find('.type-ahead-input').val($(this).text().trim());
}

function NewLineItem() {
    $(".search-result").hide();
    $(".search-results-transactions").hide();
    $('.js-policy-empty').show();

    $('.type-ahead-results').removeClass('show');
    $('.js-policy-number .type-ahead-input').val('');
    $('.js-transaction-number .type-ahead-input').val('');
    $('.js-add-commission-heading').hide();
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

function changeSplitValueType(split) {
    var selected = $(split).find('option:selected').val();
    if (selected === '%') {
        $(split).parents('td').find('.payout-split-dollars').removeClass('hide-content');
    }
    else {
        $(split).parents('td').find('.payout-split-dollars').addClass('hide-content');
    }

}