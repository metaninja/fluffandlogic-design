$('#send-email-modal').on('shown.bs.modal', function() {
    for (var i=0; i<selected.length; i++) {
        if (!files.files[selected[i]].isFolder) {
            $('#email-attachments').append('<option selected>' + files.files[selected[i]].Name + '</option>');
        }
    }

    $('#email-attachments').select2();
});

$('.section-email').removeClass('hide-content');
$('.section-documents').addClass('hide-content');

function initTabs() {
    var activeTab = $('.section-documents .tabs .tab-link.active').data('target');
    $(activeTab).removeClass('hide-content');
}

initTabs();

function toggleAddAttachments() {
    $('.section-email').toggleClass('hide-content');
    $('.section-documents').toggleClass('hide-content');

}


function selectTab(link) {
    var activeTab = $(link).data('target');
    $(link).parents('.tabs').find('.tab-link').removeClass('active');
    $(link).addClass('active');
    $('.tab-content').addClass('hide-content');
    $(activeTab).removeClass('hide-content');
}

