function workspaceollapsed() {
    return $('.ez-global-workspace').hasClass('hide-content');
}

function collapseWorkspace() {
    $('.ez-global-workspace').animate({
        right: -350
    }, 300, function() {
        $(this).addClass("hide-content");
    });
};

function expandWorkspace(workspace) {
    workspace = workspace || '.js-workspace-note';
    $('.js-workspace').addClass('hide-content');
    $(workspace).removeClass('hide-content');
    $('.ez-global-workspace').removeClass("hide-content").animate({
        right: 0
    }, 300);
}
    
$(document).ready(function() {
    $('.workspace-toggle-btn').click(function() {
        if (workspaceollapsed()) {
            $('.js-workspace').addClass('hide-content');
            $('.js-workspace-note').removeClass('hide-content');
            expandWorkspace();
        } else {
            collapseWorkspace();
        }
    });
});
