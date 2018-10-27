$(document).ready(function() {

    function showDetails() {
        $('.history-snapshot-desc').show(100);
        $('.history-title-desc').show(100);
        $('.history-title-icon-overlay').hide();

        $('.js-col-history').removeClass('col-lg-1').addClass('col-lg-4');
        $('.js-col-1-policy').removeClass('col-lg-6').addClass('col-lg-4');
        $('.js-col-2-policy').removeClass('col-lg-5').addClass('col-lg-4');
    }

    function hideDetails() {
        $('.history-snapshot-desc').hide(100);
        $('.history-title-desc').hide(100);
        $('.history-title-icon-overlay').show();

        $('.js-col-history').removeClass('col-lg-4').addClass('col-lg-1');
        $('.js-col-1-policy').removeClass('col-lg-4').addClass('col-lg-6');
        $('.js-col-2-policy').removeClass('col-lg-4').addClass('col-lg-5');
    }

    $('.history-snapshot-desc').hide();
    $('.history-title-desc').hide();

    $('.history-snapshot').click(showDetails);
    $('.history-title-icon').click(showDetails);

    $('.js-hide-history-details').click(hideDetails);


    $('.history-snapshot').click(function() {
        $('.history-snapshot').removeClass('active');
        $(this).addClass('active');
        var transactionType = $(this).attr('data-transaction-type');
        $('.js-transaction-type').html(transactionType);
        $('.js-transaction-date').html($(this).attr('data-transaction-date'));

        var bgColor = '#546e7a';
        switch(transactionType) {
            case 'Renewal':
                bgColor = '#00897b';
                break;
            case 'New Business':
                bgColor = '#7cb342';
                break;
            default:
                bgColor = '#546e7a';
        }
        $('.js-alert-transaction').css('background-color', bgColor);
    });
})