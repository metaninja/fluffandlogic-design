var $itemToDelete;

function confirmationModal() {
    $("#confirmation-modal").modal("show");
}

function calcDateDifference(input) {
    var date1 = new Date($(input).val());
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    var months = Math.floor(diffDays / 30);
    var years = Math.floor(months / 12);
    var $timeDifferenceOutputContainer = $(input).closest(".row").find(".js-time-difference");

    if (diffDays < 30) {
        if (diffDays === 1) {
            $timeDifferenceOutputContainer.text(diffDays + " day at this address");
        } else {
            $timeDifferenceOutputContainer.text(diffDays + " days at this address");
        }
    } else if (diffDays < 365) {
        if (months === 1) {
            $timeDifferenceOutputContainer.text(months + " month at this address");
        } else {
            $timeDifferenceOutputContainer.text(months + " months at this address");
        }
    } else if (diffDays > 365) {
        var leftoverMonths = Math.round(diffDays / 30) % 12;

        var monthString =  (leftoverMonths === 0) ? "" : leftoverMonths + (leftoverMonths === 1 ? " month" : " months");

        if (years === 1) {
            $timeDifferenceOutputContainer.text(years + " year " + monthString + " at this address");
        } else {
            $timeDifferenceOutputContainer.text(years + " years " + monthString + " at this address");
        }
    }
}

function addAdditionalCommercialContact() {
    var $container = $(".js-additional-commercial-applicant-contacts-container"),
        $newContact,
        randomId = createRandomId();

    if ($container.children().length === 0) {
        var $secondaryContact = $(".js-commercial-applicant-secondary-contact").removeClass("hide-content");

        $newContact = $secondaryContact;

        $container.append($secondaryContact);
    } else {
        var $additionalContact = $(".js-commercial-applicant-additional-contact").eq(0).clone().removeClass("hide-content");

        $newContact = $additionalContact;

        $additionalContact.find(".ez-dropdown-heading").attr("data-target", "#" + randomId);
        $additionalContact.find(".ez-dropdown-content").attr("id", randomId);

        $container.append($additionalContact);

        bindAddressInputToGoogleApi();
    }

    $(".js-commercial-applicant-page .ez-dropdown-content").collapse('hide');

    $newContact.find(".ez-dropdown-heading a").focus();

    addAnEventToNewDropdownContainer($newContact.find(".ez-dropdown-content"));

    scrollToTopOfThePage();
}

function addAdditionalPhoneRow() {
    $(this).closest(".row").find(".js-container-phone-list").append($phoneInputRow.clone());
}

function addAdditionalAddressRow() {
    $(this).closest(".row").find(".js-container-address-list").append($addressInputRow.clone());

    bindAddressInputToGoogleApi();
}

function addAdditionalDbaRow() {
    var $dbaRow = $(".js-dba-row").eq(0).clone();

    $(".js-container-dba-list").append($dbaRow);

    countDbaRows();
}

function countDbaRows() {
    var length = $(".js-dba-row").length;

    if (length > 1) {
        $(".js-dba-delete-button").show();
    } else {
        $(".js-dba-delete-button").hide();
    }
}

function addAdditionalEmailRow() {
    var $container = $(this).closest(".js-email-container");

    $container.find(".js-container-email-list").append($emailInputRow.clone());
    var emailCount = $container.find(".js-email-input-row").length;

    if (emailCount === 2) {
        $container.find(".add-additional-input").hide();
    }
}

function bindAddressInputToGoogleApi() {
    var $inputs = $(".js-address-input");

    $inputs.each(function() {
        var autocomplete = new google.maps.places.Autocomplete(this);
    });
}

function showAddEmailButton() {
    $(this).closest(".js-email-container").find(".add-additional-input").show();
}

function updatePhoneType() {
    var val = $(this).val();

    if (val === "Work") {
        $(this).closest(".row").find(".js-phone-ext-input").show();
    } else {
        $(this).closest(".row").find(".js-phone-ext-input").hide();
    }
}

function scrollToTopOfThePage() {
    $('.ez-main-content').animate({
        scrollTop: 0,
    });
}

function createRandomId() {
    return (new Date).getTime();
}


function deleteAdditionalApplicant() {
    $itemToDelete = $(this).closest(".js-additional-applicant, .js-commercial-applicant-additional-contact");
    confirmationModal();
}

function updateAdditionalContactTitle() {
    var newTitle = $(this).val(),
        $container = $(this).closest(".ez-dropdown-container");

    if (!$container.hasClass("js-co-applicant")) {
        $container.find(".js-contact-title").text(newTitle);
    }
}

function showTopNavAndSidebar() {
    $(".tabs, .js-applicant-sidebar").show();
}

function deleteRow() {
    $(this).closest(".row").remove();
}

function updateBusinesstName() {
    var businessName = $(this).val();

    $(".js-business-name").text(businessName);
}

function updateApplicantName() {
    var firstName = applicantInfo.applicantFirstName,
        lastName = applicantInfo.applicantLastName;

    $(".js-applicant-name").text(firstName + " " + lastName);

    $(".applicant-sidebar").find("h3").text(firstName + " " + lastName);

    $(".js-duplicate-applicant-name").text(firstName + " " + lastName);
}

function updateApplicantFirstName() {
    applicantInfo.applicantFirstName = $(this).val().replace(/\b\w/g, l => l.toUpperCase());

    updateApplicantName();
}

function updateApplicantLastName() {
    applicantInfo.applicantLastName = $(this).val().replace(/\b\w/g, l => l.toUpperCase());

    updateApplicantName();
}

function updateAdditionalApplicantName() {
    var $container = $(this).closest(".ez-dropdown-container"),
        firstName = $container.find(".js-additional-contact-first-name").val().toLowerCase(),
        lastName = $container.find(".js-additional-contact-last-name").val().toLowerCase(),
        fullName = (firstName + " " + lastName).replace(/\b\w/g, l => l.toUpperCase());

    $container.find(".js-contact-name").text(fullName);
}


function updateApplicantAddressMap() {
    var self = this;

    setTimeout(function() {
        var address = $(self).val() || 'a';
            encodedAddress = encodeURIComponent(address),
            src = "https://www.google.com/maps/embed/v1/place?key=" + googleMapApiKey + "&q=" + encodedAddress,
            $map = $(self).closest(".js-container-address-list").closest(".row").find(".js-applicant-address-map");
            
        $map.prop("src", src);
    }, 50);
}

function addAnEventToNewDropdownContainer(container) {
    $(container).find(".form-group").last().on("keydown", function(e) {
        var key = e.which || e.keyCode;

        if (key === 9) {
            $(this).closest(".collapse").collapse("hide");
            $(".js-heading-info").show();
        }
    });
}

function updateCommercialApplicantPicture() {
    var newPictureSrc = $(".commercial-applicant-picture.selected-picture").prop("src");

    $(".js-current-commercial-applicant-picture").prop("src", newPictureSrc);

    $("#commercialApplicantPicturesModal").modal("hide");
}

function checkAddressType() {
    var val = $(this).val();

    $addressRow = $(this).closest(".row");

    if (val === "International Address") {
        addInternationalAddress();
        bindAddressInputToGoogleApi();
    } else if (val === "Military Address") {
        $("#militaryAddressModal").modal("toggle");
    } else {
        addUsaAddress();
        bindAddressInputToGoogleApi();
    }

    if (val === "Alternate Garage") {
        $alternateGarageAddress = $(this).closest(".row").find(".js-address-input");
    }
};

function saveAlternateGarageAddress() {
    if ($alternateGarageAddress === undefined) {
        localStorage.setItem("alternateGarageAddress", "");
    } else {
        var address = $alternateGarageAddress.val();

        localStorage.setItem("alternateGarageAddress", address);
    }
}

function makeAddressPrimary() {
    var $primaryAddressInput = addressElements.primaryAddressInput.clone().removeClass("hide-content");
    var $input = addressElements.inputLinkedToGoogleAPI.clone().removeClass("hide-content");

    $(".js-container-address-list .js-primary-address-input").html($input);

    $(this).closest(".row").find(".js-address-input-container").html($primaryAddressInput);
}

function addUsaAddress() {
    var $input = addressElements.inputLinkedToGoogleAPI.clone().removeClass("hide-content");

    var $actionsDropdown = addressElements.usaAddressActions.clone().removeClass("hide-content");

    $addressRow.find(".js-address-input-container").html($input);
    $addressRow.find(".js-address-actions-dropdown").html($actionsDropdown);
    $addressRow.find(".js-address-unit-number-input").show();
}

function addInternationalAddress() {
    var $input = addressElements.inputLinkedToGoogleAPI.clone().removeClass("hide-content");
    var $actionsDropdown = addressElements.internationalAddressActions.clone().removeClass("hide-content");

    $addressRow.find(".js-address-input-container").html($input);
    $addressRow.find(".js-address-actions-dropdown").html($actionsDropdown);
    $addressRow.find(".js-address-unit-number-input").hide();
}

function addMilitaryAddress() {
    var $address = addressElements.militaryAddress.clone()
                                                  .removeClass("hide-content")
                                                  .tooltip();

    var $actionsDropdown = addressElements.militaryAddressActions.clone().removeClass("hide-content");

    $addressRow.find(".js-address-input-container").html($address);
    $addressRow.find(".js-address-actions-dropdown").html($actionsDropdown);
    $addressRow.find(".js-address-unit-number-input").hide();

    $("#militaryAddressModal").modal("toggle");
}

function editMilitaryAddress() {
    $("#militaryAddressModal").modal("toggle");
}

$(function() {
    $(".ez-dropdown-content").each(function() {
        addAnEventToNewDropdownContainer(this);
    });

    $("body").on("focus", ".ez-dropdown-heading a", function() {
        $(this).closest(".ez-dropdown-container").find(".collapse").collapse("show");
    });

    $(".js-add-commercial-applicant-picture").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        $("#commercialApplicantPicturesModal").modal("show");
    });

    $(".modal .applicant-picture, .modal .commercial-applicant-picture").on("click", function() {
        $(".selected-picture").removeClass("selected-picture");
        $(this).addClass("selected-picture");
    });

    $(".js-vip-switch").on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var id = "#" + $(this).find("input")[0].id;

        var val = !$(id).prop('checked');

        $(id).prop('checked', val);
    });

    $("body").on("focus", "#input-address", function() {
        this.selectionStart = this.selectionEnd = 0;
    });

    $("#input-first-name")[0].focus();

    addressElements = {
        inputLinkedToGoogleAPI: $(".js-address-input").eq(1),
        primaryAddressInput: $(".js-primary-address-input"),
        internationalAddressActions: $(".js-international-address-actions"),
        militaryAddress: $(".js-military-address"),
        militaryAddressActions: $(".js-military-address-actions"),
        usaAddressActions: $(".js-usa-address-actions")
    };

    $(".js-usa-states-input").each(function() {
        var self = this;

        usaStateList.forEach(function(value) {
            var twoLetterStateName = value["alpha-2"];

            $(self).append("<option>" + twoLetterStateName + "</option>");
        });
    });

    $("body").on("click", ".js-delete-button", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // This line of code made the first address input in the applicant info a primary address. 
    // makeAddressPrimary.call($(".js-make-address-primary-btn"));

    $("#input-address").val("350 Highland Drive, Lewisville, TX, United States");
    updateApplicantAddressMap.call($("#input-address"));

    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        maxDate: 0,
        onSelect: function() {
            calcDateDifference(this);
        }
    });

    setTimeout(function() {
        bindAddressInputToGoogleApi();
    }, 500);

    $(".nav-parent").eq(1).find(".nav-parent-header").addClass("active");
});

var $phoneInputRow = $(".js-phone-input-row").eq(0).clone(),
    $addressInputRow = $(".js-address-input-row").eq(0).clone(),
    $emailInputRow = $(".js-email-input-row").eq(0).clone();

var applicantInfo = {
    applicantFirstName: "",
    applicantLastName: ""
};

var $alternateGarageAddress;

var googleMapApiKey = "AIzaSyBW54QRY9jPjpkMqPfPM18eVLt_opuQK-Q";

var $addressRow, addressElements;

var usaStateList = [
    {"name":"Alabama","alpha-2":"AL"},
    {"name":"Alaska","alpha-2":"AK"},
    {"name":"Arizona","alpha-2":"AZ"},
    {"name":"Arkansas","alpha-2":"AR"},
    {"name":"California","alpha-2":"CA"},
    {"name":"Colorado","alpha-2":"CO"},
    {"name":"Connecticut","alpha-2":"CT"},
    {"name":"Delaware","alpha-2":"DE"},
    {"name":"District of Columbia","alpha-2":"DC"},
    {"name":"Florida","alpha-2":"FL"},
    {"name":"Georgia","alpha-2":"GA"},
    {"name":"Hawaii","alpha-2":"HI"},
    {"name":"Idaho","alpha-2":"ID"},
    {"name":"Illinois","alpha-2":"IL"},
    {"name":"Indiana","alpha-2":"IN"},
    {"name":"Iowa","alpha-2":"IA"},
    {"name":"Kansa","alpha-2":"KS"},
    {"name":"Kentucky","alpha-2":"KY"},
    {"name":"Lousiana","alpha-2":"LA"},
    {"name":"Maine","alpha-2":"ME"},
    {"name":"Maryland","alpha-2":"MD"},
    {"name":"Massachusetts","alpha-2":"MA"},
    {"name":"Michigan","alpha-2":"MI"},
    {"name":"Minnesota","alpha-2":"MN"},
    {"name":"Mississippi","alpha-2":"MS"},
    {"name":"Missouri","alpha-2":"MO"},
    {"name":"Montana","alpha-2":"MT"},
    {"name":"Nebraska","alpha-2":"NE"},
    {"name":"Nevada","alpha-2":"NV"},
    {"name":"New Hampshire","alpha-2":"NH"},
    {"name":"New Jersey","alpha-2":"NJ"},
    {"name":"New Mexico","alpha-2":"NM"},
    {"name":"New York","alpha-2":"NY"},
    {"name":"North Carolina","alpha-2":"NC"},
    {"name":"North Dakota","alpha-2":"ND"},
    {"name":"Ohio","alpha-2":"OH"},
    {"name":"Oklahoma","alpha-2":"OK"},
    {"name":"Oregon","alpha-2":"OR"},
    {"name":"Pennsylvania","alpha-2":"PA"},
    {"name":"Rhode Island","alpha-2":"RI"},
    {"name":"South Carolina","alpha-2":"SC"},
    {"name":"South Dakota","alpha-2":"SD"},
    {"name":"Tennessee","alpha-2":"TN"},
    {"name":"Texas","alpha-2":"TX"},
    {"name":"Utah","alpha-2":"UT"},
    {"name":"Vermont","alpha-2":"VT"},
    {"name":"Virginia","alpha-2":"VA"},
    {"name":"Washington","alpha-2":"WA"},
    {"name":"West Virginia","alpha-2":"WV"},
    {"name":"Wisconsin","alpha-2":"WI"},
    {"name":"Wyoming","alpha-2":"WY"}
];