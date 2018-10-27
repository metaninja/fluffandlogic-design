function resubmitQuote() {
	var loadingBar = '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>',
		newMessage = '<span>6 Month Premium = $2277.00(Total Premium)</span>',
		$container = $(".js-resubmitted-quote-container");

	$container.html("");

	$container.html(loadingBar);

	setTimeout(function() {
		$container.html("");

		$container.html(newMessage);
	}, 1000);

	$("#resubmit-modal").modal("hide");
}

function showSafecoQuote() {
	$(".js-show-safeco-quote-link").hide();
	$(".js-safeco-quote, .js-show-additional-quotes-link").show();
}

function showAdditionalQuotes() {
	$(".js-show-additional-quotes-link").hide();
	$(".js-additional-quote").show();
}