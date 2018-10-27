$(function() {
    $("body").on("click", ".tabs .tab", function() {
        $(".tab-link.active").removeClass("active");
        $(this).find(".tab-link").addClass("active");

        var tabName = $(this).data("tab-name");

        $(".tab-content").addClass("hide-content");
        $(".js-" + tabName).removeClass("hide-content");
    });
});