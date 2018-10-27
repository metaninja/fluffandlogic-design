function showDistributionHistory() {
    $(".js-distribution-history").removeClass("hide-content");
    expandWorkspace();
}

$(function() {
    var certificates = {
        certificates: [
            {
                certificateHolder: "Bank of America",
                address: "123 Main Street, Plano TX 75097",
                phone: "(972) 561-1233",
                contactMethod: "Email",
                email: "mwinters2@bankofamerica.com",
                history: false
            },
            {
                certificateHolder: "Capital One",
                address: "123 Main Street, Plano TX 75097",
                phone: "(972) 561-1233",
                contactMethod: "Email",
                email: "jane.smith@bankofamerica.com",
                history: true
            },
            {
                certificateHolder: "City of Dallas",
                address: "123 Main Street, Plano TX 75097",
                phone: "(972) 561-1233",
                contactMethod: "Postal Mail",
                email: "mwinters2@bankofamerica.com",
                history: false
            },
            {
                certificateHolder: "Collin College",
                address: "123 Main Street, Plano TX 75097",
                phone: "(972) 561-1233",
                contactMethod: "Fax",
                email: "mwinters2@bankofamerica.com",
                history: true
            },
            {
                certificateHolder: "SuperCut #31",
                address: "123 Main Street, Plano TX 75097",
                phone: "(972) 561-1233",
                contactMethod: "Fax",
                email: "mwinters2@bankofamerica.com",
                history: true
            },
            {
                certificateHolder: "Wachovia Bank",
                address: "123 Main Street, Plano TX 75097",
                phone: "(972) 561-1233",
                contactMethod: "Client Center",
                email: "mwinters2@bankofamerica.com",
                history: false
            }
        ]
    };

    var certificatesTemplateScript = $("#certificate-holders-template").html();
    var certificatesTemplate = Handlebars.compile(certificatesTemplateScript);
    var certificatesData = certificatesTemplate(certificates);
    $('#certificate-holders').append(certificatesData);
});
