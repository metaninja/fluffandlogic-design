function toggleCallouts() {
	$(".js-valid-callouts, .js-invalid-callouts").toggle();
	changeButtonColors();
}

function changeButtonColors() {
	$(".js-mark-finalize-btn").toggleClass("btn-outline-primary");
	$(".js-finish-btn").toggleClass("btn-warning btn-success");
}