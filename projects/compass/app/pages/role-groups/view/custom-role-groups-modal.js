(function() {
    $(document).ready(function() {
        var RoleName = $('#role-group-name').val();
        var RoleDescription = $('#role-group-description').val();



        $('#role-group-name').attr('disabled', 'disabled');
        $('#role-group-description').attr('disabled', 'disabled');

        $('.js-btn-customize-role-group').click(function() {
            if ($('#role-group-name').val() === RoleName) {
                $('.js-form-group-role-group-name').addClass('has-danger');
            }
            else {
                $('#custom-role-group-modal').modal('hide');
            }
        });

        $('#custom-role-group-modal input[type="checkbox"]').click(function() {
            if ($(this).is(':checked')) {
                $('.label-role-group-name').addClass('required');
                $('#role-group-name').attr('required','required');


                $('.label-role-group-description').addClass('required');
                $('#role-group-description').attr('required','required');

                $('#role-group-name').removeAttr('disabled');
                $('#role-group-description').removeAttr('disabled');
                $('.js-btn-customize-role-group').removeAttr('disabled');
            }
            // else {
            //     $('#role-group-name').attr('disabled', 'disabled');
            //     $('#role-group-description').attr('disabled', 'disabled');
            //     $('.js-btn-customize-role-group').attr('disabled', 'disabled');
            //     $('.form-group').removeClass('has-danger');
            // }
        });

    });
})();