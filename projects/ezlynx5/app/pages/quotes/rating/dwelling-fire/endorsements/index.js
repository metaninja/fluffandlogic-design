function toggleCardBody() {
	$(this).closest(".card").find(".card-block").eq(0).toggleClass("hide-content");
}

$(function() {
	$("#input-earthquake")[0].focus();
});