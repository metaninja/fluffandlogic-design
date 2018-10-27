$(function() {
    function filterComponents() {
        var value = this.value.toLowerCase();

        $components.hide();

        $components.filter(function() {
            return $(this).text().toLowerCase().match(value);
        }).show();
    }

    var $components = $('#js-leftnav li'),
        $searchComponentInput = $('#search-components');

    $searchComponentInput.on('keyup', filterComponents);
});
