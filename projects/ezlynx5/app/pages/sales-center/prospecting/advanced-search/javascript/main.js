function createAndAppendTemplates(templateScript, data, container) {
    var source = $(templateScript).html();
    var template = Handlebars.compile(source);
    var html = template(data);

    $(container).append(html);
}

function showSearchResults() {
    var val = $(this).val().toLowerCase();

    $(".js-applicant-info").hide();

    $(".js-applicant-name").each(function() {
        var name = $(this).text().toLowerCase();

        if (name.match(val)) {
            $(this).closest(".js-applicant-info").show();
        }
    });
}

function toggleAllCheckboxes() {
	var val = this.checked;

	$("tbody input").prop("checked", val);
	toggleActionButton();
}

function toggleActionButton() {
    if (checkAllCheckboxes()) {
        $('.btn.results-actions').removeClass('disabled')
                                 .attr("disabled", false);
    } else {
        $('.btn.results-actions').addClass('disabled')
                                 .attr("disabled", true);
    }
}

function checkAllCheckboxes() {
	var checked = false;

	$("tbody input[type='checkbox']").each(function() {
		if (this.checked) {
			checked = true;
		}
	});

	return checked;
}

function deleteItem() {
	$("tbody input[type='checkbox']").each(function() {
		if (this.checked) {
			$(this).closest("tr").remove();
		}
	});

	toggleActionButton();
}

function initializeMultiselectInput() {
    $('select[multiple]').select2();
}

$(function() {
    $('.closeArrow').on('click', function() {
        $('#LayoutContainer').toggleClass('closed');
        $('.ui-layout-west form').toggle();
    });

    createAndAppendTemplates("#applicant-info", callNextList, "tbody");

    initializeMultiselectInput();
});
