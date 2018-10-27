var wizard = {
    wizard: [
        {
            complete: false,
            active: false,
            label: "Statement Summary",
            route: "#/app/pages/commissions/statements/new/import/"
        },
        {
            complete: false,
            active: false,
            label: "Upload File",
            route: "#/app/pages/commissions/statements/new/import/upload/"
        },
        {
            complete: false,
            active: false,
            label: "Map Column Headers",
            route: "#/app/pages/commissions/statements/new/import/map/"
        },
        {
            complete: false,
            active: false,
            label: "Reviewed Imported Statement",
            route: "#/app/pages/commissions/statements/new/import/review/"
        },
    ]
};

$('.js-criteria-row-dropdown').hide();
$('.js-date-conditions').hide();
$('.js-agency-code').show();

function updateCriteriaRowDropdown() {
	var val = $(this).val(),
		$container = $(this).parents(".js-additional-criteria-inputs");

	$container.find(".js-criteria-row-dropdown").hide();
	$container.find(".js-regular-conditions").show();
	$container.find(".js-date-conditions").hide();

	if (val === "Policy Term") {
		$container.find(".js-new-renewal-dropdown").show();
	} else if (val === "Transaction") {
		$container.find(".js-transaction-dropdown").show();
	} else if (val === "LOB") {
		$container.find(".js-lob-dropdown").show();
	} else if (val === "State") {
		$container.find(".js-state-dropdown").show();
	} else if (val === "Lead Source") {
		$container.find(".js-lead-source-dropdown").show();
	} else if (val === "Master Company") {
		$container.find(".js-master-company-dropdown").show();
	} else if (val === "Billing Company") {
		$container.find(".js-billing-company-dropdown").show();
	} else if (val === "Writing Company") {
		$container.find(".js-writing-company-dropdown").show();
	} else if (val === "Policy Producer Code") {
		$container.find(".js-policy-producer-code-dropdown").show();
	} else if (val === "Agency Code") {
		$container.find(".js-agency-code").show();
	} else if (val === "Assigned To") {
		$container.find(".js-assigned-to").show();
	} else if (val === "Member Agency") {
		$container.find(".js-agency").show();
	} else if (val === "Policy Effective Date") {
		$container.find(".js-regular-conditions").hide();
		$container.find(".js-date-conditions").show();
		$container.find(".js-policy-effective-date-dropdown").show();
	}
}

function saveConditions() {
	var conditions = [];

	$(".criteriaRow:visible").each(function() {
		var conditionName = $(this).find(".js-condition-name").text();
		var typeofCondition = $(this).find(".js-typeof-condition .select2-selection__rendered").text();
		var conditionRestrictionName = $(this).find(".js-regular-conditions .select2-selection__rendered").text();
		var conditionValues = $(this).find(".select2-selection__choice").map(function(idx) {
			if (idx === 0) {
				return $(this).text().substr(1);
			} else {
				return " " + $(this).text().substr(1);
			}
		}).toArray();

		conditions.push({
			conditionName: conditionName,
			typeofCondition: typeofCondition,
			conditionRestrictionName: conditionRestrictionName,
			conditionValues: conditionValues
		});
	});

	localStorage.setItem("conditions", JSON.stringify(conditions));
}

function savePayees() {
	var payees = [];

	$(".criteriaRow:visible").each(function() {
		var payeeType = $(this).find(".js-payee-type .select2-selection__rendered").text();
		var payeeAmount = $(this).find(".js-payee-amount input:visible").val() + "%";
		var payeeTypeofPayment = $(this).find(".js-payee-typeof-payment .select2-selection__rendered").text();

		payees.push({
			payeeType: payeeType,
			payeeAmount: payeeAmount,
			payeeTypeofPayment: payeeTypeofPayment,
		});
	});

	payees.push({
		agencyPayee: true,
		payeeType: "Agency",
		payeeAmount: $(".js-agency-commission-input-total input").val() + "%",
		payeeTypeofPayment: "My Agency Commission (%A)",
	})

	localStorage.setItem("payees", JSON.stringify(payees));
}

function updateFirstCriteriaConditionName() {
	$(".criteriaRow").eq(1).find(".js-condition-name").text("If");
}

function initializeMultiselectInput() {
    $('.criteriaRow:visible select').select2();
}

function showDeleteConfirmationModal(title) {
	$(".js-confirmation-modal-title").text("Delete " + title);
	showConfirmationModal();
	$('.js-title').html(title);
	$criteriaToDelete = $(this).closest('.criteriaRow');
	if (title === 'Payee') {
		$('.add-payee').show();
	}
}

function deleteCriteria() {
	if ($criteriaToDelete.hasClass("js-rule")) {
		$criteriaToDelete.next().remove();
	}
	$criteriaToDelete.remove();
	updateFirstCriteriaConditionName();
	hideConfirmationModal();
}

function toggleDirectConflictAlert() {
	$(".js-direct-conflict-alert").toggle();
}

function toggleIndirectConflictAlert() {
	$(".js-indirect-conflict-alert").toggle();
}

function changePayeeUser() {
	var val = $(this).val(),
		$container = $(this).closest(".criteriaRow");

	$container.find(".js-assigned-to-user, .js-service-team-user, .js-agency-user, .js-assigned-policy-producer").hide();

	if (val === "Assigned To") {
		$container.find(".js-assigned-to-user").show();
	} else if (val === "Assigned Policy Producer") {
		$container.find(".js-assigned-policy-producer").show();
	} else if (val === "Service Team") {
		$container.find(".js-service-team-user").show();
	} else if (val === "Agency User") {
		$container.find(".js-agency-user").show();
	}
}

function changePayeePayAmount() {
	var val = $(this).val(),
		$container = $(this).closest(".criteriaRow");

	$container.find(".js-agency-commission-input, .js-written-premium-input, .js-flat-fee-input").hide();

    if (val === "Flat Fee ($)") {
        $container.find(".js-flat-fee-input").show();
    } else {
        $container.find(".js-agency-commission-input").show();
	}

	// if (val === "My Agency Commission (%A)") {
	//
	// } else if (val === "Written Premium (%P)") {
	// 	$container.find(".js-written-premium-input").show();
	// } else
}

function updatePayeeType() {
	var val = $(this).val(),
		$criteriaRow = $(this).closest(".criteriaRow"),
		$clone = $criteriaRow.clone();

	if (val === "Sagar" || val === "Jon Lamb") {
		$criteriaRow.css("position", "relative").animate({
			top: "-98"
		}, 500, function() {
			$criteriaRow.css("position", "static");
			$(".condition-list-external-payee").append($criteriaRow.remove());
		});
		$(".js-external-producers-message, .js-internal-producers-message").fadeIn(1000);
	}
}

function updateAgencyCommissionTotalValue() {
	var $inputs = $(".condition-list-payee .js-agency-commission-input input"),
		totalAgencyCommission = 0;

	$inputs.each(function() {
	 	totalAgencyCommission += +$(this).val();
	});

	if (totalAgencyCommission > 100) {
		$(".js-agency-commission-input-total").addClass("text-danger");
	} else {
		$(".js-agency-commission-input-total").removeClass("text-danger");
	}

	$(".js-agency-commission-input-total input").val(totalAgencyCommission);
}

$(function() {
	function toggleModal() {
		$('.saveDraftModalContainer').toggle();
	}

	function toggleHistoryModal() {
		$('.container-modal').toggle();
	}

	function toggleHighlight() {
		if (!$(this).hasClass('highlighted')) {
			$('i.highlighted').add($(this))
				  			  .toggleClass('highlighted');

			toggleTableOrCardView();
		}
	}

	function toggleTableOrCardView() {
		$('.table-view, .card-view').toggle();
	}

	var $saveDraftButton = $('.save-draft'),
		$closeButton = $('.saveDraftModal .action-icon'),
		$cancelButton = $('.modal-cancel-button'),
		$tableAndCardIcons = $('.icon-table, .icon-th-large'),
		$buttonHistoryModal = $('.button-history-modal'),
		$closeModal = $('.container-modal .icon-remove'),
		$alertClose = $('.alert-close'),
		$alertContainer = $('.alertContainer'),
		$addCriteriaButton = $('.add-criteria'),
		$addExternalPayee = $('.add-external-payee'),
		$addPayee = $('.add-payee'),
		$conditionListCriteria = $('.condition-list-criteria'),
		$conditionListExternalPayee = $('.condition-list-external-payee'),
		$conditionListPayee = $('.condition-list-payee'),
		$buttonTrash = $('.button-trash'),
		$criteriaRowOne = $('.criteriaRow').eq(0).clone(),
		$criteriaRowTwo = $('.condition-list-payee .criteriaRow').eq(0).clone();

	$saveDraftButton.add($closeButton)
					.add($cancelButton)
					.on('click', toggleModal);

	$tableAndCardIcons.on('click', toggleHighlight);

	$buttonHistoryModal.add($closeModal)
					   .on('click', toggleHistoryModal);

	$alertClose.on('click', function() {
		$alertContainer.hide();
	});

	$addCriteriaButton.on('click', function() {
		var $clone = $(".js-additional-criteria-inputs").eq(0).clone().show();
		$(".js-add-condition-alert").hide();
		$conditionListCriteria.append($clone);
		$clone.find("select").select2();
		updateFirstCriteriaConditionName();
	});

	// $addExternalPayee.on('click', function() {
	// 	var $clone = $criteriaRowTwo.clone();
	// 	$clone.find("select").select2();
	// 	$conditionListExternalPayee.append($clone);
	// });

	$addPayee.on('click', function() {
		// $(this).hide();
		var $clone = $criteriaRowTwo.clone();
		$clone.find("select").select2();
		$conditionListPayee.prepend($clone);
	});

	$("body").on("change", "select[multiple]", function() {
		var selectedChoicesLength = $(this).parent().find(".select2-selection__choice").length;
		var $container = $(this).closest(".criteriaRow");
		var currentValue = $container.find(".js-regular-conditions").find("select").val();

		if (currentValue === '3') {
			return;
		}

		if (selectedChoicesLength > 1) {
			$container.find(".js-regular-conditions").find("select").val(2).trigger("change");
		} else {
			$container.find(".js-regular-conditions").find("select").val(1).trigger("change");
		}
	});

	$('.wizard-step').each(function() {
		if ($(this).hasClass('active')) {
			return false;
		}
		else {
			$(this).find('.wizard-step-number').addClass('completed');
		}
	});

	initializeMultiselectInput();
	$('#assigned-to-tree-view').jstree();
});

var $criteriaToDelete;