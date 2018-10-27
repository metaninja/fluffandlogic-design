var addPolicies = {
    addPolicies: [
        {
            policyNumber: "AUTOB-123409809-01",
            LOB: "Auto (Commercial)",
            Status: "Active",
            Expires: "11/22/2018"
        },
        {
            policyNumber: "CPKG-222456",
            LOB: "Auto (Commercial), General Liability, Inland Marine, Workers Compensation",
            Status: "Active",
            Expires: "1/31/2018"
        },
        {
            policyNumber: "IMRC-345098098-00",
            LOB: "Inland Marine (Commercial)",
            Status: "Active",
            Expires: "11/22/2018"
        },
        {
            policyNumber: "WC-021340971-01",
            LOB: "Workers Compensation",
            Status: "Pending",
            Expires: "11/22/2018"
        },
        {
            policyNumber: "IMRC-345098098-00",
            LOB: "Inland Marine (Commercial)",
            Status: "Inactive",
            Expires: "11/22/2017"
        },
        {
            policyNumber: "AUTOB-123409809-01",
            LOB: "Auto (Commercial)",
            Status: "Inactive",
            Expires: "11/22/2017"
        },
        {
            policyNumber: "WC-021340971-01",
            LOB: "Workers Compensation",
            Status: "Inactive",
            Expires: "1/22/2018"
        },

    ]
};

function renderAddPolicies() {
    var addPoliciesTemplateScript = $("#add-policies-template").html();
    var addPoliciesTemplate = Handlebars.compile(addPoliciesTemplateScript);
    var addPoliciesData = addPoliciesTemplate(addPolicies);
    $('#add-policies').html(addPoliciesData);
}

function renderSelectedPolicies() {
    var selectedPoliciesTemplateScript = $("#policies-selected-template").html();
    var selectedPoliciesTemplate = Handlebars.compile(selectedPoliciesTemplateScript);
    var selectedPoliciesData = selectedPoliciesTemplate(selectedPolicies);
    $('#policies-selected').html(selectedPoliciesData);
}

function addSelectedPolicy(index) {
    selectedPolicies.selectedPolicies.push(addPolicies.addPolicies[index]);
}

function deleteSelectedPolicy(index) {
    selectedPolicies.selectedPolicies.splice(index, 1);
    renderSelectedPolicies();
}

function addPoliciesToMaster() {
    // $('.js-master-remarks-section').removeClass('hide-content');

    $('#updated-policies').collapse('show');
    $('#add-policies-modal').modal('hide');

    $('.js-master-policies').removeClass('hide-content');
    $('.js-master-lobs').removeClass('hide-content');

    renderSelectedPolicies();


    // var $certificateHoldersTable = $(".js-policies-table").eq(0).clone();
    // var $pagination = $(".js-pagination").eq(0).clone();
    //
    // $certificateHoldersTable.find(".js-policies-delete-action").show();
    // $certificateHoldersTable.find(".js-policies-checkbox").hide();

    $('.js-policies').removeClass('hide-content');
    $('.js-no-policies').addClass('hide-content');
    $('.js-policies .table tbody tr').addClass('highlight-row');
    // var selectedPoliciesString = JSON.stringify(selectedPolicies);
    // $('body').attr('selectedPolicies', selectedPoliciesString);
}


function addPolicy(index) {
}

function updateCertificateName(select) {
    var acordForm = $(select).find(':selected').val();
    localStorage.setItem('acord', acordForm);

    var certificateName = $(select).find(':selected').text() + " Certificate";
    $('.js-certificate-name').val(certificateName);
    $('.js-master-acord').html($(select).find(':selected').text());
    $('.js-master-title').html($('.js-certificate-name').val());


    $('.js-master-remarks').addClass('hide-content');
    $('.js-master-remarks-alert').addClass('hide-content');

    if (acordForm === 'acord23') {
        $('.js-master-remarks-alert').removeClass('hide-content');
        $('.js-vehicles-fields').removeClass('hide-content');
    }
    else if (acordForm === 'acord25') {
        $('.js-master-remarks-alert').removeClass('hide-content');
        $('.js-job-fields').removeClass('hide-content');
        $('.js-vehicles-fields').removeClass('hide-content');
    }
    else if (acordForm === 'acord28') {
        $('.js-master-remarks-alert').removeClass('hide-content');
        $('.js-property-fields').removeClass('hide-content');
    }
    else if (acordForm === 'acord29') {
        $('.js-master-remarks-alert').removeClass('hide-content');
        $('.js-property-fields').removeClass('hide-content');
    }
    else {
        $('.js-master-remarks').addClass('hide-content');
        $('.js-master-remarks-alert').addClass('hide-content');
    }
}

function deleteRow() {
    $(this).closest("tr").remove();
}

function saveSession() {
    localStorage.setItem('job-site',        $('#job-site').val());
    localStorage.setItem('job-number',      $('#job-number').val());
    localStorage.setItem('job-description', $('#job-site').val());
}

function deletePolicy() {
    $('.js-policies').addClass('hide-content');
    $('.js-no-policies').removeClass('hide-content');
}



function renderSelectedPolicies() {
    if (selectedPolicies) {
        var policiesTemplateScript = $("#policies-template").html();
        var policiesTemplate = Handlebars.compile(policiesTemplateScript);
        var policiesData = policiesTemplate(selectedPolicies);
        $('#policies-selected').html(policiesData);
    }
}



var selectedPolicies = {
    selectedPolicies: [
    ]
};

renderAddPolicies();
selectedPolicies.selectedPolicies.push(addPolicies.addPolicies);
renderSelectedPolicies();