var $itemToDelete;

function toggleApplyHomeCoverages() {
	var val = this.checked;
	$(".js-additional-option .js-home-coverages-input .form-control").attr("disabled", val);
}

function toggleApplyHomeDeductibles() {
	var val = this.checked;
	$(".js-additional-option .js-home-deductibles-input .form-control").attr("disabled", val);
}

function toggleApplyHomeDiscounts() {
	var val = this.checked;
	$(".js-additional-option .js-home-discounts-input input").attr("disabled", val);
}

function confirmationModal() {
    $("#confirmation-modal").modal("show");
}

function addAdditionalOption() {
	var $additionalOption = $(".js-additional-option.hide-content").eq(0),
		$additionalOptionClone = $additionalOption.clone().removeClass("hide-content");

	$additionalOptionClone.insertBefore($additionalOption);
	updateAdditionalOptions();
}

function deleteAdditionalOption() {
    $itemToDelete = $(this).closest(".custom-quote-scenario-column");
    confirmationModal();
}

function updateAdditionalOptions() {
	var $additionalOptions = $(".js-additional-option").not(".hide-content"),
		count = $additionalOptions.length;

	$additionalOptions.removeClass("striped-column");

	$additionalOptions.each(function(index) {
		$(this).find(".js-option-name").text("Option " + (index + 1));
		if (index % 2 === 0) {
			$(this).addClass("striped-column");
		}
	});

	if (count === 3) {
		$(".js-add-quote-scenario-option").hide();
	} else {
		$(".js-add-quote-scenario-option").show();
	}
}

$(function() {
    $("body").on("click", ".js-delete-button", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

	$('#confirmation-modal').on('hide.bs.modal', function() {
		updateAdditionalOptions();
	});

    $("#input-agent-input")[0].focus();
});

