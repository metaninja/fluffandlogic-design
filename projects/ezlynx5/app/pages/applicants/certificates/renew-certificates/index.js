function updateCertificateName(select) {
    var certificateName = $(select).find(':selected').text() + " Certificate";
    $('.js-certificate-name').val(certificateName);
}

function deletePolicy() {
    $('.js-policies').addClass('hide-content');
    $('.js-no-policies').removeClass('hide-content');
}
