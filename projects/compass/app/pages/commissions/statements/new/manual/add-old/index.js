function togglePopover() {
	$(this).closest('.relative').find('.popover').toggle();
}

function toggleDropdown() {
	var $dropdownCollapsed = $(this).closest(".mt2").find(".dropdown-collapsed"),
		$dropdownExpanded = $(this).closest(".mt2").find(".dropdown-expanded");

	$dropdownCollapsed.add($dropdownExpanded).toggle();
}

function toggleTableRow() {
	$(this).toggleClass("linearicon-chevron-down linearicon-chevron-up");
	$(this).closest('tr').next().toggle();
}

function deleteAddCommissionRow() {
	$(this).closest('tr').removeClass("row-active");
	$(".js-add-commission-row").show();
	$(".js-add-commission-heading").show();
	$(".js-policy-info").hide();
    $(".js-policy-empty").hide();
	$(".js-search-input").val("");
	$(".js-service-team-rules").hide();
	$(".search-results-transactions").hide();

	deleteAllServiceRules();
}

function editRow() {
    $('.js-add-commission-heading').hide();
	$('.js-policy-info').show();
}



function deleteAllServiceRules() {
	$(".js-service-team-rule").each(function() {
		if (!$(this).hasClass("hide-content")) {
			$(this).remove();
		}
	});
}

function toggleSearchResults() {
	if (this.value === "") {
		$(".search-result").hide();
	} else {
		$(".search-result").show();
	}
}

function hideSearchResults() {
	$(".search-result").hide();
	$(".search-results-transactions").show();
}

function addCommissionRow() {
    $('.js-search-input').focus();
}

function addCommissionToRow() {
	if (location.hash.indexOf('initial') >= 0) {
		location.hash = "#/app/pages/commissions/statements/new/manual/add/index.html";
	}

	// var $tableRow = $("tr").eq(3).clone();
	// var $tableRowDropdown = $("tr").eq(4).clone();

	$(this).closest('tr').removeClass("row-active");
	// $tableRow.insertBefore(".js-add-commission-row");
	// $tableRowDropdown.insertBefore(".js-add-commission-row");

	deleteAddCommissionRow();
}

function addServiceTeamRule() {
	var $newRule = $(".js-service-team-rule").eq(0).clone().removeClass("hide-content");

	$(".js-service-team-rules").show();
	$newRule.insertBefore(".js-service-team-disabled-rule");
}

function deleteServiceRule() {
	$(this).closest(".js-service-team-rule").remove();
}

$(function() {
	var $firstCheckbox = $("table input[type='checkbox']").eq(0);

	$("table").on("change", "input[type='checkbox']", function() {
		var checked = false;

		$("table input[type='checkbox']").each(function() {
			if (this.checked) {
				checked = true;
			}
		});

		if (checked) {
			$(".js-disable-btn").prop("disabled", false);
			$(".js-disable-btn").removeClass("btn-disabled");
		} else {
			$(".js-disable-btn").prop("disabled", true);
			$(".js-disable-btn").addClass("btn-disabled");
		}
	});

	$firstCheckbox.on("click", function() {
		var length = $("table input[type='checkbox']").length,
			checked = this.checked;

		$("table input[type='checkbox']").slice(1, length).each(function() {
			if (checked) {
				this.checked = true;
			} else {
				this.checked = false;
			}
		});
	});

	$(".js-splits").on("change", function() {
		var value = this.value,
			$inputs = $(this).closest(".row").find("input");

		if (value === "default") {
			$inputs.each(function() {
				$(this).addClass("bg-gray300")
					   .prop("disabled", true)
					   .css("visibility", "visible");
			});
		} else if (value === "override") {
			$inputs.each(function() {
				$(this).removeClass("bg-gray300")
					   .prop("disabled", false)
					   .css("visibility", "visible");
			});
		} else {
			$inputs.css("visibility", "hidden");
		}
	});
});