var reset = function() {
    $('.player').slideUp(330);
    $('.btn-pause').hide();
    $('.btn-play').show();
    $('.play-call-one').show();
    $('.playing-call-one').hide();
    $('.panel-filter-summary').hide();
    $('.btn-cancel-add-tag').hide();
};

var highlightRow = function(thisRow) {
    thisRow.parents('table').find('tr').removeClass('active');
    thisRow.parents('tr').addClass('active');
};

// ----------------------------------------
//           Show/Hide Tag Bar
//  Had to turn off animations temporarily
// ----------------------------------------
$('.bff-include').on('AddTagLoaded', function() {
    var reset = function() {
        $('.player').slideUp(330);
        $('.btn-pause').hide();
        $('.btn-play').show();
        $('.play-call-one').show();
        $('.playing-call-one').hide();
        $('.panel-filter-summary').hide();
        $('.btn-cancel-add-tag').hide();
    };

    var highlightRow = function(thisRow) {
        thisRow.parents('table').find('tr').removeClass('active');
        thisRow.parents('tr').addClass('active');
    };
});

// ----------------------------------------
//           Show/Hide Tag Bar
//  Had to turn off animations temporarily
// ----------------------------------------
$('.add-tag-group .btn-link').click(function() {
    $('.add-tag-group').hide();
    $('.result-options').show();
    //  Don't throw away animations yet!
    //  Let's see if we can make it work somehow.
    //        $('.add-tag-group').animate({
    //            width: 0
    //        }, 300);
});

$('.btn-tag').click(function() {
    $('.add-tag-group').css('display', 'inline-block');
    $('.btn-cancel-add-tag').show();
    $('.result-options').hide();

    $('.btn-cancel-add-tag').click(function() {
        $('.add-tag-group').hide();
        $(this).hide();
        $('.result-options').show();
    });
});

// ----------------------------------------
//                INITIALIZE
// ----------------------------------------
$(document).ready(function() {

    $('#reservation').daterangepicker();

    //Count up results
    reset();

    //Attach tooltip to icons
    $('[data-toggle="tooltip"]').tooltip();

    //Hide Video downloads by default
    $('.cdr-download-video').hide();

    //Hide call details until user selects a record
    $('.panel-call-details').hide();
    $('.panel-crime-tips').hide();

    //Highlight user-selected row (e.g. viewing Call Details)
    $('.table-cdr-results td').click(function() {
        highlightRow($(this));
    });

    // ----------------------------------------
    //        Security Tempate
    // ----------------------------------------
    $('.securityTemplateSelected').hide();

    $('.notes-share-with').bind('change', function() {
        $('.notes-share-with option:selected').each(function() {
            if ($(this).text().toLowerCase().indexOf('limited') > -1) {
                $('.useSecurityTemplateCheckbox').removeClass('disabled');
                $('.useSecurityTemplateCheckbox input[type="checkbox"]').removeAttr('disabled');
                $('.available-users').removeAttr('disabled');
                $('.selected-users').removeAttr('disabled');
                $('.notes-security-remove-users').removeAttr('disabled');
                $('.notes-security-add-users').removeAttr('disabled');
            }
        });
    });

    $('.useSecurityTemplateCheckbox input[type="checkbox"]').bind('click', function() {
        if ($(this).is(':checked')) {
            $('.securityTemplateSelected').show();
            $('.securityTemplateNotSelected').hide();
        } else {
            $('.securityTemplateSelected').hide();
            $('.securityTemplateNotSelected').show();
        }
    });

    // ----------------------------------------
    //          Switch to Notes Tab
    // ----------------------------------------
    $('.icon-has-note').click(function() {
        $('.call-details-tabs li').removeClass('active');
        $('.notes-tab').addClass('active');
        $(document).scrollTop(0);
        highlightRow($(this));
    });

    // ----------------------------------------
    //          Autocomplete Tags
    // ----------------------------------------
    $(function() {
        var availableTags = [
            "3-way calling",
            "out of state",
            "possible lead",
            "research further",
            "mob boss?"
        ];
        $('.add-tag').autocomplete({
            source: availableTags
        });
    });

    //hide email recipient
    $('#email-recipient-section').hide();

    $('#rounded-check-email').change(function() {
        $('#email-recipient-section').delay(400).slideToggle(400);
    });

    // ----------------------------------------
    //           Show Filters Summary
    // ----------------------------------------
    $('.filter-select input[type=checkbox]').click(function() {
        $('.panel-filter-summary').slideDown(300);
    });

    // ----------------------------------------
    //           Clear Filters
    // ----------------------------------------
    $('.btn-clear-filters').click(function() {
        $('.panel-filter-summary').slideUp(300);
        $('.filter-select input[type=checkbox]').removeAttr('checked');
        $('.table-cdr-results').find('tr').removeClass('active');
        $('.panel-call-details').slideUp(300);
        $('.panel-no-record-selected').show();
    });

    // ----------------------------------------
    //           Show Call/Video Details
    // ----------------------------------------
    $('.table-cdr-results td').click(function() {
        $('.panel-call-details').slideDown(300);
        $('.cdr-call-details').show();
        $('.vdr-video-details').hide();
        $('.panel-no-record-selected').hide();
        $('.panel-crime-tips').hide();
        $('.panel-voice-biometrics-failure').hide();
    });

    $('.video-row').click(function() {
        $('.panel-call-details').slideDown(300);
        $('.vdr-video-details').show();
        $('.cdr-call-details').hide();
        $('.panel-no-record-selected').hide();
        $('.panel-crime-tips').hide();
        $('.panel-voice-biometrics-failure').hide();
    });

    $('.crime-tips-row').click(function() {
        $('.panel-crime-tips').slideDown(300);
        $('.cdr-call-details').hide();
        $('.panel-no-record-selected').hide();
    });

    $('.voice-biometrics-failure-row').click(function() {
        $('.cdr-call-details').hide();
        $('.panel-voice-biometrics-failure').show();
    });

    $('.cdr-download-recordings').click(function() {
        var videoRecording;
        var audioRecording;

        $('.table-cdr-results .rows.video-row input[type="checkbox"]').each(function(index) {
            if ($(this).checked) {
                videoRecording = true;
            }
        });

        $('.table-cdr-results .rows:not(.video-row) input[type="checkbox"]').each(function(index) {
            if ($(this).checked) {
                audioRecording = true;
            }
        });
    });

    // ----------------------------------------
    //      Enable Download, Export links
    // ----------------------------------------
    $('.table-cdr-results input[type=checkbox]').click(function() {
        $('.panel-action button').removeClass('disabled');
        $('.panel-action a').removeClass('disabled');
    });

});

//# sourceURL=js/wireframes/pages/search/communication/results/index.js