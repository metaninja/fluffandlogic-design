
var reviewCertificateHolders = {
    reviewCertificateHolders: [
        {
            certificateHolder: "Bank of America",
            address: "71 Pilgrim Avenue, Chadron, NE 65257",
            email: "Jordan_Cooper@bankofamerica.com",
            phone: "(308) 122-7890",
            attachment: true,
            selected: true,
        },
        {
            certificateHolder: "Bank of America",
            address: "70 Bowman St., Kearney, NE 65253",
            email: "james_arsani@bankofamerica.com",
            phone: "(308) 341-8900",
            attachment: false,
        },
        {
            certificateHolder: "John Dover",
            address: "123 6th St. Bellevue, NE 65251",
            email: "john.dover@hotmail.com",
            phone: "(308) 145-1200",
            attachment: true
        },
        {
            certificateHolder: "Wells Fargo",
            address: "514 S. Magnolia St., Plattsmouth NE 65255",
            email: "michelle.hunter@wellsfargo.com",
            phone: "(308) 092-8338",
            attachment: false
        }
    ]
};

function renderReviewCertificateHolders() {
    var reviewCertificateHoldersTemplateScript = $("#review-certificate-holders-template").html();
    var reviewCertificateHoldersTemplate = Handlebars.compile(reviewCertificateHoldersTemplateScript);
    var reviewCertificateHoldersData = reviewCertificateHoldersTemplate(reviewCertificateHolders);
    $('#review-certificate-holders').html(reviewCertificateHoldersData);

    $('#review-certificate-holders li:first-child').addClass('active');

}

renderReviewCertificateHolders();
