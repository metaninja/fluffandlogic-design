(function() {
    $(document).ready(function() {

        $('.btn-set-as-primary').click(function() {
            $(this).parents('table').find('.status-primary').each(function(index) {
                $(this).removeClass('show');
            });

            $(this).parents('tr').find('.status-primary').addClass('show');
        });

    });
})();

