function toggleCardBody() {
	$(this).closest(".card").find(".card-block").eq(0).toggleClass("hide-content");
}

$(function() {
    $(".js-heading-carrier-questions").hide();

    $("#input-expiration-date-current-policy")[0].focus();
});