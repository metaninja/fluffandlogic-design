(function () {
    var _geofenceActivatorButtonSelector = '#sidebarGeofenceActivatorButton';

    function initializePopover() {
        var geofenceActivatorButton = $(_geofenceActivatorButtonSelector);
        var geofenceTemplate = $('#sidebarGeofenceTemplate');
        var htmlPopoverTemplate = geofenceTemplate.html();

        geofenceActivatorButton.popover({
            title: getPopoverTitle,
            placement: 'left',
            trigger: 'click',
            html: true,
            template: htmlPopoverTemplate,
            content: getPopoverContent
        });

        // HACK:  The first time the popover is displayed, its positioning is wrong;
        // until we can figure out why, do a quick show/hide to force positioning
        geofenceActivatorButton.popover('show');
        geofenceActivatorButton.popover('hide');
    }

    function getPopoverTitle() {
        var geofenceTitleTemplate = $('#sidebarGeofenceTitleTemplate');
        var htmlContent = geofenceTitleTemplate.html();

        return htmlContent;
    }

    function getPopoverContent() {
        var geofenceContentTemplate = $('#sidebarGeofenceContentTemplate');
        var htmlContent = geofenceContentTemplate.html();

        return htmlContent;
    }

    function wireEvents() {
        $(document).on('click', '.js-sidebar-popover-close', onPopoverCloseButtonClicked);
        $(document).on('click', '#sidebarGeofencesLargeImage', onGeofencesLargeImageClicked);
    }

    function onGeofencesLargeImageClicked() {
        var image = $(this);

        image.attr('src', '../images/google-maps-pacman.png');
    }

    function onPopoverCloseButtonClicked() {
        $(_geofenceActivatorButtonSelector).popover('hide');
    }

    function init() {
        initializePopover();
        wireEvents();
    }

    $(document).on('GeofenceSidebarLoaded', function () {
        init();
    });
}());

//# sourceURL=js/wireframes/pages/dashboard/sidebars/geofences-sidebar-active.js