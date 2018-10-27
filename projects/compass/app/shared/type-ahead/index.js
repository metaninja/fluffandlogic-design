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
