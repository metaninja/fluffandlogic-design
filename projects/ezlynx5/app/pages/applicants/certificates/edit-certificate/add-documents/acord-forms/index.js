$(document).ready(function() {
    var forms = {
        forms: [
            {
                acordFormNumber: "35",
                formName: "Cancellation Request / Policy Release",
                version: "2016 - 03"
            },
            {
                acordFormNumber: "611",
                formName: "Claim History / Loss Run Request",
                version: "2013 - 01"
            },
            {
                acordFormNumber: "57",
                formName: "Financial Responsibility Form (Notice of Cancellation or Termination)",
                version: "2016 - 09"
            }
        ]
    };

    var formsTemplateScript = $("#forms-template").html();
    var formsTemplate = Handlebars.compile(formsTemplateScript);
    var formsData = formsTemplate(forms);
    $('#forms').append(formsData);
});