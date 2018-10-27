function goToPreviousPage() {
	window.history.back();
}

$(function() {
	var $checkboxes = $("table input[type='checkbox']");

	$checkboxes.on("change", function() {
		var checked = false;

		$checkboxes.each(function() {
			if (this.checked) {
				checked = true;
			}
		});

		if (checked) {
			$(".js-disable-btn").prop("disabled", false);
			$(".js-disable-btn").removeClass("btn-disabled");
		} else {
			$(".js-disable-btn").prop("disabled", true);
			$(".js-disable-btn").addClass("btn-disabled");
		}
	});

	$checkboxes.eq(0).on("click", function() {
		var length = $checkboxes.length,
			checked = this.checked;

		$checkboxes.slice(1, length).each(function() {
			if (checked) {
				this.checked = true;
			} else {
				this.checked = false;
			}
		});
	});
});