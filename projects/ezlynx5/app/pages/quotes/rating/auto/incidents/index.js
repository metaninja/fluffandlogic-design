var $itemToDelete;

function confirmationModal() {
    $("#confirmation-modal").modal("show");
}

function addAnAccidentRow() {
    if ($(".js-table-accidents").is(":visible")) {
       $(".js-table-accidents tbody").append($accidentRow.clone());
    } else {
        $(".js-table-accidents").removeClass("hide-content");
    }

    $(".js-table-accidents tbody tr").last().find("input")[0].focus();
}

function addAnViolationsRow() {
    if ($(".js-table-violations").is(":visible")) {
       $(".js-table-violations tbody").append($violationRow.clone());
    } else {
        $(".js-table-violations").removeClass("hide-content");
    }

    $(".js-table-violations tbody tr").last().find("input")[0].focus();
}

function addAnCompLossesRow() {
    if ($(".js-table-comp-losses").is(":visible")) {
       $(".js-table-comp-losses tbody").append($compLossRow.clone());
    } else {
        $(".js-table-comp-losses").removeClass("hide-content");
    }

    $(".js-table-comp-losses tbody tr").last().find("input")[0].focus();
}

function changeIcons($tableCells, value) {
    var addRow = '<a href="javascript:void(0)" class="js-add-row"><i class="fa fa-check-circle fa-2x green pointer mr-1" aria-hidden="true"></i></a>',
        cancelRow = '<a href="javascript:void(0)" class="js-cancel-row"><i class="fa fa-times-circle fa-2x red pointer" aria-hidden="true"></i></a>',
        editRow = '<a href="javascript:void(0)" class="js-edit-row"><i class="icon-pencil icon-large blue pointer mr-1" aria-hidden="true"></i></a>',
        deleteRow = '<a href="javascript:void(0)" class="js-delete-row"><i class="icon-trash icon-large red pointer" aria-hidden="true"></i></a>';

    if (value === 'edit icons') {
        $tableCells[($tableCells.length - 1)].innerHTML = addRow + cancelRow;
    } else {
        $tableCells[($tableCells.length - 1)].innerHTML = editRow + deleteRow;
    }
}

$(function() {
    $(".editable-table").on("click", ".js-edit-row", function() {
        var $tableCells = $(this).closest('tr').find('td');

        changeIcons($tableCells, 'edit icons');

        $tableCells.slice(0, ($tableCells.length - 2)).each(function() {
            var value = $(this).text();
            this.innerHTML = "<input type=text class=form-control value='" + value + "'>";
        });
    });

    $(".editable-table").on("click", ".js-add-row, .js-cancel-row", function() {
        var $tableCells = $(this).closest('tr').find('td');

        changeIcons($tableCells, 'save icons');

        $tableCells.slice(0, ($tableCells.length - 2)).each(function() {
            var $formElement = $(this).find('.form-control'),
                value = $formElement.val();

            this.innerHTML = value;
        });
    });

    $(".editable-table").on("click", ".js-delete-row", function() {
        $itemToDelete = $(this).closest('tr');
        confirmationModal();
    });

    $accidentRow = $(".js-table-accidents").find("tbody tr").eq(0).clone();
    $violationRow =  $(".js-table-violations").find("tbody tr").eq(0).clone();
    $compLossRow = $(".js-table-comp-losses").find("tbody tr").eq(0).clone();

    $(".js-add-an-accident-btn")[0].focus();
});

var $accidentRow, $violationRow, $compLossRow;