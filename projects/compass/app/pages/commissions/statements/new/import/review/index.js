$(document).ready(function() {
    function changeIcons($tableCells, value) {
        if (value === 'save icons') {
            $tableCells[13].innerHTML = '<i class="linearicon-checkmark-circle linearicon-2x green pointer" aria-hidden="true"></i>';
            $tableCells[14].innerHTML = '<i class="linearicon-cross-circle linearicon-lg red pointer" aria-hidden="true"></i>';
        } else {
            $tableCells[13].innerHTML = '<i class="linearicon-pencil linearicon-lg blue pointer visibility-hidden" aria-hidden="true"></i>';
            $tableCells[14].innerHTML = '<i class="linearicon-trash2 linearicon-lg red pointer visibility-hidden" aria-hidden="true"></i>';
        }
    }

    $(".editable-table").on("click", ".icon-pencil", function() {
        var $tableCells = $(this).closest('tr').find('td');

        changeIcons($tableCells, 'save icons');

        $tableCells.slice(0, 13).each(function() {
            var value = $(this).text().trim();

            if ($(this).hasClass("js-error")) {
                this.innerHTML = "<input type='text' size='5' class='border-red' value=" + value + ">";
            } else {
                this.innerHTML = "<input type='text' size='5' value=" + value + ">";
            }

        });
    });

    $(".editable-table").on("click", ".linearicon-checkmark-circle, .linearicon-cross-circle", function() {
        var $tableCells = $(this).closest('tr').find('td');

        changeIcons($tableCells, 'edit icons');

        $tableCells.slice(0, 13).each(function() {
            var value = $(this).find('input').val();

            if ($(this).hasClass("js-error")) {
                this.innerHTML = '<span class="red bold" data-toggle="tooltip" data-placement="bottom" title="LOB Subcode is limited to 5 chars.">' + value + '</span>';
            } else {
                this.innerHTML = value;
            }
        });
    });

    $(".editable-table").on("click", ".icon-trash", function() {
        var $tableRow = $(this).closest('tr');

        $tableRow.remove();
    });

    $(".js-save-draft").hide();
});
