$('.modal-selected-type').hide();
$('.modal-location-type').hide();
$('.select-location-nav li').hide();

$('.facilities').click(function() {
    $('.modal-location-type').hide();
    $('.facilities-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.sites').click(function() {
    $('.modal-location-type').hide();
    $('.sites-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.terminal-groups').click(function() {
    $('.modal-location-type').hide();
    $('.terminal-group-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.terminals').click(function() {
    $('.modal-location-type').hide();
    $('.terminal-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.phone-numbers').click(function() {
    $('.modal-location-type').hide();
    $('.phone-numbers-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.visit-types').click(function() {
    $('.modal-location-type').hide();
    $('.visit-type-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.visitor-types').click(function() {
    $('.modal-location-type').hide();
    $('.visitor-types-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.visitors').click(function() {
    $('.modal-location-type').hide();
    $('.visitors-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.inmates').click(function() {
    $('.modal-location-type').hide();
    $('.inmates-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.geofences').click(function() {
    $('.modal-location-type').hide();
    $('.geofences-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.custom').click(function() {
    console.log('Custom selected.');
    $('.modal-location-type').hide();
    $('.custom-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.national').click(function() {
    console.log('National selected.');
    $('.modal-location-type').hide();
    $('.national-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.region').click(function() {
    console.log('Region selected.');
    $('.modal-location-type').hide();
    $('.region-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.state').click(function() {
    console.log('State selected.');
    $('.modal-location-type').hide();
    $('.state-selections').show();

    $('ul li').removeClass('active');
    $(this).addClass('active');
});


//# sourceURL=js/wireframes/include/modal-select-locations.js