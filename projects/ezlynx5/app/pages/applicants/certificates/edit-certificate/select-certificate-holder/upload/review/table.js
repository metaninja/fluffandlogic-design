var certificateHolders = {
    certificateHolders: [
        {
            certificateHolder: "John Dover",
            address: "123 6th St. Bellevue, NE 65251",
            email: "john.dover",
            phone: "(308) 145-1200",
            edit: true,
        },
        {
            certificateHolder: "Bank of America",
            address: "71 Pilgrim Avenue, Chadron, NE 65257",
            email: "Jordan_Cooper@bankofamerica.com",
            phone: "(308) 122-7890",
            edit: false,

        },
        {
            certificateHolder: "Bank of America",
            address: "70 Bowman St., Kearney, NE 65253",
            email: "james_arsani@bankofamerica.com",
            phone: "(308) 341-8900",
            edit: false,
        },
        {
            certificateHolder: "Wells Fargo",
            address: "514 S. Magnolia St., Plattsmouth NE 65255",
            email: "michelle.hunter@wellsfargo.com",
            phone: "(308) 092-8338",
            edit: false,
        }
    ]
};

var certificateHoldersTemplateScript = $("#certificate-holders-template").html();
var certificateHoldersTemplate = Handlebars.compile(certificateHoldersTemplateScript);
var certificateHoldersData = certificateHoldersTemplate(certificateHolders);
$('#add-certificate-holders').html(certificateHoldersData);
$('#selected-certificate-holders').html(certificateHoldersData);
