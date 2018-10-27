function showDataChanges() {
    $('.results-with-details').show();
    $('.results-no-details').hide();

    $('.results-data-changes').show();
    $('.system-changes-add-detail').show();

    $('.results-communication').hide();
    $('.communication-detail').hide();

    //Results
    $('.results').hide();
    $('.results-data-changes').show();

    //Show/Hide sidebar
    $('.panel-no-call-selected').show();
    $('.panel-call-details').hide();
}

function showCommunication() {
    $('.results-with-details').show();
    $('.results-no-details').hide();

    //Results
    $('.results').hide();
    $('.results-communication').show();
    $('.results-system-access').hide();
    $('.results-searches').hide();

    //Sidebar
    $('.panel-no-call-selected').show();
    $('.panel-call-details').hide();
}

function showSystemAccess() {
    $('.results-with-details').hide();
    $('.results-no-details').show();

    //Results
    $('.results').hide();
    $('.results-system-access').show();
}

function showWebpageVisitations() {
    $('.results-with-details').show();
    $('.results-no-details').hide();

    //Results
    $('.results').hide();
    $('.results-webpage-visitations').show();

    //Show/Hide sidebar
    $('.panel-no-call-selected').show();
    $('.panel-call-details').hide();
}

function showSearches() {
    $('.results-with-details').show();
    $('.results-no-details').hide();

    //Results
    $('.results').hide();
    $('.results-searches').show();

    //Sidebar
    $('.panel-no-call-selected').show();
    $('.panel-call-details').hide();
}



$('.log-selector').change(function() {
    switch($(this).val().toLowerCase()) {
        case "data changes":
            showDataChanges();
            break;

        case "communication":
            showCommunication();
            break;

        case "system access":
            showSystemAccess();
            break;

        case "webpage visitations":
            showWebpageVisitations();
            break;

        case "searches":
            showSearches();
            break;

        default:
            showDataChanges();
            break;
    }
});


function showDataChangeDetails() {
    $('.panel-call-details').show();
    $('.panel-no-call-selected').hide();
    $('.result-details-data-changes').show();

    $('.communication-detail').hide();
    $('.system-changes-add-detail').hide();
    $('.system-changes-delete-detail').hide();
    $('.system-changes-edit-detail').show();
    $('.result-details-searches').hide();
    $('.result-details-webpage-visitations').hide();
}


$('.add-detail').click(function() {
    showDataChangeDetails();

    $('.communication-detail').hide();
    $('.system-changes-delete-detail').hide();
    $('.system-changes-edit-detail').hide();
    $('.system-changes-add-detail').show();
});

$('.delete-detail').click(function() {
    showDataChangeDetails();

    $('.communication-detail').hide();
    $('.system-changes-add-detail').hide();
    $('.system-changes-edit-detail').hide();
    $('.system-changes-delete-detail').show();
});

$('.edit-detail').click(function() {
    showDataChangeDetails();

    $('.communication-detail').hide();
    $('.system-changes-add-detail').hide();
    $('.system-changes-delete-detail').hide();
    $('.system-changes-edit-detail').show();
});


$('.table-communication-log').click(function() {
    $('.panel-call-details').show();
    $('.panel-no-call-selected').hide();
    $('.result-details-data-changes').hide();

    $('.communication-detail').show();
    $('.system-changes-add-detail').hide();
    $('.system-changes-delete-detail').hide();
    $('.system-changes-edit-detail').hide();
    $('.result-details-searches').hide();
    $('.result-details-webpage-visitations').hide();
});

$('.table-searches').click(function() {
    $('.panel-call-details').show();
    $('.panel-no-call-selected').hide();

    $('.searches-detail').show();
    $('.communication-detail').hide();
    $('.system-changes-add-detail').hide();
    $('.system-changes-delete-detail').hide();
    $('.system-changes-edit-detail').hide();
    $('.result-details-searches').show();
    $('.result-details-webpage-visitations').hide();
});

$('.table-webpage-visitations').click(function() {
    $('.panel-call-details').show();
    $('.panel-no-call-selected').hide();

    $('.webpage-visitations').hide();
    $('.searches-detail').hide();
    $('.communication-detail').hide();
    $('.system-changes-add-detail').hide();
    $('.system-changes-delete-detail').hide();
    $('.system-changes-edit-detail').hide();
    $('.result-details-searches').hide();
    $('.result-details-webpage-visitations').show();
});


$(document).ready(function() {
    showCommunication();
});


//# sourceURL=js/wireframes/pages/search/system-logs/index.js