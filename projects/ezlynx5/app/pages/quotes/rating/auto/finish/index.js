function saveAndExit() {
    setTimeout(incompleteAutoApplication, 10);
}

$(function() {
	setTimeout(function() {
		if($(".js-application-incomplete").is(":visible")) {
			$(".js-submit-to-carriers-btn").addClass("disabled");
		} else {
			$(".js-submit-to-carriers-btn").removeClass("disabled");
		}
	}, 10);

    $(".container-incomplete-items a").on("click", function() {
        setTimeout(completeAutoApplication, 10);
    });

    $(".js-first-link")[0].focus();
});
