var currentMasters = {
    masters: [
        {
            Name: "Master AUTOC 17-18",
            AcordForm: "Certificate of Garage Insurance (ACORD 30)",
            LOB: "Property",
            Policies: "CPG 345098098-00",
            Valid: "11/25/2017",
            Expires: "11/28/2018",
            Label: "current",
            CertsCount: 8,
        },
        {
            Name: "Master GL 17-18",
            AcordForm: "Certificate of Liability Insurance (ACORD 25)",
            LOB: "General Liability",
            Policies: "GL 340989034-00",
            Valid: "11/25/2017",
            Expires: "11/28/2018",
            Label: "current",
            CertsCount: 5,
        },
        {
            Name: "Master PROP 18-19",
            AcordForm: "Certificate of Property Insurance (ACORD 24)",
            LOB: "Property",
            Policies: "PROP 123409809-01",
            Valid: "11/25/2018",
            Expires: "11/28/2019",
            Label: "current",
            CertsCount: 7,
        },
        {
            Name: "Master CPG 18-19",
            AcordForm: "Evidence of Commercial Property Insurance (ACORD 28)",
            LOB: "Package (Property, Auto-Commercial, GL)",
            Policies: "CPG 123409765-00",
            Valid: "11/25/2018",
            Expires: "11/28/2019",
            Label: "current",
            CertsCount: 6,
        },
        {
            Name: "Master Flood 17-18",
            AcordForm: "Evidence of Flood Insurance (ACORD 29)",
            LOB: "Flood",
            Policies: "TX 098354109-00",
            Valid: "11/25/2017",
            Expires: "11/28/2018",
            Label: "current",
            CertsCount: 3,
        },
        {
            Name: "Master Binder 18-19",
            AcordForm: "Insurance Binder  (ACORD 75)",
            LOB: "Binder",
            Policies: "021340971-01",
            Valid: "11/25/2018",
            Expires: "11/28/2019",
            Label: "current",
            CertsCount: 5,
        },
        {
            Name: "Master CPG 18-19",
            AcordForm: "Vehicle Or Equipment Certificate of Insurance (ACORD 23)",
            LOB: "Package (Property, Auto-Commercial, GL)",
            Policies: "CPG 021340971-01",
            Valid: "11/25/2018",
            Expires: "11/28/2019",
            Label: "current",
            CertsCount: 4,
        },

    ]
};

var pendingMasters = {
    masters: [
        {
            Name: "Master AUTO-P 18-19",
            AcordForm: "Vehicle Or Equipment Certificate of Insurance (ACORD 23)",
            LOB: "General Liability",
            Policies: "AUTOP 340989034-00",
            Valid: "6/15/2018",
            Expires: "6/18/2019",
            Label: "pending",
            CertsCount: 6,
        },
        {
            Name: "Master WC 18-19",
            AcordForm: "Certificate of Liability Insurance (ACORD 25)",
            LOB: "Property",
            Policies: "WC 340989034-00",
            Valid: "6/15/2018",
            Expires: "6/18/2019",
            Label: "pending",
            CertsCount: 7,
        },
        {
            Name: "Master AUTO-P 18-19",
            AcordForm: "Vehicle Or Equipment Certificate of Insurance (ACORD 23)",
            LOB: "Package (Property, Auto-Commercial, GL)",
            Policies: "AUTOP 340989034-00",
            Valid: "6/15/2018",
            Expires: "6/18/2019",
            Label: "pending",
            CertsCount: 3,
        },
    ]
};

var expiredMasters = {
    masters: [
        {
            Name: "Master AUTOC 16-17",
            AcordForm: "Certificate of Garage Insurance   (ACORD 30))",
            LOB: "General Liability",
            Policies: "CPG 345098098-00",
            Valid: "11/25/2016",
            Expires: "11/28/2017",
            Label: "expired",
            Expired: true,
            CertsCount: 7,
        },
        {
            Name: "Master GL 16-17",
            AcordForm: "Certificate of Liability Insurance   (ACORD 25))",
            LOB: "Inland Marine",
            Policies: "IMRC 340989034-00",
            Valid: "11/25/2016",
            Expires: "11/28/2017",
            Label: "expired",
            Expired: true,
            CertsCount: 5,
        },
        {
            Name: "Master PROP 16-17",
            AcordForm: "Certificate of Property Insurance (ACORD 24)",
            LOB: "Property",
            Policies: "PROP 123409809-01",
            Valid: "11/25/2016",
            Expires: "11/28/2017",
            Label: "expired",
            Expired: true,
            CertsCount: 4,
        },
        {
            Name: "Master CPG 16-17",
            AcordForm: "Evidence of Commercial Property Insurance (ACORD 28)",
            LOB: "Package (Property, Auto-Commercial, GL)",
            Policies: "CPG 123409765-00",
            Valid: "11/25/2016",
            Expires: "11/28/2017",
            Label: "expired",
            Expired: true,
            CertsCount: 7,
        },
        {
            Name: "Master Flood 16-17",
            AcordForm: "Evidence of Flood Insurance (ACORD 29)",
            LOB: "Flood",
            Policies: "TX 098354109-00",
            Valid: "11/25/2016",
            Expires: "11/28/2017",
            Label: "expired",
            Expired: true,
            CertsCount: 5,
        },
        {
            Name: "Master Binder 16-17",
            AcordForm: "Insurance Binder (ACORD 75)",
            LOB: "Binder",
            Policies: "021340971-01",
            Valid: "11/25/2016",
            Expires: "11/28/2017",
            Label: "expired",
            Expired: true,
            CertsCount: 8,
        },
        {
            Name: "Master CPG 16-17",
            AcordForm: "Vehicle Or Equipment Certificate of Insurance (ACORD 23)",
            LOB: "Package (Property, Auto-Commercial, GL)",
            Policies: "CPG 021340971-01",
            Valid: "11/25/2016",
            Expires: "11/28/2017",
            Label: "expired",
            Expired: true,
            CertsCount: 4,
        },
    ]
};

function renderMasters(source, destination) {
    var mastersTemplateScript = $("#masters-template").html();
    var mastersTemplate = Handlebars.compile(mastersTemplateScript);
    var mastersData = mastersTemplate(source);
    $(destination).html(mastersData);
}


function showMasterDetails(link, label, index) {
    $(link).parents('.certificate-masters-list').find('.master').removeClass('active');
    $(link).addClass('active');
    $('.js-no-master').addClass('hide-content');
    $('.js-master-details').removeClass('hide-content');

    var selectedMaster = {};
    switch(label.trim().toLowerCase()) {
        case 'current': selectedMaster = currentMasters.masters[index];
                        break;
        case 'pending': selectedMaster = pendingMasters.masters[index];
                        break;
        case 'expired': selectedMaster = expiredMasters.masters[index];
                        break;
        default: console.log('Error');
    }


    renderCertificates(selectedMaster.CertsCount);

    $('.js-cert-name').html(selectedMaster.Name);
    $('.js-cert-policy').html(selectedMaster.Policies);
    $('.js-cert-lob').html(selectedMaster.LOB);
    $('.js-cert-date-valid').html(selectedMaster.Valid);
    $('.js-cert-date-expires').html(selectedMaster.Expires);
    if (selectedMaster.Expired) {
        $('.js-cert-policy-expired').removeClass('hide-content');
    } else {
        $('.js-cert-policy-expired').addClass('hide-content');
    }

}

var searchResultsCurrent = { masters: [] };
var searchResultsPending = { masters: [] };
var searchResultsExpired = { masters: [] };

function isMatch(searchTerm, master) {
    searchTerm = searchTerm.toLowerCase();

    if (master.Name.toLowerCase().indexOf(searchTerm) >= 0 ||
        master.AcordForm.toLowerCase().indexOf(searchTerm) >= 0 ||
        master.LOB.toLowerCase().indexOf(searchTerm) >= 0 ||
        master.Policies.toLowerCase().indexOf(searchTerm) >= 0 ||
        master.Label.toLowerCase().indexOf(searchTerm) >= 0
    ) {
        return true;
    } else {
        return false;
    }
}

function searchMasters(input, e) {
    var searchResultsCurrent = { masters: [] };
    var searchResultsPending = { masters: [] };
    var searchResultsExpired = { masters: [] };

    if (e.keyCode === 13) {
        var searchTerm = $(input).val();

        if (searchTerm === "") {
            $('#js-masters-existing').removeClass('hide-content');
            $('#js-masters-search-results').addClass('hide-content');
            $('#js-masters-no-results').addClass('hide-content');
        }

        else {
            for (var i=0; i<currentMasters.masters.length; i++) {
                if (isMatch(searchTerm, currentMasters.masters[i])) {
                    searchResultsCurrent.masters.push(currentMasters.masters[i]);
                }
            }

            for (var i=0; i<pendingMasters.masters.length; i++) {
                if (isMatch(searchTerm, pendingMasters.masters[i])) {
                    searchResultsPending.masters.push(pendingMasters.masters[i]);
                }
            }

            for (var i=0; i<expiredMasters.masters.length; i++) {
                if (isMatch(searchTerm, expiredMasters.masters[i])) {
                    searchResultsExpired.masters.push(expiredMasters.masters[i]);
                }
            }

            if (searchResultsCurrent.masters.length > 0 ||
                searchResultsPending.masters.length > 0 ||
                searchResultsExpired.masters.length > 0)
            {
                $('#js-masters-existing').addClass('hide-content');
                $('#js-masters-search-results').removeClass('hide-content');
                $('#js-masters-no-results').addClass('hide-content');

                renderMasters(searchResultsCurrent, '#masters-current-search');
                renderMasters(searchResultsPending, '#masters-pending-search');
                renderMasters(searchResultsExpired, '#masters-expired-search');
            } else {
                $('#js-masters-existing').addClass('hide-content');
                $('#js-masters-search-results').addClass('hide-content');
                $('#js-masters-no-results').removeClass('hide-content');
            }
        }
    }
}

renderMasters(currentMasters, '#masters-current');
renderMasters(pendingMasters, '#masters-pending');
renderMasters(expiredMasters, '#masters-expired');
