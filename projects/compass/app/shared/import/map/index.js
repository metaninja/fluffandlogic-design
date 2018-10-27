function toggleMappingView() {
	$(".js-existing-mapping, .js-new-mapping").toggle();
}

$(function() {
	$('.taskSectionHeader').on('click', function() {
		$('.taskSectionHeader i').toggleClass('linearicon-chevron-down')
								 .toggleClass('linearicon-chevron-up');

		$('.task-list-content').toggle();
	});

	$('.linearicon-cross2').on('click', function() {
		$(this).closest('.row').hide();
	});
});