function toggleCardBody() {
	$(this).closest(".card").find(".card-block").eq(0).toggleClass("hide-content");
}

$(function() {
	$("#input-identity-theft")[0].focus();
});