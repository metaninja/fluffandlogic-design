$('.accordion-header').click(function() {
    $(this).parents('ul').find('li').removeClass('active');
    $(this).parents('li').addClass('active');

    $('.gallery').hide();

    if ($(this).hasClass('gallery-activity')) {
        $('.gallery.gallery-activity').show();
    }
    else if ($(this).hasClass('gallery-tasks')) {
        $('.gallery.gallery-tasks').show();
    }
    else if ($(this).hasClass('gallery-investigate')) {
        $('.gallery.gallery-investigate').show();
    }
    else if ($(this).hasClass('gallery-manage')) {
        $('.gallery.gallery-manage').show();
    }
});

//# sourceURL=js/wireframes/pages/dashboard/components/add-widget-modal.js