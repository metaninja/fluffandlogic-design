(function() {
    $(document).ready(function() {

        function multiselect(id) {

            var multiselectText = id + ' .multiselect-text';
            var options = id + ' .multiselect-options';
            var position = $(multiselectText).position();
            var height = $(multiselectText).height();

            // $(options).hide();
            $(options).css('top', height + position.top);

            $(multiselectText).click(function() {
                console.log('test');
                $(options).toggle();
            });

            var option = id + ' .multiselect-option';
            var optionSelected = id + ' .multiselect-option:checked';
            $(option).click(function() {
                var selected = [];

                $(optionSelected).each(function() {
                    selected.push($(this).val());
                });

                $(multiselectText).val(selected.join(', '));
            });
        }

        multiselect('#multiselect-rule-new-renewal');

    });
})();