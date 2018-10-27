// Code liberally borrowed from
// https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

$(document).ready(function() {

    function addFilter(node) {
        var label = node.attr('title') || 'Filter';

        $('.filters-applied').append('<span class="badge badge-success p-2 mr-1">' + label + ": " + node.val() + ' <i class="linearicon-cross filter-remove"></i></span>');

        $('.filter-remove').click(function() {
            $(this).parents('.badge').remove();
        });

        node.parents('.ez-page-sidebar .filters').removeClass('active');
    }

    $('.ez-page-sidebar .filters input').keyup(function(e) {
        if (e.keyCode === 13) {
            addFilter($(this));
        }
    });

    $('.ez-page-sidebar .filters select').change(function() {
        addFilter($(this));
    });

    $('.filter-link').click(function () {
        // var dropdown = $(this).data('target');
        // $(dropdown).toggleClass('active').focus();

        // var dropdownLinkOffset = $(this).offset();
        // var dropdownTop = dropdownLinkOffset.top + parseInt($(this).css('height'));
        // var dropdownLeft = dropdownLinkOffset.left;
        // $(dropdown).offset({top: dropdownTop, left: dropdownLeft});

        
        $(".ez-page-sidebar").toggleClass("ez-page-sidebar-collapsed");
    });

    $('.filter-close').click(function () {
        $(".ez-page-sidebar").addClass("ez-page-sidebar-collapsed");
    });

    $('.ez-page-sidebar .filters').on({
        focusout: function () {
            $(this).data('timer', setTimeout(function () {
                $(this).removeClass('active');
            }.bind(this), 0));
        },
        focusin: function () {
            clearTimeout($(this).data('timer'));
        }
    });

    $('.filter-link').on({
        focusout: function () {
            $(this.hash).data('timer', setTimeout(function () {
                $(this.hash).removeClass('active');
            }.bind(this), 0));
        },
        focusin: function () {
            clearTimeout($(this.hash).data('timer'));
        }
    });

});
