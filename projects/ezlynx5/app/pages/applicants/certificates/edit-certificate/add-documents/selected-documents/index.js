function deleteDocument() {
    $(this).closest("tr").remove();
}

var selectedDocuments = {
    selectedDocuments: [

    ]
};

var selectedDocumentsTemplateScript = $("#selected-documents-template").html();
var selectedDocumentsTemplate = Handlebars.compile(selectedDocumentsTemplateScript);
var selectedDocumentsData = selectedDocumentsTemplate(selectedDocuments);
$('#selected-documents').append(selectedDocumentsData);

$('#selected-documents').sortable();
