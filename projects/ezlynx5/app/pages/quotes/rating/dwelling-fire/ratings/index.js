function toggleAllCarriers() {
    var $allCarrierSwitch = $(this);

    if ($allCarrierSwitch.find("input")[0].checked) {
        $(".js-container-all-carriers").find("input").prop("checked", true);
    } else {
        $(".js-container-all-carriers").find("input").prop("checked", false);
    }
}

$(function() {
	$("#input-rating-state")[0].focus();
});