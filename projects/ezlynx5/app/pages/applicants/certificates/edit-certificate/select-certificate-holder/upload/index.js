$(document).ready(function() {
    $('.js-tab-ezlynx-fields').click(function() {
        $('.js-tab-ezlynx-fields-content').show();
        $('.js-tab-file-uploader-content').hide();
        $('.js-tab-file-uploader').removeClass('active');
        $('.js-tab-ezlynx-fields').addClass('active');
    });

    $('.js-tab-file-uploader').click(function() {
        $('.js-tab-ezlynx-fields-content').hide();
        $('.js-tab-file-uploader-content').show();
        $('.js-tab-file-uploader').addClass('active');
        $('.js-tab-ezlynx-fields').removeClass('active');

    });
});