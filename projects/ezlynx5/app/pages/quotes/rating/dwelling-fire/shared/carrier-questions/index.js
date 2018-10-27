function toggleAllCarriers() {
	var input = $(this)[0];

	if (input.checked) {
		$(".js-container-carrier-questions").find(".ez-dropdown-content").collapse("show");
		$(".js-heading-info").hide();
	} else {
		$(".js-container-carrier-questions").find(".ez-dropdown-content").collapse("hide");
		$(".js-heading-info").show();
	}
}

function hideHeadingInfo() {
	$(this).find('span').toggle();
}