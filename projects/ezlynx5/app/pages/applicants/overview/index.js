function toggleStickyNotes() {
    $(".sticky-widget-container").toggleClass("widget-collapsed");
}

$(function() {
    $(".sticky-note .fa-times").on("click", function() {
        $(this).closest(".sticky-note").remove();
    });

    $(".snapshot-icon").removeClass("hide-content");
});