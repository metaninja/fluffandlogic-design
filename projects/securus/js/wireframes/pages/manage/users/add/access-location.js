$('.specify-access').hide();

$('#anywhereAccessRadio').change(function() {
    $(".specify-access").hide();
});

$('#limitedAccessRadio').change(function() {
    $(".specify-access").show();
});

$('.add-row').hide();
$('.edit-row').hide();

$('.btn-add-location').click(function() {
    $('.add-row').show();
    $('.edit-row').hide();
});

var editRow = $('.edit-row').html();

$('.btn-edit').click(function() {


    //Remove any existing Edit Rows from the DOM
    //Don't want duplicates
    $('.edit-row').remove();

    //Hide the Add Row if it exists
    $('.add-row').hide();
    //Dynamically add Edit Row to the DOM
    $(this).parents('tr').addClass('.row-being-edited')
        .after('<tr class="edit-row">' + editRow + '</tr>');
    $('.row-being-edited').hide();
    $('.edit-row .js-ip-range').hide();

    // Add the hide Edit Row click action *after*
    // The row has been added to the DOM.
    $('.close-edit-row button').click(function() {
        $('.edit-row').hide();
        $('.row-being-edited').removeClass('.row-being-edited');
    });
});

$('.close-add-row button').click(function() {
    $('.add-row').hide();
});

$('.js-single-ip').show();
$('.js-ip-range').hide();

$('.js-select-ip-type').change(function() {
    if ($('.js-select-ip-type option:selected').text() === 'Single IP') {
        $('.js-single-ip').show();
        $('.js-ip-range').hide();
    }
    else {
        $('.js-single-ip').hide();
        $('.js-ip-range').show();
    }
});

//# sourceURL=js/wireframes/pages/manage/users/add/access-location.js