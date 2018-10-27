var $itemToDelete;

function confirmationModal() {
    $("#confirmation-modal").modal("show");
}

function createRandomId() {
	return (new Date).getTime();
}

function addAnAdditionalVehicle() {
	var $newVehicle = $(".js-additional-vehicle").eq(0).clone().removeClass("hide-content"),
		randomId = createRandomId();

	$newVehicle.find(".ez-dropdown-heading").attr("data-target", "#" + randomId);
	$newVehicle.find(".ez-dropdown-content").attr("id", randomId);
	
	$(".js-container-additional-vehicles").append($newVehicle);

	$newVehicle.find(".ez-dropdown-heading a").focus();

	addAnEventToNewDropdownContainer($newVehicle.find(".ez-dropdown-content"));

	updateVehicleNames();
}

function deleteAdditionalVehicle() {
    $itemToDelete = $(this).closest(".js-additional-vehicle");
    confirmationModal();
}

function toggleAllVehicles() {
	var input = $(this)[0];
	
	if (input.checked) {
		$(".js-container-vehicle .ez-dropdown-content").collapse('show');
	} else {
		$(".js-container-vehicle .ez-dropdown-content").collapse('hide');
	}
}

function updateVehicleNames() {
	$(".js-additional-vehicle").slice(1).each(function(index) {
		$(this).find("h3").text("Vehicle " + (index + 2));
	});
}

function updateVehicleName() {
	var $row = $(this).closest(".row"),
		year = $row.find(".js-vehicle-year").val(),
		make = $row.find(".js-vehicle-make").val(),
		model = $row.find(".js-vehicle-model").val(),
		subModel = $row.find(".js-vehicle-sub-model").val(),
		$containerName = $(this).closest(".ez-dropdown-container").find(".js-vehicle-name");

	$containerName.text(year + " " + make + " " + model + " " + subModel);
}

function toggleCarImage() {
	var vinNumber = $(this).val(),
		$carImage = $(this).closest(".row").find(".car-image");

	if (vinNumber.length >= 10) {
		$carImage.removeClass("hide-content");
	} else {
		$carImage.addClass("hide-content");
	}
}

function updateMap() {
    var self = this;

    setTimeout(function() {
		var address = $(self).val() || 'a';
			encodedAddress = encodeURIComponent(address),
			src = "https://www.google.com/maps/embed/v1/place?key=" + googleMapApiKey + "&q=" + encodedAddress;

		$(".js-alternate-garage-map").prop("src", src);
    }, 50);
}

function hideAlternateGarageAddressDropdown() {
    $(".js-add-alternate-garage-address-btn").removeClass("hide-content");
    $(".js-alternate-garage-address-dropdown").addClass("hide-content");
}

function showAlternateGarageAddressDropdown() {
    $("#input-alternate-garage-address-differs").prop('checked', true);
    $(".js-add-alternate-garage-address-btn").addClass("hide-content");
    $(".js-alternate-garage-address-dropdown").removeClass("hide-content");
}

$(function() {
    $("body").on("click", ".js-delete-button", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $("#input-vehicle-vin")[0].focus();

	var input = document.getElementById('input-alternate-garage-address');
	var autocomplete = new google.maps.places.Autocomplete(input);

	if (localStorage.alternateGarageAddress !== "") {
		var $input = $('#input-alternate-garage-address');
		
		$input.val(localStorage.alternateGarageAddress);
		updateMap.call($input)
	}
});

var googleMapApiKey = "AIzaSyBW54QRY9jPjpkMqPfPM18eVLt_opuQK-Q";