var files = {
    files: [
        {
            Icon: "linearicon-folder",
            isFolder: true,
            Name: "Contracts",
            Username: "alonzosanders",
            Modified: "Dec 15 2017, 12:32PM",
            Size: "",
            hasVersions: true
        },
        {
            Icon: "linearicon-document",
            isFolder: false,
            Name: "Document 1.pdf",
            Username: "alonzosanders",
            Modified: "Dec 15 2017, 12:32PM",
            Size: "1.4MB",
            hasVersions: false,
            tags: ["ACORD64"]
        },
        {
            Icon: "linearicon-document",
            isFolder: false,
            Name: "Document 2.pdf",
            Username: "beatricelane",
            Modified: "Dec 15 2017, 12:32PM",
            Size: "1.4MB",
            hasVersions: false,
            tags: ["LIC203984", "TX"]
        },
        {
            Icon: "linearicon-document",
            isFolder: false,
            Name: "Document 3.pdf",
            Username: "lorisanchez",
            Modified: "Dec 15 2017, 12:32PM",
            Size: "0.57MB",
            hasVersions: true,
            tags: ["LIC29785", "TX"]
        },
        {
            Icon: "linearicon-document",
            isFolder: false,
            Name: "Document 4.pdf",
            Username: "alonzosanders",
            Modified: "Dec 15 2017, 12:32PM",
            Size: "0.4MB",
            hasVersions: true,
            tags: ["Agency Form 13B", "v2018.1.3", "TX", "OK", "2018"]
        }
    ]
};

function renderFiles(template, destination) {
    var filesTemplateScript = $(template).html();
    var filesTemplate = Handlebars.compile(filesTemplateScript);
    var filesData = filesTemplate(files);
    $(destination).html(filesData);
}
