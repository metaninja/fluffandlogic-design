var $itemToDelete;

function confirmationModal() {
    $("#confirmation-modal").modal("show");
}

function createRandomId() {
	return (new Date).getTime();
}

function addAnAdditionalDriver() {
	var	randomId = createRandomId(),
		$newDriver = $additionalDriver.clone();

	$newDriver.find(".ez-dropdown-heading").attr("data-target", "#" + randomId);
	$newDriver.find(".ez-dropdown-content").attr("id", randomId);
	
	$(".js-container-additional-drivers").append($newDriver);

	$newDriver.find(".ez-dropdown-heading a").focus();

	addAnEventToNewDropdownContainer($newDriver.find(".ez-dropdown-content"));
}

function deleteAdditionalDriver() {
    $itemToDelete = $(this).closest(".js-additional-driver");
    confirmationModal();
}

function toggleAllDrivers() {
	var input = $(this)[0];
	
	if (input.checked) {
		$(".js-container-driver .ez-dropdown-content").collapse('show')
	} else {
		$(".js-container-driver .ez-dropdown-content").collapse('hide')
	}
}

function updateDriverName() {
	var $container = $(this).closest(".ez-dropdown-container"),
		firstName = $container.find(".js-input-first-name").val(),
		lastName = $container.find(".js-input-last-name").val(),
		$containerName = $container.find(".js-driver-name");

	$containerName.text(firstName + " " + lastName);
}

function addCoApplicantAsDriver() {
	$(".js-add-an-additional-driver-btn").click();

	var $coApplicantContainer = $(".ez-dropdown-container").eq(2);

	$coApplicantContainer.find(".dropdown-heading-content h3").text("Co-Applicant");

	$coApplicantContainer.find(".js-contact-list-modal-btn").hide();

	filloutDriverInfoForSavedDrivers($coApplicantContainer);
}

function addSavedDrivers() {
	var amount = Number(localStorage.driversToAdd);

	for (var i = 1; i <= amount; i++) {
		$(".js-add-an-additional-driver-btn").click();

		var $container = $(".ez-dropdown-container").eq(2 + i);

		filloutDriverInfoForSavedDrivers($container);
	}
}

function filloutPrimaryDriversInfo() {
	var $container = $(".ez-dropdown-container").eq(0);

	$container.find(".js-input-first-name").val(primaryDriverInfo.firstName);
	$container.find(".js-input-last-name").val(primaryDriverInfo.lastName);
	$container.find(".js-input-dob").val(primaryDriverInfo.dob);
	$container.find(".js-input-ssn").val(primaryDriverInfo.ssn);
	$container.find(".js-dl-number").val(primaryDriverInfo.dlNumber);
	$container.find(".js-defensive-driver-course-date").val(primaryDriverInfo.defensiveDriverCourseDate);

	updateDriverName.call($container);
}

function  hideAlerts() {
	$('.alert').addClass('hide-content');
}

function filloutDriverInfoForSavedDrivers($container) {
	$container.find(".js-input-first-name").val(additionalDriverInfo.firstName);
	$container.find(".js-input-last-name").val(additionalDriverInfo.lastName);
	$container.find(".js-input-dob").val(additionalDriverInfo.dob);
	$container.find(".js-input-ssn").val(additionalDriverInfo.ssn);
	$container.find(".js-dl-number").val(additionalDriverInfo.dlNumber);
	$container.find(".js-defensive-driver-course-date").val(additionalDriverInfo.defensiveDriverCourseDate);
	$container.find(".js-input-relationship").val(additionalDriverInfo.relationship);

	updateDriverName.call($container);
}

function filloutDriverInfo() {
	var $selectedDriver = $("input[type='radio']:checked");

	if ($selectedDriver.length === 0) {
		$('.js-driver-required').removeClass('hide-content');
	} else {
		var $tableData = $selectedDriver.closest("tr").find("td");

		additionalDriverInfo.firstName = $tableData.eq(1).text();
		additionalDriverInfo.lastName = $tableData.eq(2).text();
		additionalDriverInfo.relationship = $tableData.eq(3).text();

		$currentDriverToFillInfo.find(".js-input-first-name").val(additionalDriverInfo.firstName);
		$currentDriverToFillInfo.find(".js-input-last-name").val(additionalDriverInfo.lastName);
		$currentDriverToFillInfo.find(".js-input-dob").val(additionalDriverInfo.dob);
		$currentDriverToFillInfo.find(".js-input-ssn").val(additionalDriverInfo.ssn);
		$currentDriverToFillInfo.find(".js-dl-number").val(additionalDriverInfo.dlNumber);
		$currentDriverToFillInfo.find(".js-defensive-driver-course-date").val(additionalDriverInfo.defensiveDriverCourseDate);

		$currentDriverToFillInfo.find(".js-input-relationship").val(additionalDriverInfo.relationship);

		$("#list-of-contacts-modal").modal("hide");

		updateDriverName.call($currentDriverToFillInfo);
	}
}

$(function() {
    $additionalDriver = $(".js-additional-driver").eq(0).clone().removeClass("hide-content");

    $("body").on("click", ".js-contact-list-modal-btn", function(e) {
        e.preventDefault();
        e.stopPropagation();

        $("#list-of-contacts-modal").modal("show");

        $currentDriverToFillInfo = $(this).closest(".ez-dropdown-container");
    });

    $("body").on("click", ".js-delete-button", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    if (localStorage.coApplicant === "yes") {
    	filloutPrimaryDriversInfo();
    	addCoApplicantAsDriver();
    }

    if (localStorage.driversToAdd !== "0") {
    	addSavedDrivers();
    }

    $("#input-primary-driver-first-name")[0].focus();
});

var $additionalDriver;

var $currentDriverToFillInfo;

var primaryDriverInfo = {
	dob: "08/12/1984",
	ssn: "123-45-6789",
	dlNumber: "22524165",
	defensiveDriverCourseDate: "12/19/2013",
	"firstName": "Jason",
	"lastName": "Orth",
};


var additionalDriverInfo = {
	dob: "03/22/1982",
	ssn: "123-45-6789",
	dlNumber: "24564165",
	defensiveDriverCourseDate: "08/12/2015",
	"firstName": "Mary",
	"lastName": "Orth",
	"relationship": "Spouse"
};

