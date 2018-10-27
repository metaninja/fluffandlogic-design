$(function() {
    var page = $(".ez-page-header").parent().data("page");

    if (page === "overview") {
        // $(".tab-link").eq(0).addClass("active");
    }
    else if (page === "policies") {
        $(".tab-link").eq(0).addClass("active");
    }
    else if (page === "commissions") {
        $(".tab-link").eq(1).addClass("active");
    }
    else if (page === "documents") {
        $(".tab-link").eq(2).addClass("active");
    }
});