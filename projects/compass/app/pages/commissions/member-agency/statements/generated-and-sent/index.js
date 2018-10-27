function toggleGenerateButtons() {
	$(".js-generate-btn1, .js-generate-btn2").toggle();
}

function updateMemberAgencyCommission() {
	var val = $(this).val() || 0;
	var $memberAgencyCommission = $(this).closest("tr").find(".js-memeber-agency-commission");
	var memberAgencyCommissionAmount = $memberAgencyCommission.data("commission");

	$memberAgencyCommission.text("$" + (memberAgencyCommissionAmount - val));
}
