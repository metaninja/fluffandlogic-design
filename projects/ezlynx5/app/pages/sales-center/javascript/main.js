function fillInData() {
    var steps = ['interview', 'pricing', 'presentation', 'decision', 'fulfillment', 'hold'],
        cardTemplateProducer = $('#card-template-producer').html(),
        cardTemplateManager = $('#card-template-manager').html(),
        templateProducer = Handlebars.compile(cardTemplateProducer),
        templateManager = Handlebars.compile(cardTemplateManager);

    steps.forEach(function(name) {
        var value = false;
        
        for (id in customerData[name]) {
            customerData[name][id].lob = customerData[name][id].lob.join(', ');
            customerData[name][id].document = (value === true) ? false : true;
            value = !value; 

            var html1 = templateProducer(customerData[name][id]),
                html2 = templateManager(customerData[name][id]);

            $('.card-view .card-view-producer .' + name + ' .container-cards').append(html1);
            $('.card-view .card-view-manager .' + name + ' .container-cards').append(html2);
            $('.card-view .card-view-manager .' + name + ' .container-cards').append(html2);
        }
    });
}

function togglePlusMinusImage() {
    if ($(this).hasClass("js-plus-img")) {
        $(this).toggleClass("js-plus-img");
        $(this).attr("src", "https://cdn.webcetera.com/CommonResources/EZLynx/EZLynxWeb/images/minus.gif");
    } else {
        $(this).toggleClass("js-plus-img");
        $(this).attr("src", "https://cdn.webcetera.com/CommonResources/EZLynx/EZLynxWeb/images/plus.gif");
    }
}

function toggleQuotesRow() {
    $(this).toggleClass("linearicon-chevron-down fa-chevron-up");
    $(".lob-quotes td").css("background", "rgba(89, 136, 207, 0.3)");
    $(".lob-quotes").toggle();
}

function changeDropdownOption() {
    var optionText = $(this).text();

    if (optionText === "Timeline View") {
        $(".js-timeline-view").show();
        $(".js-discussion-view").hide();
    } else {
        $(".js-timeline-view").hide();
        $(".js-discussion-view").show();
    }

    $(".activity-dropdown button").html(optionText + ' <b class="caret"></b>');
}

function toggleEmailModal() {
    $('.email-modal').toggle();
}

function toggleTextModal() {
    $('.text-modal').toggle();
}

function toggleAddQuoteModal(hideQuotes) {
    if (hideQuotes) {
        $(".current-quote-div").hide();
    } else {
        $(".current-quote-div").show();
    }
    $('#add-quote-modal').modal("toggle");
}

function toggleAllCheckboxes() {
    if (this.checked) {
        $("tbody input").prop("checked", true);
        toggleActionButton(true);
    } else {
        $("tbody input").prop("checked", false);
        toggleActionButton(false);
    }
}

function toggleActionButton(value) {
    if (value === true) {
        $('.table-view-action-button').find('.dropdown-toggle').removeClass('disabled');
    } else if ($("tbody input")[0].checked === false && $("tbody input")[1].checked === false) {
        $('.table-view-action-button').find('.dropdown-toggle').addClass('disabled');
    }
}


function showTabContent(name) {
    $('.tab-content').hide();

    $('.tab-' + name).show();
}

function showTableOrCardView(icon) {
    var $tableAndCarViews = $('.card-view, .table-view'),
        $cardViews = $('.card-views'),
        $actionButton = $('.table-view-action-button');

    if ($(icon).hasClass('table-view-icon')) {
        $tableAndCarViews.toggle();
        $cardViews.toggle();
        $actionButton.toggle();
    } else {
        $tableAndCarViews.toggle();
        $cardViews.toggle();
        $actionButton.toggle();
    }
}

function showProducerOrManagerCard(name) {
    $('.card-view-producer, .card-view-manager').toggle();
    $('.container-cards').perfectScrollbar('update');
}

function addCardsToContainer(container) {
    if ($(container).find('img').length === 0) {
        var $card = $(container).find('.card-sylo').eq(0),
            img = '<img src="https://cdn.webcetera.com/CommonResources/images/loadingBars.gif" width="16px" height="11px" title="Loading Indicator" alt="" ng-show="discussions.fetching">',
            numberOfCards = $(container).find('.card-sylo').length,
            $cardDivider = $('.card-divider').eq(0).clone().removeClass('hide-content');

        $cardDivider.find('span').text(numberOfCards + '-' + (numberOfCards + 5));

        $(container).append(img);

        setTimeout(function() {
            $(container).find('img').remove();

            $(container).append($cardDivider);

            for (var count = 1; count <= 5; count++) {
                $(container).append($card.clone());
            }
            $('.container-cards').perfectScrollbar('update');
        }, 1000);
    }
}

function toggleColumnDays(headerArrow) {
    if ($(headerArrow).hasClass("table-hold-view")) {
        $(".table-column-days").show();
    } else {
        $(".table-column-days").hide();
    }
}

function highlightTableViewArrow(arrow) {
    $('.header-arrow-highlight').toggleClass('header-arrow-highlight');

    $(arrow).toggleClass('header-arrow-highlight');

    $(".js-arrow-mouseover-event").trigger("mouseout");

    toggleColumnDays(arrow);
}

$(function() {
    var $tabs = $('.tabs'),
        $tableAndCardIcons = $('.table-view-icon, .card-view-icon');

    $tableAndCardIcons.on('click', function() {
        if (!($('i.highlighted')[0] === $(this)[0])) {
            $('i.highlighted').toggleClass('highlighted');
            $(this).toggleClass('highlighted');

            showTableOrCardView(this);
        }
    });

    $(".contact-regular, .contact-primary").on("click", function() {
        $(".contact-regular, .contact-primary").toggleClass("font-weight-bold");
        $(this).addClass("font-weight-bold");

        if ($(this).hasClass("contact-primary")) {
            $(".contact-regular-content").hide();
            $(".contact-primary-content").show();
        } else {
            $(".contact-regular-content").show();
            $(".contact-primary-content").hide();
        }
    });

    $('.container-cards').on('scroll', function() {
        if (($(this).scrollTop() + $(this).innerHeight() + 5) >= this.scrollHeight) {
            addCardsToContainer(this);
        }
    });

    $('.card-views .btn-link').on('click', function() {
        if (!($(this).hasClass('highlighted'))) {
            $('.btn-link.highlighted').toggleClass('highlighted');
            $(this).toggleClass('highlighted');

            showProducerOrManagerCard($(this).text());
        }
    });

    $('.container-cards').on('click', '.card-divider a', function() {
        var $container = $(this).closest('.container-cards');
        
        $container.animate({
            scrollTop: 0
        }, 1000);
    });

    $('.PageContent').on('click', '.vip-icon', function() {
        if ($(this).hasClass('vip')) {
            $(this).toggleClass('vip');
            $(this).css('background-position', '0 -110px');
        } else {
            $(this).toggleClass('vip');
            $(this).css('background-position', '0 -88px');
        }
    });

    $('.table-view').on('click', '.header-arrow, .header-arrow-reverse', function() {
        if (tableViewCheckboxesValue() === false) {
            toggleConfirmationModal();
            tableViewHighlightedArrow = this;
        } else {
            highlightTableViewArrow(this);
        }
    });

    $tabs.on('click', '.tab-link', function() {
        var tabName = $(this).text().toLowerCase().split(' ').join('-');
        
        $tabs.find('.active').removeClass('active');

        $(this).addClass('active');

        showTabContent(tabName);
    });

    $('.closeArrow').on('click', function() {
        $('#LayoutContainer').toggleClass('closed');
        $('.ui-layout-west form').toggle();
    });

    if ($('.card-view').is(':visible')) {
        fillInData();
    }

    $( ".sortable" ).sortable({
        connectWith: ".sortable",
        items: '.card-sylo',
        scroll: true,
        helper: "clone",
        appendTo: 'body',
        over: function(event, ui) {
            $(event.target).toggleClass('bg-grey200');
            ui.item.data('sortableItem').scrollParent = ui.placeholder.parent();
            ui.item.data('sortableItem').overflowOffset = ui.placeholder.parent().offset();
        },
        out: function(event, ui) {
            $(event.target).toggleClass('bg-grey200');
            $('.container-cards').perfectScrollbar('update');
        }
    }).disableSelection();

    // $('.container-cards').perfectScrollbar();

    // setTimeout(function() {
    //     $('.container-cards').perfectScrollbar('update');
    // }, 10);
});

var tableViewHighlightedArrow;