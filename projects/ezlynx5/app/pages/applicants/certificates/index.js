var tour = [
    {
        target: "#js-masters-existing",
        content: "All your Certificate Masters are now here.",
    },
    {
        target: "#tour-masters-search",
        content: "Search for existing masters or add a new one.",
    },
    {
        target: "#tour-pending-title",
        content: "Scroll down to here to see masters with policies pending renewal in the next 30-90 days.",
        container: "#tour-masters-list",
        scroll: 1060,
    },
    {
        target: "#tour-expired-title",
        content: "If a policy is expired on a master, scroll down here to find the master.",
        container: "#tour-masters-list",
        scroll: 1500,
    },
    {
        target: "#tour-certificates",
        content: "These are the certificate holders for this master and the last time you sent them certs.",
        container: "#tour-masters-list",
        scroll: 0,
    },
    {
        target: "#tour-history",
        content: "Click the clock icon to see the distribution history of  cert holder.",
    },
    {
        target: "#tour-actions",
        content: "Click the Action button to edit a cert holder's details, re-send them their certificate, and more.",
    },
    {
        target: "#tour-add-cert-holder",
        content: "You can quickly add a Cert Holder.",
    },
    {
        target: "#tour-copy-master",
        content: "To renew a master: <ul><li>- Click this button to create a copy of this master.</li><li>- Edit the ACORD form, policies, etc.</li></ul>",
    },
    {
        target: "#tour-add-cert-master",
        content: "<i class='linearicon-checkmark-circle linearicon-lg'></i><br><strong>GREAT!</strong><br> Start managing your certificates by clicking an existing certificate master, or creating a new one.",
        finish: true
    },
];

// ------------ INIT CERTIFICATES ------------
initCerts();
var tourComplete = false;
if (!tourComplete) {
    $('#welcome-modal').modal('show');
    // initTour();
}
// ------------ INIT CERTIFICATES ------------

function initTour() {
    for (var i=0; i<tour.length; i++) {
        var target = $(tour[i].target);
        var content = '<div class="row">' +
            '<div class="col-md-10">' +
            '<a href="javascript:void(0)" onclick="showTourStep(' + (i+1) + ')">' +
            '<div class="mb-2">' + tour[i].content + '</div>' +
            (tour[i].finish ? '' : 'Next &raquo;') +
            '</a>' +
            '</div>' +
            '<div class="col-md-2">' +
            '<a href="javascript:void(0)" onclick="finishTour(' + i + ')"><i class="linearicon-cross"></i></a>' +
            '</div>' +
            '</div>';

        target.popover({
            content: content,
            placement: 'top',
            trigger: 'manual',
            html: true,
            template: '<div class="tour popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        });
    }

    $(tour[0].target).popover('show');
    tourComplete = true;
}

function finishTour(current) {
    $(tour[current].target).popover('hide');
}

function showTourStep(step) {
    console.log(step);

    var current = step - 1;
    if (current >= 0) {
        $(tour[current].target).popover('hide');
    }

    if (step > tour.length) {
        tourComplete = true;
    }
    else {
        if (tour[step].container) {
            $(tour[step].container).scrollTop(tour[step].scroll);
        }
        $(tour[step].target).popover('show');
    }
}

function initCerts() {
    $('.ez-global-content').addClass('ez-three-pane');

    // if ($('body').attr('certCreated') === 'true') {
    if (localStorage.getItem('certCreated') === 'true') {
        $('.certificate-masters-list .master').removeClass('hide-content');
        $('.js-no-master-created').addClass('hide-content');
        $('.js-no-master').addClass('hide-content');
        $('.js-master-details').removeClass('hide-content');
        $('.master').addClass('active');
    }
    else {
        $('.certificate-masters-list .master').addClass('hide-content');
    }

    $(document).ready(function() {
        $('#masters-current .master:first-child').addClass('active');
    });
}

function newMaster() {
    localStorage.setItem('certCreated', 'true');
    $('body').attr('certCreated', 'true');
    location.hash = "#/app/pages/applicants/certificates/edit-certificate/pre-fill/";
}


function quickCertificateHolder() {
    $('#new-certificate-holders-modal').modal('show');
    $('.js-btn-save-and-distribute').removeClass('hide-content');
}