function showCertificateMasterInfo() {
	var $certificateMasterInfo = $(".js-certificate-masters-info");

	if ($certificateMasterInfo.is(":visible")) {
		return;
	}

	$(".js-selected-certificate-master-content").html("").append($certificateMasterInfo.removeClass('hide-content'));

	$(".js-certificate-master-actions a").attr("disabled", false);
}

function showDistributionHistory() {
    $(".js-distribution-history").removeClass("hide-content");
    expandWorkspace();
}

var certificates = {
    certificates: [
        {
            interestHolder: "Bank of America",
            address: "123 6th St. Melbourne, FL 32904",
            dateSent: "11/22/2017 12:31pm",
            distributionMethod: "Email",
            destination: "mwinters2@bankofamerica.com",
            history: true
        },
        {
            interestHolder: "Bank of America",
            address: "4 Goldfield Rd. Honolulu, HI 96815",
            dateSent: "11/22/2017 12:31pm",
            distributionMethod: "Email",
            destination: "mwinters2@bankofamerica.com",
            history: true
        },
        {
            interestHolder: "Bank of America",
            address: "123 6th St. Melbourne, FL 32904",
            dateSent: "11/22/2017 12:31pm",
            distributionMethod: "Email",
            destination: "mwinters2@bankofamerica.com",
            history: true
        },
        {
            interestHolder: "Capital One",
            address: "71 Pilgrim Avenue, Chevy Chase, MD 20815",
            dateSent: "11/23/2017 2:11pm",
            distributionMethod: "Email",
            destination: "jane.smith@capitalone.com",
            history: true
        },
        {
            interestHolder: "City of Dallas",
            address: "44 Shirley Ave. West Chicago, IL 60185",
            dateSent: "11/23/2017 2:11pm",
            distributionMethod: "Postal Mail",
            destination: "1392 Frankford Rd, Suite 213, Dallas TX 75092",
            history: false
        },
        {
            interestHolder: "Collin College",
            address: "70 Bowman St. South Windsor, CT 06074",
            dateSent: "11/25/2017 5:12pm",
            distributionMethod: "Fax",
            destination: "2141222341@efax.com",
            history: true
        },
        {
            interestHolder: "SuperCut #31",
            address: "8133 E. Fremont Ave. Williamstown, NJ 08094",
            dateSent: "12/3/2017 2:11pm",
            distributionMethod: "Fax",
            destination: "9721452341@efax.com",
            history: true
        },
        {
            interestHolder: "Wachovia Bank",
            address: "828 Ocean St. Easley, SC 29640",
            dateSent: "11/23/2017 2:11pm",
            distributionMethod: "Client Center",
            destination: "--",
            history: true
        }
    ]
};

function renderCertificates(count) {
    var count = count || certificates.certificates.length;
    if (count > certificates.certificates.length) {
        count = certificates.certificates.length;
    }

    var certsList = { certificates: [] };
    for (var i=0; i<count; i++)
    {
        certsList.certificates.push(certificates.certificates[i]);
    }

    var certificatesTemplateScript = $("#certificates-template").html();
    var certificatesTemplate = Handlebars.compile(certificatesTemplateScript);
    var certificatesData = certificatesTemplate(certsList);
    $('#certificates').html(certificatesData);

}

renderCertificates();

