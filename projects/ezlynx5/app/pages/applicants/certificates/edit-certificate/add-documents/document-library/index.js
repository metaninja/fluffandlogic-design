$(document).ready(function() {
    var documents = {
        documents: [
            {
                documentName: "Cancellation Request / Policy Release",
                documentType: "Document",
                policyNumber: "P13A-1231378",
                createdBy: "Alex Huan",
                dateCreated: "10/31/2017",
                dateModified: "10/31/2017"
            },
            {
                documentName: "ACORD 75 (2016-03) Insurance Binder",
                documentType: "Certificate Master",
                policyNumber: "55PH 2354098",
                createdBy: "Alex Huan",
                dateCreated: "10/31/2017",
                dateModified: "10/31/2017"
            },
            {
                documentName: "ACORD 28 (2016-03) Evidence Of Commercial Property Insurance",
                documentType: "Certificate Master",
                policyNumber: "P13A-1231378",
                createdBy: "Jason Menendez",
                dateCreated: "10/31/2017",
                dateModified: "10/31/2017"
            }
        ]
    };

    var documentsTemplateScript = $("#documents-template").html();
    var documentsTemplate = Handlebars.compile(documentsTemplateScript);
    var documentsData = documentsTemplate(documents);
    $('#documents').append(documentsData);
});