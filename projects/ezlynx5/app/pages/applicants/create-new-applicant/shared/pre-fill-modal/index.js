var duplicateApplicantsInfo = [
    {
        createdOn: "4/10/15",
        address: ["6363 Campus Circle Dr E", "Irving TX 75063"],
        assignedTo: "Commercial Download"
    },
    {
        createdOn: "5/12/17",
        address: ["123 6th St", "Coppell, TX 75061"],
        assignedTo: "Commercial Download"
    },
    {
        createdOn: "3/12/17",
        address: ["71 Pilgrim Avenue", "Plano TX 75057"],
        assignedTo: "Commercial Download"
    },
    {
        createdOn: "3/1/13",
        address: ["70 Bowman St", "Irving TX 75063"],
        assignedTo: "Commercial Download"
    },
    {
        createdOn: "4/7/16",
        address: ["514 S. Magnolia St", "Irving TX 75063"],
        assignedTo: "Commercial Download"
    }
];

function showDuplicateApplicants() {
    $(".js-show-existing-applicants-link").hide();
    clearCurrentDuplicateApplicants();

    var firstName = $("#pre-fill-first-name").val(),
        lastName = $("#pre-fill-last-name").val(),
        state = $("#pre-fill-state").val();

    if (firstName === "" || lastName === "" || state === "Select") {
        hideDuplicateApplicantsContainer();
        return;
    }

    $(".js-duplicate-applicants-container").removeClass("hide-content");
    createApplicantTemplatesAndListThem(firstName, lastName);
    showDuplicateApplicantsContainer();
}

function createApplicantTemplatesAndListThem(firstName, lastName) {
    var source = $("#duplicate-applicant").html();
    var template = Handlebars.compile(source);

    duplicateApplicantsInfo.forEach(function(obj) {
        var context = {
            name: firstName + " " + lastName,
            createdOn: obj.createdOn,
            addressStreet: obj.address[0],
            addressCityStateZip: obj.address[1],
            assignedTo: obj.assignedTo
        };
        
        $(".js-list-of-duplicate-applicants").append(template(context));
    });
}

function clearCurrentDuplicateApplicants() {
    $(".js-list-of-duplicate-applicants").html("");
}

function showDuplicateApplicantsContainer() {
    $(".js-duplicate-applicants-container").show();
}

function hideDuplicateApplicantsContainer() {
    $(".js-duplicate-applicants-container").hide(); 
}

function toggleShowExistingApplicantsLink() {
    $(".js-show-existing-applicants-link").toggle();
}

function goToAgreement() {
    $(".pre-fill-modal-applicant-info").addClass("hide-content");
    $(".pre-fill-modal-agreement").removeClass("hide-content");
}

function goToQAS() {
    $(".pre-fill-modal-drivers-and-vehicles-selection").addClass("hide-content");
    $(".pre-fill-modal-qas").removeClass("hide-content");
}

function goToDriversAndVehiclesSelection() {
    $(".pre-fill-modal-agreement").addClass("hide-content");
    $(".pre-fill-modal-drivers-and-vehicles-selection").removeClass("hide-content");
}

function completeAutoApplication() {
    localStorage.autoApplicationComplete = true;
    location.hash = "#/app/pages/quotes/rating/auto/finish";
}

function searchQasTemplates(event) {
    if (event.keyCode === 13) {
         $(".js-qas-template.selected-item").click();
    }

    var val = $(this).val().toLowerCase();

    $(".js-qas-template").removeClass("selected-item");

    $(".js-qas-template").each(function() {
        var name = $(this).text().toLowerCase();

        if (name.match(val)) {
            $(this).closest("li").show();
        } else {
            $(this).closest("li").hide();
        }
    });

    if (val === "") {
        return;
    }

    $(".js-qas-template:visible").eq(0).addClass("selected-item");
}
