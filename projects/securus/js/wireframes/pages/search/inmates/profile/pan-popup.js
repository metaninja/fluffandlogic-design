//----------------------------------------
//                PAN
//----------------------------------------
$('.pan-enable input').click(function() {
    if ($(this).is(':checked')) {
        $('.pan-exclude').show();
        $('.pan-max-active').show();
        $('.pan-search-results').show();
        $('.pan-enabled-title').show();
        $('.pan-disabled-title').hide();
        $('.pan-enabled-count').show();
        $('.pan-disabled-count').hide();
    } else {
        $('.pan-exclude').hide();
        $('.pan-max-active').hide();
        $('.pan-search-results').hide();
        $('.pan-enabled-title').hide();
        $('.pan-disabled-title').show();
        $('.pan-enabled-count').hide();
        $('.pan-disabled-count').show();
    }
});

$('.pan-override a').click(function() {
    $('.pan-remove-override').show();
    $('.pan-override').hide();
    $('.pan-enable input').removeAttr('disabled');
});

$('.pan-remove-override a').click(function() {
    $('.pan-override').show();
    $('.pan-remove-override').hide();
    $('.pan-enable input').attr('disabled', 'disabled');
});

$(".block-phone-btn").click(function() {
    $(".block-pan-phone-number").show();
    $(".define-roles-buttons").hide();
    $(".define-permissions-existing").hide();
    $(".manage-pan-phone-number").hide();
});

$(".manage-phone-btn").click(function() {
    $(".manage-pan-phone-number").show();
    $(".define-permissions-existing").hide();
    $(".block-pan-phone-number").hide();
    $(".define-roles-buttons").hide();
});

$(".btn-add-pan").click(function() {
    $('.btn-group-pan').hide();
    $('.btn-group-pan-edit').show();
    $(".pan-list").hide();
    $(".pan-add-number").show();
});
$(".btn-group-pan-edit .btn-save-pan").click(function() {
    $('.btn-group-pan').show();
    $('.btn-group-pan-edit').hide();
    $(".pan-list").show();
    $(".pan-add-number").hide();
});

$('.other-countrycode').hide();

$('#countrycode').change(function() {
    if ($(this).val().toLowerCase() === 'other') {
        $('#phone-number').parents('.phone-number').removeClass('col-md-9').addClass('col-md-6');
        $('.other-countrycode').show();
        $('.other-countrycode-input').focus();
    } else {
        $('.other-countrycode').hide();
        $('#phone-number').parents('.phone-number').removeClass('col-md-6').addClass('col-md-9');
    }
});

$('#dialing-class').change(function() {
    if ($(this).val().toLowerCase() === 'informant line') {
        $('.informant-line').slideDown(400);
    } else {
        $('.informant-line').slideUp(400);
    }
});

$('#rounded-check-private').change(function() {
    $('.private-number').slideToggle(400);
    $('#private-schedule-section').delay(400).slideToggle(400);
});

$('#rounded-check-dtmf').change(function() {
    $('#max-digits-section').slideToggle();
});

$('.show-popup-pan').click(function() {
    $('.popup-pan').show().velocity({
        width: "100%",
        height: "100%"
    });
});

$('.hide-popup-pan').click(function() {
    $('.popup-pan').velocity({
        width: "0",
        height: "0"
    }).hide();
});

function hidePopupPan() {
    $('.popup-pan').velocity({
        width: "0",
        height: "0"
    },500).hide();
};

$('.btn-group-pan .hide-popup-pan').click(function() {
    hidePopupPan();
});

$('.btn-group-pan .btn-save-pan').click(function() {
    hidePopupPan();
});

$(document).ready(function() {

    $('.popup-pan').hide();

    $('.pan-disabled-count').hide();
    $('.pan-disabled-title').hide();
    $('.pan-remove-override').hide();
    $('.pan-add-number').hide();
    $('.pan-override').show();
    $('.pan-enable input').attr('disabled', 'disabled');

    $('.block-pan-phone-number').hide();
    $('.define-roles-buttons').hide();

    $('.btn-group-pan-edit').hide();

});

//# sourceURL=js/wireframes/pages/search/inmates/profile/pan-popup.js