var $itemToDelete;

function confirmationModal() {
    $("#confirmation-modal").modal("show");
}

function showDwellingAddressDropdown() {
	$(".js-add-dwelling-address-btn").addClass("hide-content");
	$(".js-dwelling-address-dropdown").removeClass("hide-content");
}

function hideDwellingAddressDropdown() {
	$(".js-dwelling-address-dropdown").addClass("hide-content");
	$(".js-add-dwelling-address-btn").removeClass("hide-content");
}

function showSaveTags() {
	var $tr = $(this).closest("tr");

	$tr.find(".js-edit-tags").hide();
	$tr.find(".js-save-tags").show();
}

function showEditTags() {
	var $tr = $(this).closest("tr");

	$tr.find(".js-save-tags").hide();
	$tr.find(".js-edit-tags").show();
}

function deleteLossRow() {
    $itemToDelete = $(this).closest('tr');
    confirmationModal();
}

function addALossRow() {
	var $containerLosses = $(".js-container-losses");

	if ($containerLosses.is(":visible")) {
		$(".js-table-losses").append($lossRow.clone());
	} else {
		$containerLosses.removeClass("hide-content");
	}

	$(".js-loss-row").last().find("input")[0].focus();

	updateNumberOfLosses();
}

function updateNumberOfLosses() {
	var totalLossesRows = $(".js-loss-row").length;

	$(".js-number-of-losses").text("Number of Losses " + totalLossesRows);
}

function updateMap() {
    var self = this;

    setTimeout(function() {
		var address = $(self).val() || 'a';
			encodedAddress = encodeURIComponent(address),
			src = "https://www.google.com/maps/embed/v1/place?key=" + googleMapApiKey + "&q=" + encodedAddress;
		
		$(".js-dwelling-address-map").prop("src", src);
    }, 50);
}

$(function() {
	$('#confirmation-modal').on('hide.bs.modal', function() {
		updateNumberOfLosses();
	});

	$(".js-save-tags").hide();

	$lossRow = $(".js-loss-row").clone();

	$(".js-add-dwelling-address-btn")[0].focus();

	var input = document.getElementById('input-dwelling-address');
	var autocomplete = new google.maps.places.Autocomplete(input);
});

var $lossRow;

var googleMapApiKey = "AIzaSyBW54QRY9jPjpkMqPfPM18eVLt_opuQK-Q";