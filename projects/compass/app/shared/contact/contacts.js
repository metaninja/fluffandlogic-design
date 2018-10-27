function addContact(link) {
    var contact = $(link).prev('.contact-form-group').clone();
    contact.find('input').each(function() {
        $(this).val('');
    });

    $(link).before(contact);
    $(link).prev('.contact-form-group').find('.contact-form-row:first-child input:first-child').focus();
}

function deleteContact(link) {
    $(link).parents('.contact-form-group').remove();
}