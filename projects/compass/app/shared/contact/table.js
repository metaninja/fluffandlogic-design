$(document).ready(function() {
    var contacts = {
        contacts: [
            {
                Name: "Company",
                Type: "Company",
                AddressLine1: "356 Hartford Lane",
                AddressLine2: "Harrisburg, PA 17549",
                Phone: "(609) 233-1567",
                Email: "info@safeco.com",
                Website: "www.safeco.com"
            },
            {
                Name: "Mark Smith",
                Type: "Owner",
                AddressLine1: "356 Hartford Lane",
                AddressLine2: "Harrisburg, PA 17549",
                Phone: "(609) 233-1569",
                Email: "mark.smith@safeco.com"
            },
            {
                Name: "Jane Walden",
                Type: "CSR",
                AddressLine1: "356 Hartford Lane",
                AddressLine2: "Harrisburg, PA 17549",
                Phone: "(609) 233-1568",
                Email: "jane.walden@safeco.com"
            },
            {
                Name: "Margie Rohas",
                Type: "Producer",
                AddressLine1: "356 Hartford Lane",
                AddressLine2: "Harrisburg, PA 17549",
                Phone: "(609) 233-1571",
                Email: "margie.rohas@safeco.com"
            },


        ]
    };

    var contactsTemplateScript = $("#contacts-template").html();
    var contactsTemplate = Handlebars.compile(contactsTemplateScript);
    var contactsData = contactsTemplate(contacts);
    $('#contacts').append(contactsData);
});