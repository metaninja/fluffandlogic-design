var perfectScrollbar;

var addresses = {
    addresses: [
        {
            AddressName: "Home (US)",
            IsPrimary: true,
            AddressLine1: "951 LEORA LN #1235",
            AddressLine2: "",
            AddressLine3: "Collin County",
            TimeAtAddress: "2 years 3 months"
        },
        {
            AddressName: "Vacation (International)",
            IsPrimary: false,
            AddressLine1: "951 LEORA LN #1235",
            AddressLine2: "06570 ST PAUL",
            AddressLine3: "FRANCE",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "Military (US)",
            IsPrimary: false,
            AddressLine1: "UNIT 45013 BOX 2666",
            AddressLine2: "USAG J",
            AddressLine3: "APO AP 96338",
            TimeAtAddress: "6 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        },
        {
            AddressName: "PO BOX (UX)",
            IsPrimary: false,
            AddressLine1: "PO BOX 1424",
            AddressLine2: "PLANO TX 75023-1424",
            AddressLine3: "",
            TimeAtAddress: "11 months"
        }
    ]
};

function makePrimary() {
    $('.js-btn-make-primary').click(function() {
        $('.card-address .is-primary').css('visibility', 'hidden');
        $(this).parents('.card-address').find('.is-primary').css('visibility', 'visible');
    });
}

function deleteAddress() {
    $('.js-btn-delete-address').click(function() {
        $(this).parents('.card-address').remove();
    });
}

function addressesWidth() {
    return $('.addresses-wrapper').width();
}

function maxScrollLeft() {
    var addresses = document.getElementsByClassName('addresses')[0];
    return addresses.scrollWidth - addresses.clientWidth;
}

function toggleScrollButtons() {
    $('.scroll-left').show();
    $('.scroll-right').show();

    var addresses = $('.addresses');

    if (addresses.scrollLeft() <= 0) {
        $('.scroll-left').hide();
    }
    if (addresses.scrollLeft() >= maxScrollLeft()) {
        $('.scroll-right').hide();
    }
}

function toggleAddAddressModal() {
    $("#add-address-modal").modal("toggle");
}

function showAddresses() {
    var $item = $(".prospecting-list-item.selected-item");

    $item.attr("data-has-address", true);

    $(".js-add-address-modal").hide();
    $('.empty-state-address').hide();
    $('.addresses-wrapper').show();
    toggleScrollButtons();
    perfectScrollbar.update();
}

function initializeMultipleAddresses() {
    $('.scroll-left').click(function() {
        var scrollLeft = '-=' + addressesWidth();

        $('.addresses').animate({
            scrollLeft: scrollLeft
        }, 1000, 'easeOutQuad', toggleScrollButtons());
    });

    $('.scroll-right').click(function() {
        var scrollRight = '+=' + addressesWidth();

        $('.addresses').animate({
            scrollLeft: scrollRight
        }, 1000, 'easeOutQuad', toggleScrollButtons());
    });

    $('.js-select-location').change(function() {
       var selectedOption = $(this).val();
       var speed = 300;
       
        $('.js-location:visible').slideUp(speed, function() {
            switch(selectedOption.toLowerCase()) {
                case "united states":
                    $('.js-location-us').slideDown(speed);
                    break;
                
                case "international":
                    $('.js-location-international').slideDown(speed);
                    break;

                case "military":
                    $('.js-location-military').slideDown(speed);
                    break;

                default:
                    $('.js-location-us').slideDown(speed);
            }    
        });



    });

    window.resize= toggleScrollButtons();

    var addressesTemplateScript = $("#addresses-template").html();
    var addressesTemplate = Handlebars.compile(addressesTemplateScript);
    var addressesData = addressesTemplate(addresses);
    $('#addresses').append(addressesData);
    makePrimary();
    deleteAddress();
    toggleScrollButtons();

    perfectScrollbar = new PerfectScrollbar("#addresses");
}

