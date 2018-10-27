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
    $(this).parents('.type-ahead').find('.type-ahead-input').val($(this).text());
}

$('.js-policy-number').change(function() {
    $('.js-transaction-number').show();
});

function showPolicyInfo() {
    $('.js-transaction-number').hide();
    $('.js-policy-number .type-ahead-input').val('');
    $('.js-transaction-number .type-ahead-input').val('');

    $(this).closest('tr').addClass("row-active");
    $(".search-results-transactions").hide();
    $(".js-policy-info").show();
    $(".js-add-commission-btn-2").removeClass("btn-disabled")
        .addClass("btn-primary")
        .prop("disabled", false);
    $(".js-add-commission-heading").hide();
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

function addLineItem() {
    var lineItem = { };
    lineItem['js-policy-empty-policy-number'] = $('.js-policy-empty-policy-number').val();
    lineItem.lob = $('.js-policy-empty-lob').find(':selected').text();
    lineItem.TransType = $('.js-policy-empty-transaction-type').find(':selected').text();
    lineItem.TransDate = $('.js-policy-empty-transaction-date').val();
    lineItem.Premium = "";
    lineItem.expectedCommission = "";
    lineItem.actualCommission = "";
    lineItem.policyFee = "";
    lineItem.inspectionFee = "";
    lineItem.agencyFee = ""
}
