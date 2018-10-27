function deleteLicense() {
    $(this).closest("tr").remove();
}

function showAddLicenseModal() {
    $("#add-license-modal").modal("show");
}

$(document).ready(function() {
    var license = {
        license: [
            {
                principal: "Mark Wade",
                licenseNumber: "12309898",
                licenseType: "Resident Producer Firm",
                state: "TX",
                licenseIssueDate: "05/12/2017",
                licenseExpirationDate: "05/13/2022",
                licenseStatus: "Active",
                lineOfAuthority: "",
                nationalProducerNumber: "2039847"
            },
            {
                principal: "Alex Huan",
                licenseNumber: "6475898",
                licenseType: "Resident Producer Firm",
                state: "TX",
                licenseIssueDate: "08/20/2017",
                licenseExpirationDate: "08/21/2022",
                licenseStatus: "Active",
                lineOfAuthority: "",
                nationalProducerNumber: "2047747"
            }
        ]
    };

    var licenseTemplateScript = $("#license-template").html();
    var licenseTemplate = Handlebars.compile(licenseTemplateScript);
    var licenseData = licenseTemplate(license);
    $('#license').append(licenseData);

    $(".js-add-license-btn").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        showAddLicenseModal();
    });
});