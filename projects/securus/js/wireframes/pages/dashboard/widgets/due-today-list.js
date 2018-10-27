(function () {
    var demoButton = $('#dueTodayDemoButton');
    var detailSections = $('.js-detail-section');

    function onDemoButtonClicked(event) {
        event.preventDefault();

        if ($(this).hasClass('js-expanded')) {
            hideListDetails();
        } else {
            showListDetails();
        }
    }

    function showListDetails() {
        // Expand the collapsed sections
        detailSections.show();

        demoButton.text('Hide details');
        demoButton.addClass('js-expanded');
        demoButton.removeClass('js-collapsed');
    }

    function hideListDetails() {
        // Collapse the expanded sections
        detailSections.hide();

        demoButton.text('Show details');
        demoButton.removeClass('js-expanded');
        demoButton.addClass('js-collapsed');
    }

    function init() {
        demoButton.on('click', onDemoButtonClicked);

        hideListDetails();
    }

    init();
}());

//# sourceURL=js/wireframes/pages/dashboard/widgets/due-today-list.js