$(document).ready(function() {
    $('[required]').blur(function() {
        var msg = $(this).parents('.form-group').find('label').text() + " is required";
        if ($(this).val() === '') {
            $(this).parents('.form-group').find('.invalid-feedback').show().text(msg);
            $(this).addClass('is-invalid');
        }
        else {
            $(this).parents('.form-group').find('.invalid-feedback').hide().text(msg);
            $(this).removeClass('is-invalid');
        }
    });
});