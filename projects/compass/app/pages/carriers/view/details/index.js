function AddWebsite(event) {
    event.preventDefault();
    event.stopPropagation();

    $('#add-website-modal').modal('show');
    $('#org-websites').collapse('show');
}
