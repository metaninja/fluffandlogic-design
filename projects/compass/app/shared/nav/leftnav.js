function updatePerfectScrollbar() {
    setTimeout(function() {
        perfectScrollbar.update();
    }, 350);
}

$(document).ready(function() {
    function collapseLeftNav() {
        $('.ez-global-leftnav').addClass('icon-only');
        collapseAllDropdowns();
    };

    function expandLeftNav() {
        $('.ez-global-leftnav').removeClass('icon-only');
    }

    function leftNavCollapsed() {
        return $('.ez-global-leftnav').hasClass("icon-only");
    }

    function scrollToTop() {
        $(".ez-global-leftnav").scrollTop(0);
    }

    function collapseAllDropdowns(currentLink) {
        $('.nav-parent-header').each(function() {
            if (this !== currentLink) {
                $(this).removeClass("open");
                $(this).next('.nav-children').slideUp(300);
            }
        });
    }

    function toggleDropdown(link) {
        $(link).toggleClass('open');
        $(link).next('.nav-children').slideToggle(300);
    }

    $('.ez-global-leftnav a').click(function() {
        if ($(this).hasClass('has-children')) {
            if (leftNavCollapsed()) {
                $(".bt-menu-trigger").click();
                setTimeout(function() {
                    toggleDropdown(this);
                }.bind(this), 100);
            } else {
                toggleDropdown(this);
            }
            
            updatePerfectScrollbar();
        }
    });

    $(".nav-parent > .nav-parent-header").on("click", function() {
        collapseAllDropdowns(this);
    });

    $(".nav-parent-header").on("click", function() {
        if (!$(this).hasClass('has-children')) {
            $(".nav-parent-header.active").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".nav-children-list a").on("click", function() {
        var $parentHeader = $(this).closest(".nav-parent").find(".nav-parent-header");

        $(".nav-parent-header.active").removeClass("active");
        $parentHeader.addClass("active");
    });

    perfectScrollbar = new PerfectScrollbar($(".ez-global-leftnav")[0], {
        suppressScrollX: true
    });

    $(".bt-menu-trigger").on("click", function() {
        $(this).toggleClass("bt-menu-open");

        if ($(this).hasClass("bt-menu-open")) {
            expandLeftNav();
        } else {
            collapseLeftNav()
            scrollToTop();
            updatePerfectScrollbar();
        }
    });

    $('.nav-parent-header').on("mouseleave", function() {
        $(this).tooltip("hide")
    });

    $('.ez-global-leftnav').on({
        focusout: function () {
            $(this).data('timer', setTimeout(function () {
                if (!leftNavCollapsed()) {
                    $(".bt-menu-trigger").click();
                }
            }.bind(this), 0));
        },
        focusin: function () {
            clearTimeout($(this).data('timer'));
        }
    });
});

var perfectScrollbar;
