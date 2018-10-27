function showSnapshot() {
	$(".js-overview-snapshot").removeClass("snapshot-collapsed");
}

function toggleSnapshot() {
	$(".js-overview-snapshot").toggleClass("snapshot-collapsed");
}

function closeSnapshot() {
    $(".snapshot").addClass("snapshot-collapsed");
}

function showSnapshotPoliciesList() {
	$(".js-snapshot-policies-list").show();
}

function hideSnapshotPoliciesList() {
	$(".js-snapshot-policies-list").hide();
}

function closeCurrentPolicy() {
	$(".js-policy-info:visible").hide();
	showSnapshotPoliciesList();
}

function showAutoPolicy() {
	hideSnapshotPoliciesList();
	$(".js-auto-snapshot").show();
}

function showDwellingFirePolicy() {
	hideSnapshotPoliciesList();
	$(".js-dwelling-fire-snapshot").show();
}

function showHomePolicy() {
	hideSnapshotPoliciesList();
	$(".js-home-snapshot").show();
}

function expandAllSections() {
	var input = $(this)[0],
		$dropdonws = $(this).closest(".js-policy-info").find(".ez-dropdown-content");
	
	if (input.checked) {
		$dropdonws.collapse('show')
	} else {
		$dropdonws.collapse('hide')
	}
}
