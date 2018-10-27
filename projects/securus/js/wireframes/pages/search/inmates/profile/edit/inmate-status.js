$('.suspended-until').change(function() {
    if ($(this).val() == 'Indefinitely') {
        $('.suspend-until-date').hide();
    }
    else {
        $('.suspend-until-date').show();
    }
});


$('#rounded-check-suspend').change(function() {
    $('#suspend-until-section').slideToggle(400);
});

$('#suspend-until-section').hide();

//# sourceURL=js/wireframes/pages/search/inmates/profile/edit/inmate-status.js