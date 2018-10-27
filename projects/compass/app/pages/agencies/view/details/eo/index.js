$('.js-btn-add-eo').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('#org-eo').collapse('show');
    $('#add-eo-modal').modal('show');
});
