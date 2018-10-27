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
    $('#contracts').html(contractsData);
});