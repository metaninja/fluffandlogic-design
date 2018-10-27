var carrierLabels = {
    labels: [
        {  Name: "Midwest",         Visible: true },
        {  Name: "2018",            Visible: true },
        {  Name: "TX",              Visible: false },
        {  Name: "OK",              Visible: false },
    ]
};

var memberAgencyLabels = {
    labels: [
        {  Name: "ACORD 64",        Visible: true },
        {  Name: "Agency Form 13B", Visible: true },
        {  Name: "TX",              Visible: true },
        {  Name: "OK",              Visible: false },
    ]
};

var memberAgencyFiles = {
    labels: [
        {  Name: "ACORD64",         Visible: true },
        {  Name: "LIC203984",       Visible: true },
        {  Name: "LIC29875",        Visible: true },
        {  Name: "Agency Form 13B", Visible: true },
        {  Name: "TX",              Visible: true },
    ]
};


function renderLabels(source, destination) {
    var labelsTemplateScript = $("#labels-template").html();
    var labelsTemplate = Handlebars.compile(labelsTemplateScript);
    var labelsData = labelsTemplate(source);
    $(destination).html(labelsData);
}

renderLabels(carrierLabels, '#carrier-labels');
renderLabels(memberAgencyLabels, '#member-agency-labels');
renderLabels(memberAgencyFiles, '#member-agency-files-labels');
