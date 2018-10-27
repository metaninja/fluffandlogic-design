$(document).ready(function() {
    var contracts = {
        contracts: [
            {
                start: "11/15/2017",
                expiration: "11/15/2018"
            },
            {
                start: "10/11/2016",
                expiration: "12/12/2018"
            },
            {
                start: "05/15/2017",
                expiration: "07/05/2018"
            },
            {
                start: "11/15/2017",
                expiration: "11/15/2018"
            }
        ]
    };

    var contractsTemplateScript = $("#contracts-template").html();
    var contractsTemplate = Handlebars.compile(contractsTemplateScript);
    var contractsData = contractsTemplate(contracts);
    $('#contracts').append(contractsData);

    $('.btn-contracts').click(function() {
        $('.ez-global-workspace').toggleClass('workspace-hide');
        $('.js-contracts-section').show();
    });

    $('.js-btn-add-contract').click(function() {
        e.preventDefault();
        e.stopPropagation();

        $("#org-contracts").collapse("show");
        $("#add-contract-modal").modal("show");
    });

    $('.btn-workspace-close').click(function() {
        $('.ez-global-workspace').addClass('workspace-hide');
        $('.member-agency-document-versions').hide();
    });
});