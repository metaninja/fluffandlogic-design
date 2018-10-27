// $('.policy-member-agency').select2();
// $('.policy-lob').select2();
// $('.policy-transaction-type').select2();
// $('.policy-carrier').select2();


$('#line-item-modal').on('show.bs.modal', function() {
    resetLineItem();
    resetEditor();
});

var lineItemNumber = -1;

function resetSearchExistingPolicy() {
    $('.js-policy-found').addClass('hide-content');
    $('.js-policy-not-found').addClass('hide-content');
    $('.js-policy-searching').addClass('hide-content');
    $('.js-policy-searching-progress-bar').addClass('hide-content');
    $('.js-btn-add-new-policy').addClass('hide-content');
}

function resetLineItem() {
    $('.js-enter-line-item input[type="text"]').val('');
}

function resetEditor() {
    $('#checkbox-add-new-policy').prop("checked", false);


    resetSearchExistingPolicy();
    resetLineItem();

    $('.js-modal-body-edit-line-item').show();
    $('.js-modal-body-add-policy').hide();

    $('.js-btn-save-add-another').removeClass('hide-content');
    $('.js-btn-save-line-item').removeClass('hide-content');
    $('.js-btn-save-existing-line-item').addClass('hide-content');

    $('.js-search-policy-number .type-ahead-input').val('');
    $('.js-transaction-number .type-ahead-input').val('');
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
    $('#line-item-modal').modal('hide');
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
            $('.js-btn-add-new-policy').addClass('hide-content');
        }
        else {
            $('.js-policy-found').addClass('hide-content');
            $('.js-policy-not-found').removeClass('hide-content');
            $('.js-btn-add-new-policy').removeClass('hide-content');
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
    resetEditor();
}

function toggleAddPolicy(checkbox) {
    if ($(checkbox).is(':checked')) {
        $('.js-modal-body-edit-line-item').slideUp();
        $('.js-modal-body-add-policy').slideDown();
    } else {
        $('.js-modal-body-edit-line-item').slideDown();
        $('.js-modal-body-add-policy').slideUp();
    }
}

function saveAndAddAnother() {
    saveLineItem(false);
    resetEditor();
    resetLineItem();
    $('.js-modal-body-edit-line-item').slideDown();
    $('.js-modal-body-add-policy').slideUp();
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

function changeSplitValueType(split) {
    var selected = $(split).find('option:selected').val();
    if (selected === '%') {
        $(split).parents('td').find('.payout-split-dollars').removeClass('hide-content');
    }
    else {
        $(split).parents('td').find('.payout-split-dollars').addClass('hide-content');
    }

}