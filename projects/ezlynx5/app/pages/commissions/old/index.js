(function() {
    $(document).ready(function() {

        // ----------------------
        // Functions for Criteria
        // ----------------------

        function ruleTypeOnChange() {
            $('.rule-type').change(function() {
                var thisParent = $(this).parents('.criteria-form');
                var selectedOptionClass = $(this).val();

                thisParent.find('.rule-value').show();
                thisParent.find('.rule-value-input').hide();
                thisParent.find(selectedOptionClass).show();

                if (selectedOptionClass !== '.rule-date') {
                    thisParent.find('.rule-operator-boolean').show();
                    thisParent.find('.rule-operator-relational').hide();
                }
                else {
                    thisParent.find('.rule-operator-boolean').hide();
                    thisParent.find('.rule-operator-relational').show();
                }

            });
        }

        function removeCriteriaOnClick() {
            $('.criteria-form-delete').click(function() {
                $(this).parents('.criteria-form').remove();
            });
        }

        function btnAddCriteriaOnClick() {
            $('.btn-add-criteria').click(function() {
                var clonedElement = $('.templates .criteria-form').clone().appendTo('.criteria');
                ruleTypeOnChange();
                removeCriteriaOnClick();
                clonedElement.find('.criteria-operator').show();
                $('.criteria .criteria-form-operator-container').removeClass('hide');
                $('.criteria tr:first-of-type .criteria-form-operator-container').addClass('hide');
            });
        }

        function criteriaOperatorOnChange() {
            $('.criteria-operator').change(function() {
                var selectedValue = $(this).val();
                $('.criteria-form-operator').hide();
                $(selectedValue).show();
            });
        }


        // ----------------------
        // Functions for Payee
        // ----------------------

        function payementTypeOnChange() {
            $('.payment-type').change(function() {
                var thisParent = $(this).parents('.payee-form');
                var selectedOptionClass = $(this).val();

                if (selectedOptionClass === '.payment-dollar') {
                    thisParent.find('.payment-dollar').show();
                    thisParent.find('.payment-percentage').hide();
                    thisParent.find('.payment-of').hide();
                }
                else {
                    thisParent.find('.payment-dollar').hide();
                    thisParent.find('.payment-percentage').show();
                    thisParent.find('.payment-of').show();
                }
            });
        }

        function payeeTypeOnChange() {
            $('.payee-type').change(function() {
                var thisParent = $(this).parents('.payee-form');

                if ($(this).val() == '.service-team') {
                    thisParent.find('.service-team').show();
                }
                else {
                    thisParent.find('.service-team').hide();
                }
            });
        }

        function btnAddPayeeOnClick() {
            $('.btn-add-payee').click(function() {
                var clonedElement = $('.templates .payee-form').clone().appendTo('.payee');
                payementTypeOnChange();
            });
        }

        function btnAddTierOnClick() {
            $('.btn-add-tier').click(function() {
                $('.templates .tier-form').clone().insertAfter('.btn-add-tier');

                if (tierCount === 0) {
                    $(this).insertAfter('.payee-container');
                    tierCount ++;
                }
                else {
                    $('.templates .payee-container').clone().insertAfter('.payee-container:last-of-type');
                    payementTypeOnChange();
                    payeeTypeOnChange();
                    btnAddPayeeOnClick();
                    btnAddTierOnClick();
                }

            });
        }



        // ----------------------
        // Initialize
        // ----------------------
        $('.service-team').hide();

        var tierCount = 0;

        ruleTypeOnChange();
        removeCriteriaOnClick();
        btnAddCriteriaOnClick();
        criteriaOperatorOnChange();

        payementTypeOnChange();
        payeeTypeOnChange();
        btnAddPayeeOnClick();
        btnAddTierOnClick();

    });
})();