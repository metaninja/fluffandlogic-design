(function() {
    $(document).ready(function() {

        function showFieldAsInvalid(that) {
            $(that).addClass('form-control-danger');
            $(that).parents('.form-group').addClass('has-danger');
        }

        function showFieldAsValid(that) {
            $(that).removeClass('form-control-danger');
            $(that).parents('.form-group').removeClass('has-danger');
        }

        function isFieldInvalid(that) {
            if ($(that).val() === "") {
                showFieldAsInvalid(that);
                return true;
            }
            else {
                showFieldAsValid(that);
                return false;
            }
        }

        $('input[required]').blur(function() {
            var that = this;
            isFieldInvalid(that);
        });

        $('select[required]').blur(function() {
            var that = this;
            if ($(that).find(":selected").index() === 0) {
                showFieldAsInvalid(that);
                return true;
            }
            else {
                showFieldAsValid(that);
                return false;
            }
        });

        $('textarea[required]').blur(function() {
            var that = this;
            isFieldInvalid(that);
        });

        $('select[required]').change(function() {
            var that = this;
            isFieldInvalid(that);
        });

    })
})();