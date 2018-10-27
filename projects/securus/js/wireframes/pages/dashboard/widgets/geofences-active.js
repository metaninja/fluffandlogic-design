(function () {
    function initializePopover() {
        var geofenceActivatorButton = $('#geofenceActivatorButton');
        var geofenceTemplate = $('#geofenceTemplate');
        var htmlPopoverTemplate = geofenceTemplate.html();

        geofenceActivatorButton.popover({
            title: function () {
                var geofenceTitleTemplate = $('#geofenceTitleTemplate');
                var htmlContent = geofenceTitleTemplate.html();
                return htmlContent;
            },
            container: '#popoverContainer',
            placement: 'right',
            trigger: 'click',
            html: true,
            template: htmlPopoverTemplate,
            content: function () {
                var geofenceContentTemplate = $('#geofenceContentTemplate');
                var htmlContent = geofenceContentTemplate.html();

                return htmlContent;
            }
        });
    }

    function wireEvents() {
        $(document).on('click', '.js-popover-close', onPopoverCloseButtonClicked);
        $(document).on('click', '#geofencesLargeImage', onGeofencesLargeImageClicked)
    }

    function onGeofencesLargeImageClicked() {
        var image = $(this);

        image.attr('src', '../images/google-maps-pacman.png');
    }

    function onPopoverCloseButtonClicked() {
        $('#geofenceActivatorButton').popover('hide');
    }

    function init() {
        initializePopover();
        wireEvents();
    }

    init();
}());

//# sourceURL=js/wireframes/pages/dashboard/widgets/geofences-active.js