function toggleMappingView() {
	$(".js-existing-mapping, .js-new-mapping").toggle();
}

$(function() {
	$('.taskSectionHeader').on('click', function() {
		$('.taskSectionHeader i').toggleClass('icon-chevron-down')
								 .toggleClass('icon-chevron-up');

		$('.task-list-content').toggle();
	});

	$('.fa-times').on('click', function() {
		$(this).closest('.row').hide();
	});
});