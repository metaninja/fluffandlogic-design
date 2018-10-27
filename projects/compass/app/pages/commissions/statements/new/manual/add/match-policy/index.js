var policies = {
    policies: []
};
var AllPolicies = {
    policies: [
        {
            PolicyNumber: "PL345098",
            Carrier: "Safeco"
        },
        {
            PolicyNumber: "PL40956",
            Carrier: "Safeco"
        },
        {
            PolicyNumber: "PL12309",
            Carrier: "Progressive"
        }
    ]
};

renderPolicies();

function renderPolicies() {
    var policiesTemplateScript = $("#policies-template").html();
    var policiesTemplate = Handlebars.compile(policiesTemplateScript);
    var policiesData = policiesTemplate(policies);
    $('#policies').html(policiesData);
}

function showSearchTransactionNumber(Policy) {
    selectedPolicy = Policy;
    $('.js-search-transaction-number').removeClass('hide-content');
    $('.js-search-transaction-number .type-ahead-results').addClass('show');
}

function matchPolicy(TransType) {
    records.records[selectedRow].Insured = "John Smith";
    records.records[selectedRow].Policy = selectedPolicy;
    records.records[selectedRow].TransType = TransType;
    records.records[selectedRow].Matched = true;
    renderLineItems();


    $('.js-search-for-policy input').val('');
    $('.js-search-transaction-number').addClass('hide-content');
    $('.js-search-transaction-number .type-ahead-results').removeClass('show');

    $('.js-search-for-policy').addClass('hide-content');
    $('.js-callouts').removeClass('hide-content');
    $('.js-table-heading').removeClass('hide-content');
    $('.js-filter').removeClass('hide-content');
}

function EditorKeyPressed(event) {
    if (event.keyCode === 13) {
        $('.js-callouts').removeClass('hide-content');
        $('.js-table-heading').removeClass('hide-content');
        $('.js-editor').removeClass('hide-content');

        $('.js-search-for-policy').addClass('hide-content');
    }
    else if (event.keyCode === 27) {
        $('.js-callouts').removeClass('hide-content');
        $('.js-table-heading').removeClass('hide-content');
        $('.js-editor').removeClass('hide-content');

        $('.js-search-for-policy').addClass('hide-content');
    }
}

function searchPolicies(input) {
    var searchTerm = $(input).val().toLowerCase();
    policies = {
        policies: []
    };

    for (var i=0; i<AllPolicies.policies.length; i++) {
        if (AllPolicies.policies[i].PolicyNumber.toLowerCase().indexOf(searchTerm) >= 0 || AllPolicies.policies[i].Carrier.toLowerCase().indexOf(searchTerm) >= 0) {
            policies.policies.push(AllPolicies.policies[i]);
        }
    }

    if (policies.policies.length > 0) {
        $('#policies').removeClass('hide-content');
        $('.js-search-policy-number .type-ahead-no-results').addClass('hide-content');
        renderPolicies();
    } else {
        $('#policies').addClass('hide-content');
        $('.js-search-policy-number .type-ahead-no-results').removeClass('hide-content');
    }

}


