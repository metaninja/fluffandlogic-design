function addCertificateHolders() {
    var $certificateHoldersTable = $(".js-certificate-holders-table").eq(0).clone();

    $certificateHoldersTable.find(".js-certificate-copy-action").hide();
    $certificateHoldersTable.find(".js-certificate-actions").show();

    $(".js-no-certificate-holders").addClass('hide-content');
    $(".js-selected-certificate-holders").removeClass('hide-content');
    $("#certificate-holders-modal").modal("hide");

    $('.js-btn-review').removeAttr('disabled');
}

function newCertificateHolder() {
    $('.js-new-certificate-content').removeClass('hide-content');
    $('.js-add-certificate-content').addClass('hide-content');
}

function editCertificateHolder() {
    $('.js-add-certificate-content').addClass('hide-content');
    $('.js-new-certificate-content').removeClass('hide-content');

    $('.js-btn-add-certificate-holder').addClass('hide-content');
    $('.js-btn-save-certificate-holder').removeClass('hide-content');
}

function deleteRow() {
    $(this).closest("tr").remove();
}

$(document).ready(function() {
    var certificateHolders = {
        certificateHolders: [
            {
                certificateHolder: "John Dover",
                address: "123 6th St. Bellevue, NE 65251",
                email: "john.dover@hotmail.com",
                phone: "(308) 145-1200",
                policy: "AUTOB-123409809-01"
            },
            {
                certificateHolder: "Bank of America",
                address: "71 Pilgrim Avenue, Chadron, NE 65257",
                email: "Jordan_Cooper@bankofamerica.com",
                phone: "(308) 122-7890",
                policy: "AUTOB-123409809-01"
            },
            {
                certificateHolder: "Bank of America",
                address: "70 Bowman St., Kearney, NE 65253",
                email: "james_arsani@bankofamerica.com",
                phone: "(308) 341-8900",
                policy: "CPKG-222456"
            },
            {
                certificateHolder: "Wells Fargo",
                address: "514 S. Magnolia St., Plattsmouth NE 65255",
                email: "michelle.hunter@wellsfargo.com",
                phone: "(308) 092-8338",
                policy: "CPKG-222456"
            }
        ]
    };

    var certificateHoldersTemplateScript = $("#certificate-holders-template").html();
    var certificateHoldersTemplate = Handlebars.compile(certificateHoldersTemplateScript);
    var certificateHoldersData = certificateHoldersTemplate(certificateHolders);
    $('#add-certificate-holders').html(certificateHoldersData);
    $('#selected-certificate-holders').html(certificateHoldersData);
});