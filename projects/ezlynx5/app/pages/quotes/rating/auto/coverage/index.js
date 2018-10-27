function toggleAllVehicless(label) {
	var input = $(label).find("input")[0];
	
	if (input.checked) {
		$(".js-vehicle-dropdown .ez-dropdown-content").collapse('show')
	} else {
		$(".js-vehicle-dropdown .ez-dropdown-content").collapse('hide')
	}
}

$(function() {
	$(".js-vehicle-dropdown").each(function() {
		var vehicleNumber = $(this).data("vehicle-number");

		$(this).find("h2").text("Vehicle " + vehicleNumber);
		$(this).find(".ez-dropdown-heading").attr("data-target", "#vehicle-" + vehicleNumber);
		$(this).find(".ez-dropdown-content").attr("id", "vehicle-" + vehicleNumber);
	});

	$(".js-toggle-all-vehicles-switch").on('click', function(event) {
		if($(event.target).is("input") ) {
			toggleAllVehicless(this);
		}
	});

	$("#input-coverage-bodily-injury")[0].focus();
});