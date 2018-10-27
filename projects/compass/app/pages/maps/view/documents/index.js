function showVersions() {
    $('.ez-global-workspace').toggleClass('workspace-hide');
    $('.member-agency-document-versions').show();
}

$('.btn-workspace-close').click(function() {
    $('.ez-global-workspace').addClass('workspace-hide');
    $('.member-agency-document-versions').hide();
});

//init
renderFiles('#files-template', '#files');