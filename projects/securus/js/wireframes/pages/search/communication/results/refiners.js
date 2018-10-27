var refiners = {};
$('.js-selected-filters').hide();


refiners.showAll = "Expand All";
refiners.hideAll = "Hide All";

$('.panel-title .js-toggle-filters').text(refiners.showAll);

$('.js-toggle-filters').click(function() {

    if ($(this).text() === refiners.showAll) {
        $(this).text(refiners.hideAll);
        $('.panel-filters .collapse').collapse('show');
    } else {
        if ($(this).text() === refiners.hideAll) {
            $(this).text(refiners.showAll);
            $('.panel-filters .collapse').collapse('hide');
        }
    }
});


$('.js-no-filters').hide();


$('.js-no-results').click(function() {
    $('.js-no-filters').show();
    $('.js-yes-filters').hide();
});


$('.js-no-filters').click(function() {
    $('.js-no-filters').hide();
    $('.js-yes-filters').show();
});


$('.js-yes-filters input[type="checkbox"]').click(function() {
    $('.js-selected-filters').slideDown();
});


$('.js-btn-clear-filters').click(function() {
    $('.js-selected-filters').slideUp();
    location.reload();
});


//$('.js-btn-apply-filters').click(function() {
//    location.reload();
//});

$('.filter-selected input[type="checkbox"]').click(function() {
    $(this).parent('.filter-selected').hide();
});

//# sourceURL=js/wireframes/pages/search/communication/results/refiners.js