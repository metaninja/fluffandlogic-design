var currentData = callNextList;

var lists = [callNextList, personalOnlyList, listOneList, commercialAutoList, import1List, import2List];

var $multipleAddresses = $(".js-multiple-addresses").clone();

var $previousSelectedProspectItem;

var perfectScrollbars = [];

var $phoneInputRow, $emailInputRow;

function addAdditionalPhoneRow() {
    $(this).closest(".row").find(".js-container-phone-list").append($phoneInputRow.clone());
}

function addAdditionalEmailRow() {
    var $container = $(this).closest(".js-email-container");

    $container.find(".js-container-email-list").append($emailInputRow.clone());
    var emailCount = $container.find(".js-email-input-row").length;

    if (emailCount === 2) {
        $container.find(".add-additional-input").hide();
    }
}

function showAddEmailButton() {
    $(this).closest(".js-email-container").find(".add-additional-input").show();
}

function updatePhoneType() {
    var val = $(this).val();

    if (val === "Work") {
        $(this).closest(".row").find(".js-phone-ext-input").show();
    } else {
        $(this).closest(".row").find(".js-phone-ext-input").hide();
    }
}

function deleteRow() {
    $(this).closest(".row").remove();
}

function scrollToTop() {
    var $container = $(this).closest('.prospecting-list-items-container');

    $container.animate({
        scrollTop: 0
    }, 1000);
}

function deleteProspectList() {
    var val = confirm("Are you sure?");

    if (val) {
        $(this).closest(".prospecting-list").remove();
        $(".prospecting-list").eq(0).click();
    }
}

function filterProspectingLists() {
    var val = $(this).val();

    $(".js-personal-list, .js-commercial-list").hide();

    if (val === "Personal") {
        $(".js-personal-list").show();
    } else if (val === "Commercial") {
        $(".js-commercial-list").show();
    } else {
        $(".js-personal-list, .js-commercial-list").show();
    }

    $(".prospecting-list").eq(0).click();
}

function saveSelectedUsersInLocalstorage() {
    var items = [$(".prospecting-list-item.selected-item")];
    var users = [];

    $(".prospecting-list-items-container:visible .prospecting-list-item input[type='checkbox']").each(function() {
        if (this.checked) {
            items.push($(this).parent());
        }
    });

    if (items.length > 1) {
        items.shift();
    }

    $(items).each(function() {
        var name = $(this).data("first-name") + " " + $(this).data("last-name");
        var email = $(this).data("email");
        var applicant = $(this).data("applicant");

        users.push({
            name: name,
            email: email,
            applicant: applicant
        });
    });
    
    localStorage.setItem('users', JSON.stringify(users));
}

function selectFirstItem() {
    $(".prospecting-list-items-container:visible .prospecting-list-item").eq(0).click();
}

function searchListForItems() {
    var val = $(this).val().toLowerCase(),
        $items = $(".prospecting-list-items-container:visible .prospecting-list-item");

    if (val === "") {
        $items.show();
    } else {
        $items.hide();

        $items.each(function() {
            var name = $(this).find(".applicant-name").text().toLowerCase();

            if (!!name.match(val)) {
                $(this).show();
            }
        });
    }
}

function toggleAllCheckboxes() {
    var checked = $(this)[0].checked,
        $listCheckboxes = $(".prospecting-list-items-container:visible .prospecting-list-item input[type='checkbox']");
    
    if (checked) {
        $listCheckboxes.each(function() {
            this.checked = true;
        });
        $listCheckboxes = $(".prospecting-list-items-container:visible .prospecting-list-item").addClass("js-item-to-move selected-items");
    } else {
        $listCheckboxes.each(function() {
            this.checked = false;
        });
        $listCheckboxes = $(".prospecting-list-items-container:visible .prospecting-list-item").removeClass("js-item-to-move selected-items");
    }

    checkSelectedItems();
}

function deleteSelectedItems() {
    var items = [$(".prospecting-list-item.selected-item")];
    $(".prospecting-list-items-container:visible .prospecting-list-item input[type='checkbox']").each(function() {
        if (this.checked) {
            items.push($(this).closest(".prospecting-list-item"));
        }
    });
    
    if (items.length > 1) {
        items.shift();
    }

    $(items).each(function() {
        $(this).remove();
    });

    updateNumberOfItemsInLists();
    selectFirstItem();
}

function moveSelectedApplicantsToCallNextList() {
    var items = [$(".prospecting-list-item.selected-item")],
        $container = $("#js-call-next-list");

    $(".prospecting-list-items-container:visible .prospecting-list-item input[type='checkbox']").each(function() {
        if (this.checked) {
            items.unshift($(this).closest(".prospecting-list-item"));
        }
    });

    if (items.length > 1) {
        items.pop();
    }

    $(items).each(function() {
        $container.prepend($(this).remove());
    });

    updateNumberOfItemsInLists();
    resetListItemDescription();
    selectFirstItem();
}

function createAndAppendTemplates(templateScript, data, container) {
    var source = $(templateScript).html();
    var template = Handlebars.compile(source);
    var html = template(data);

    $(container).append(html);
}

function resetListItemDescription() {
    $(".prospecting-list-item-description-container").html("");
}

function showEditMode() {
    var $item = $(".prospecting-list-item.selected-item"),
        data;

    data = {
        firstName: $item.data("first-name"),
        lastName: $item.data("last-name"),
        companyName: $item.data("company-name"),
        xDate: $item.data("x-date"),
        email: $item.data("email"),
        phone: $item.data("phone"),
        streetAddress: $item.data("street-address"),
        city: $item.data("city"),
        state: $item.data("state"),
        completed: $item.data("completed"),
        applicant: $item.data("applicant"),
        commercialApplicant: $item.data("commercial-applicant")
    };

    resetListItemDescription();

    if (data.commercialApplicant) {
        createAndAppendTemplates("#prospecting-list-item-commercial-edit-mode", data, ".prospecting-list-item-description-container");
    } else {
        createAndAppendTemplates("#prospecting-list-item-edit-mode", data, ".prospecting-list-item-description-container");
    }

    $multipleAddresses.removeClass("hide-content").clone().insertAfter($(".js-applicant-info"));
    initializeMultipleAddresses();

    if ($item.data("has-address")) {
        showAddresses();
    }

    updatePerfectScrollbar();
    $phoneInputRow = $(".js-phone-input-row").eq(0).clone();
    $emailInputRow = $(".js-email-input-row").eq(0).clone();
}

function showProspectingItemDetails() {
    var $item = $(".prospecting-list-item.selected-item"),
        data;

    data = {
        firstName: $item.data("first-name"),
        lastName: $item.data("last-name"),
        companyName: $item.data("company-name"),
        xDate: $item.data("x-date"),
        email: $item.data("email"),
        phone: $item.data("phone"),
        streetAddress: $item.data("street-address"),
        city: $item.data("city"),
        state: $item.data("state"),
        completed: $item.data("completed"),
        applicant: $item.data("applicant"),
        commercialApplicant: $item.data("commercial-applicant")
    };

    resetListItemDescription();

    if (data.commercialApplicant) {
        createAndAppendTemplates("#prospecting-list-item-commercial-description", data, ".prospecting-list-item-description-container");
    } else {
        createAndAppendTemplates("#prospecting-list-item-description", data, ".prospecting-list-item-description-container");
    }

    updatePerfectScrollbar();
}

function insertDataToAllLists() {
    createAndAppendTemplates("#prospecting-list-item", callNextList, "#js-call-next-list");
    createAndAppendTemplates("#prospecting-list-item", personalOnlyList, "#js-personal-only-list");
    createAndAppendTemplates("#prospecting-list-item", listOneList, "#js-list-one-list");
    createAndAppendTemplates("#prospecting-list-item", commercialAutoList, "#js-commercial-auto-list");
    createAndAppendTemplates("#prospecting-list-item", import1List, "#js-import1-list");
    createAndAppendTemplates("#prospecting-list-item", import2List, "#js-import2-list");

    onlyShowFirstTenItemsInList();

    initializePerfectScrollbar();
}

function onlyShowFirstTenItemsInList() {
    $(".prospecting-list-items-container").each(function() {
        $(this).find(".prospecting-list-item").each(function(index) {
            if (index > 9) {
                $(this).hide();
            }
        });
    });
}

function getListNameAndData() {
    var name = $(this).find(".prospecting-list-name").text(),
        container;

    if (name === "Call Next") {
        currentData = callNextList;
        container = "#js-call-next-list";
    } else if (name === "Personal Only") {
        currentData = personalOnlyList;
        container = "#js-personal-only-list";
    } else if (name === "List 1") {
        currentData = listOneList;
        container = "#js-list-one-list";
    } else if (name === "Commercial Auto") {
        currentData = commercialAutoList;
        container = "#js-commercial-auto-list";
    } else if (name === "Imported 11/22/2017") {
        currentData = import1List;
        container = "#js-import1-list";
    } else if (name === "Imported 11/28/2017") {
        currentData = import2List;
        container = "#js-import2-list";
    }

    $(".prospecting-list-items-container").hide();
    resetListItemDescription();
    $(container).show();
    checkSelectedItems();
    updatePerfectScrollbar();
}

function toggleSelectedClass() {
    $(this).closest(".prospecting-list-item").toggleClass("js-item-to-move selected-items");
}

function checkSelectedItems() {
    var count = 0;
    $(".prospecting-list-items-container:visible .prospecting-list-item input[type='checkbox']").each(function() {
        if (this.checked) {
            count++;
        }
    });
    
    if (count > 0 || $(".prospecting-list-item.selected-item").length !== 0) {
        $(".js-item-actions .btn").attr("disabled", false);
    } else {
        $(".js-item-actions .btn").attr("disabled", true);
    }
}

function updateNumberOfItemsInLists() {
    $(".prospecting-list-amount").each(function(idx) {
        var count = $(".prospecting-list-items-container").eq(idx).find(".prospecting-list-item").length;
        $(this).text(count);
    });
}

function markApplicantAsCompleted() {
    var completedIcon = '<i class="icon-ok-sign icon-large completed" aria-hidden="true"></i>';
    var $prospectItem = $(".prospecting-list-item.selected-item");

    $(this).parent().find(".icon-ok-sign").addClass("completed");

    if ($prospectItem.data("completed") !== true) {
        $prospectItem.attr("data-completed", true);
        $prospectItem.find(".applicant-name-container").append(completedIcon);
        $prospectItem.addClass("read");
    }
}

function addMoreItemsToList(container) {
    if ($(container).find('.loading-bar').length === 0 && $(container).find('.prospecting-list-item:hidden').length !== 0) {
        var loadingBar = '<img class="loading-bar" src="https://cdn.webcetera.com/CommonResources/images/loadingBars.gif" width="16px" height="11px" title="Loading Indicator" alt="" ng-show="discussions.fetching">',
            numberOfItems = $(container).find('.prospecting-list-item:visible').length,
            $cardDivider = $('.card-divider').eq(0).clone().removeClass('hide-content'),
            items = $(container).find('.prospecting-list-item:hidden').splice(0, 5);

        $cardDivider.find('span').text(numberOfItems + '-' + (numberOfItems + 5));

        $(container).append(loadingBar);

        setTimeout(function() {
            $(container).find('.loading-bar').remove();
            $cardDivider.insertBefore($(items).eq(0));
            $(items).show();
            updatePerfectScrollbar();
        }, 1000);
    }
}

function markProspectItemAsRead() {
    $previousSelectedProspectItem.addClass("read");
}

function updateLastTouchedDate() {
    var date = new Date(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        year = date.getFullYear(),
        newDate = month + "/" + day + "/" + year;

    $(this).find(".js-last-touched").text("Last touched " + newDate);
}

function initializePerfectScrollbar() {
    $(".prospecting-list-items-container, .prospecting-list-item-description-container").each(function() {
        perfectScrollbars.push(new PerfectScrollbar(this, {
            suppressScrollX: true
        }));
    });
}

function updatePerfectScrollbar() {
    perfectScrollbars.forEach(function(perfectScrollbar) {
        perfectScrollbar.update();
    });
}

$(function() {
    $("body").on("click", ".tabs .tab", function() {
        $(".tab-link.active").removeClass("active");
        $(this).find(".tab-link").addClass("active");

        var tabName = $(this).data("tab-name");

        $(".tab-content").hide();
        $(".js-" + tabName).show();
    });

    $('.prospecting-list-items-container').on('scroll', function() {
        if (($(this).scrollTop() + $(this).innerHeight()) >= this.scrollHeight) {
            addMoreItemsToList(this);
        }
    });

    $(".prospecting-list").on("click", function() {
        $(".prospecting-list.selected-item").removeClass("selected-item");
        $(this).addClass("selected-item");

        $(".prospecting-list-item.selected-item").removeClass("selected-item");

        getListNameAndData.call(this);
        // closeRightPanel();
        updateLastTouchedDate.call(this);
    });

    $("body").on("click", ".prospecting-list-item", function() {
        $previousSelectedProspectItem = $(".prospecting-list-item.selected-item");
        $previousSelectedProspectItem.removeClass("selected-item");
        
        $(this).addClass("selected-item");
        $(this).find(".applicant-name").removeClass("bold");

        if ($previousSelectedProspectItem.length !== 0) {
            markProspectItemAsRead();
        }

        showProspectingItemDetails();
        checkSelectedItems();
        // closeRightPanel();
    });

    $(".js-list-names-sortable").sortable({
        items: '.prospecting-list',
        scroll: true,
        appendTo: 'body'
    });

    $(".prospecting-list-items-container").sortable({
        items: '.prospecting-list-item',
        scroll: true,
        appendTo: 'body',
        cursorAt: {top: 0, left: 0},        
        start: function(_, info) {
            $(info.item).addClass("js-item-to-move");
            info.item.siblings(".js-item-to-move").appendTo(info.item);
        },
        stop: function(_, info) {
            $(info.item).each(function() {
                if (!$(this).find("input[type='checkbox']")[0].checked) {
                    $(info.item).removeClass("js-item-to-move");
                }
            });
            
            info.item.after(info.item.find("li"));
            $(".small-info-container").remove();
        },
        over: function(event, ui) {
            $(event.target).toggleClass('bg-grey200');
            ui.item.data('sortableItem').scrollParent = ui.placeholder.parent();
            ui.item.data('sortableItem').overflowOffset = ui.placeholder.parent().offset();
        },
        out: function(event, ui) {
            $(event.target).toggleClass('bg-grey200');
            // $('.container-cards').perfectScrollbar('update');
        },
        helper: function() {
            var movingItemsAmount = $(".js-item-to-move:visible").length || 1;
            return $("<span class='small-info-container'>" + movingItemsAmount + " item moving</span>");
        }
    });

    $(".prospecting-list").droppable({
        accept: ".prospecting-list-item",
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
            var containerId = $(event.target).data("id");
            var items = $(".prospecting-list-items-container:visible .js-item-to-move").remove();
            setTimeout(function() {
                $("#" + containerId).prepend(items);
                $(".small-info-container, .ui-sortable-placeholder").remove();
                updateNumberOfItemsInLists();
                // closeRightPanel();
            }, 10);
        }
    });

    insertDataToAllLists();
    updateNumberOfItemsInLists();
    $(".prospecting-list.selected-item").click();
    selectFirstItem();
});

