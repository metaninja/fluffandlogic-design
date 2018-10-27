function renderWizard() {
    var activeStep = parseInt($('.js-wizard').data('wizard-step')) - 1;
    wizard.wizard[activeStep].active = true;
    wizard.wizard[activeStep].complete = false;

    var step = 0;
    while (step >= 0 && step < activeStep) {
        wizard.wizard[step].active = false;
        wizard.wizard[step].complete = true;
        step ++;
    }

    var wizardTemplateScript = $("#wizard-template").html();
    var wizardTemplate = Handlebars.compile(wizardTemplateScript);
    var wizardData = wizardTemplate(wizard);
    $('#wizard').append(wizardData);
}

$(document).ready(function() {
    renderWizard();

    function highlightCurrentStep() {
        var $ezWizard = $('.wizard'),
            pageNumber = $ezWizard.parent().data('page-number'),
            $currentStep = $($ezWizard.find('a')[pageNumber - 1]);
        $currentStep.addClass('active');
    }

    highlightCurrentStep();
});

