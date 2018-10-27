$(document).ready(function() {
    function changeIcons($tableCells, value) {
        if (value === 'save icons') {
            $tableCells[numberOfTableCells - 1].innerHTML = '<i class="icon-ok-sign icon-large green pointer" aria-hidden="true"></i>'; //fa fa-check-circle
            $tableCells[numberOfTableCells].innerHTML = '<i class="icon-remove-sign icon-large red pointer" aria-hidden="true"></i>';
        } else {
            $tableCells[numberOfTableCells - 1].innerHTML = '<i class="icon-pencil icon-large blue pointer" aria-hidden="true"></i>';
            $tableCells[numberOfTableCells].innerHTML = '<i class="icon-trash icon-large red pointer" aria-hidden="true"></i>';
        }
    }

    $(".editable-table").on("click", ".icon-pencil", function() {
        var $tableCells = $(this).closest('tr').find('td');

        changeIcons($tableCells, 'save icons');

        $tableCells.slice(0, numberOfTableCells - 1).each(function() {
            var value = $(this).text().trim();

            if ($(this).hasClass("js-error")) {
                this.innerHTML = "<input type='text' size='5' class='border-red' value=" + value + ">";
            }
            else if ($(this).hasClass("input-trans-type-code")) {
                this.innerHTML = "<input type='text' size='5' class='input-trans-type-code' value=" + value + ">";

                $('.input-trans-type-code').click(function() {
                    $('.trans-type-code-dropdown').show();

                    var dropdownLeft = $(this).offset().left;
                    var dropdownTop = $(this).offset().top + $(this).height();
                    $('.trans-type-code-dropdown').offset( { top: dropdownTop, left: dropdownLeft });

                    $('.trans-type-code-dropdown a').click(function() {
                        $('.input-trans-type-code').val($(this).find('.span4').text());
                        $('.trans-type-code-dropdown').hide();
                    })
                });
            }
            else {
                this.innerHTML = "<input type='text' class='form-control' value=" + value + ">";
            }

            $('[data-toggle="tooltip"]').popover();
        });
    });


    $(".editable-table").on("click", ".fa-check-circle, .fa-times-circle, .icon-ok-sign, .icon-remove-sign", function() {
        var $tableCells = $(this).closest('tr').find('td');

        changeIcons($tableCells, 'edit icons');

        $tableCells.slice(0, numberOfTableCells - 1).each(function() {
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

var numberOfTableCells = $(".editable-table tbody tr").eq(0).find("td").length - 1;
