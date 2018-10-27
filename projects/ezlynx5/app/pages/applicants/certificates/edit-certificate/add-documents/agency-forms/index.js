$(document).ready(function() {
    var agencyForms = {
        agencyForms: [
            {
                formName: "12testpdf",
                documentType: "PDF"
            },
            {
                formName: "12word",
                documentType: "DOCX"
            },
            {
                formName: "1test",
                documentType: "DOCX"
            }
        ]
    };

    var agencyFormsTemplateScript = $("#agency-forms-template").html();
    var agencyFormsTemplate = Handlebars.compile(agencyFormsTemplateScript);
    var agencyFormsData = agencyFormsTemplate(agencyForms);
    $('#agency-forms').append(agencyFormsData);
});