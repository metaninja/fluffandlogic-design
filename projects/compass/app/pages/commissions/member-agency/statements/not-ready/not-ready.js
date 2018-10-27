function renderNotReadyTable() {
    var commissionsTemplateScript = $("#not-ready-template").html();
    var commissionsTemplate = Handlebars.compile(commissionsTemplateScript);
    var commissionsData = commissionsTemplate(commissions);
    $('#not-ready-table').html(commissionsData);
}

renderNotReadyTable();

function generateStatements() {
    $('#generate-statement-modal').modal('hide');

}