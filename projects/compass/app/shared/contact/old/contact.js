function AddEmail(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#contact-email').collapse('show');
    $('#add-email-modal').modal('show');
}

function AddPhone(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#contact-phone').collapse('show');
    $('#add-phone-modal').modal('show');
}

function AddAddress(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#contact-address').collapse('show');
    $('#add-address-modal').modal('show');
}

function AddWebsite(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#contact-websites').collapse('show');
    $('#add-website-modal').modal('show');
}