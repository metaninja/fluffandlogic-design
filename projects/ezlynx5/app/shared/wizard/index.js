function markCompletedSteps() {
	$('.wizard-step').each(function() {
		if ($(this).hasClass('active')) {
			return false;
		}
		else {
			$(this).find('.wizard-step-number').addClass('completed');
		}
	});
}

$(document).ready(function() {
    function highlightCurrentStep() {
        var $wizard = $('.wizard'),
            pageNumber = $wizard.parent().data('page-number'),
            $currentStep = $($wizard.find('a')[pageNumber - 1]);

        $currentStep.addClass('active');
        markCompletedSteps();
    }

    highlightCurrentStep();
});