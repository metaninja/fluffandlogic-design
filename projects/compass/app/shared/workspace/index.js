function workspaceollapsed() {
    return $('.ez-global-workspace').hasClass('workspace-hide');
}

function collapseWorkspace() {
    $('.ez-global-workspace').addClass('workspace-hide');
    $(".ez-global-content").removeClass("workspace-pinned");
};

function expandWorkspace() {
    $('.ez-global-workspace').removeClass('workspace-hide');
}

function toggleWorkspacePinned() {
    $(".ez-global-content").toggleClass("workspace-pinned");
}

function showAddNoteSection() {
    $(".js-add-note-section").removeClass('hide-content');
}

function hideAddNoteSection() {
    setTimeout(function() {
        $(".js-add-note-section").addClass('hide-content');
    }, 300);
}

$(document).ready(function() {
    $('.workspace-toggle-btn').click(function() {
        if (workspaceollapsed()) {
            expandWorkspace();
            showAddNoteSection()
        } else {
            collapseWorkspace();
            hideAddNoteSection();
        }
    });

    $('.btn-workspace-close').click(function() {
        $('.ez-global-workspace').addClass('workspace-hide');
        $('.member-agency-document-versions').hide();
    });
});


