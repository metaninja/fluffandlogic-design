var expiredCertificates= {
    certificates: [
        {
            Name: "ACORD 24 Prop Cert 16-17 BoA",
            AcordForm: "ACORD 24",
            Policies: ["IMRC 340989034-00"],
            Valid: "11/25/2017",
            Expires: "11/28/2018",
        },
        {
            Name: "ACORD 87 CPKG IM GL BOP 16-17 NTX",
            AcordForm: "ACORD 87",
            Policies: ["CPKG 123409809-01"],
            Valid: "11/25/2017",
            Expires: "11/28/2018",
        },
        {
            Name: "ACORD 64 US WC 16-17 NTX",
            AcordForm: "ACORD 64 US",
            Policies: ["WC 021340971-01"],
            Valid: "11/25/2017",
            Expires: "11/28/2018",
        },
        {
            Name: "ACORD 24 Prop Cert 16-17 BoA",
            AcordForm: "ACORD 24",
            Policies: ["IMRC 340989034-00"],
            Valid: "11/25/2017",
            Expires: "11/28/2018",
        },
        {
            Name: "ACORD 87 CPKG IM GL BOP 16-17 NTX",
            AcordForm: "ACORD 87",
            Policies: ["CPKG 123409809-01"],
            Valid: "11/25/2017",
            Expires: "11/28/2018",
        },
    ]
};

function renderCertificates(source, destination) {
    var certificatesTemplateScript = $("#certificates-template").html();
    var certificatesTemplate = Handlebars.compile(certificatesTemplateScript);
    var certificatesData = certificatesTemplate(source);
    $(destination).html(certificatesData);
}

renderCertificates(currentCertificates, '#certificates-current');
renderCertificates(futureCertificates, '#certificates-future');
renderCertificates(expiredCertificates, '#certificates-expired');