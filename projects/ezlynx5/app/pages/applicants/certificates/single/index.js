$('.accordion-header').click(function() {
    if ($(this).parents('.accordion').hasClass('show')) {
        $(this).parents('.accordion').removeClass('show');
        $(this).parents('.accordion').find('.accordion-collapse').hide();
        $(this).parents('.accordion').find('.accordion-expand').show();


    } else {
        $('.accordion').each(function() {
            $(this).removeClass('show');
            $(this).find('.accordion-collapse').show();
            $(this).find('.accordion-expand').hide();
        });

        $(this).parents('.accordion').addClass('show');
    }

});

$()