function toggleAddTask() {
	$(this).toggleClass("note-icon-active");
	$(".js-add-task").toggle();
}

function toggleImportantTask() {
	$(this).toggleClass("btn-danger");
}