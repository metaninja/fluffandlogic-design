(function () {
    $('#numberToggleDemoButton').on('click', onNumberToggleButtonClicked);
    $('#countToggleDemoButton').on('click', onCountToggleButtonClicked);

    function onCountToggleButtonClicked(event) {
        event.preventDefault();

        var button = $(this);
        var countSections = $('.js-count');

        if (button.hasClass('js-left')) {
            // Right-align the counts
            countSections.removeClass('text-left');
            countSections.addClass('text-right');

            button.removeClass('js-left');
            button.addClass('js-right');
            button.text('Align left');
        } else {
            // Left-align the counts
            countSections.removeClass('text-right');
            countSections.addClass('text-left');

            button.removeClass('js-right');
            button.addClass('js-left');
            button.text('Align right');
        }
    }

    function onNumberToggleButtonClicked(event) {
        event.preventDefault();

        var button = $(this);
        var numberSections = $('.js-number');

        if (button.hasClass('js-expanded')) {
            // Collapse the expanded numbering
            numberSections.hide();

            button.removeClass('js-expanded');
            button.addClass('js-collapsed');
            button.text('Show numbering');
        } else {
            // Expand the collapsed numbering
            numberSections.show();

            button.addClass('js-expanded');
            button.removeClass('js-collapsed');
            button.text('Hide numbering');
        }
    }
}());

//# sourceURL=js/wireframes/pages/dashboard/widgets/top-dialed-numbers-list.js