function toggleView(view) {
    if (view.toLowerCase() === "table") {
        $('.js-table-view').removeClass('hide-content');
        $('.js-card-view').addClass('hide-content');

        $('.js-btn-toggle-view-table').removeClass('btn-outline-primary').addClass('btn-primary');
        $('.js-btn-toggle-view-card').removeClass('btn-primary').addClass('btn-outline-primary');
    } else {
        $('.js-table-view').addClass('hide-content');
        $('.js-card-view').removeClass('hide-content');

        $('.js-btn-toggle-view-table').removeClass('btn-primary').addClass('btn-outline-primary');
        $('.js-btn-toggle-view-card').removeClass('btn-outline-primary').addClass('btn-primary');
    }
}

function showTableView() {
    $(this).closest(".btn-group").find(".btn").removeClass("btn-primary");
    $(this).addClass("btn-primary");

    $(".js-table-view").show();
    $(".js-card-view").hide();
}

function showCardview() {
    $(this).closest(".btn-group").find(".btn").removeClass("btn-primary");
    $(this).addClass("btn-primary");

    $(".js-table-view").hide();
    $(".js-card-view").show();
}

$(document).ready(function() {
    // appendTableViewData();
    appendCardViewData();
    
    $(".nav-parent").eq(2).find(".nav-parent-header").addClass("active");
});

// function appendTableViewData() {
//     var agencies = {
//         agencies: [
//             {
//                 Logo: "http://localhost:8000/ratings/images/insurance-companies/21st_Century.png",
//                 Agency: "Empire Insurance",
//                 Users: 23,
//                 Admin: "joe.smith@empire-insurance.com",
//                 isMember: true,
//                 ParentAgency: "My Agency",
//                 ParentAgencyIsMAP: true,
//                 Modified: "Dec 15 2017, 12:32PM"
//             },
//             {
//                 Logo: "21st_Century.png",
//                 Agency: "Animous",
//                 Users: 11,
//                 Admin: "michaels@animous.com",
//                 isMember: true,
//                 ParentAgency: "My Agency",
//                 ParentAgencyIsMAP: true,
//                 Modified: "Dec 15 2017, 12:32PM"
//             },
//             {
//                 Agency: "Assurety",
//                 Users:5,
//                 Admin: "wbocac@assurety.com",
//                 isMember: true,
//                 ParentAgency: "Omnus Insurance",
//                 ParentAgencyIsMAP: false,
//                 Modified: "Dec 15 2017, 12:32PM"
//             },
//             {
//                 Agency: "Tencelf",
//                 Users:5,
//                 Admin: "info@tencelf.com",
//                 isMember: true,
//                 ParentAgency: "My Agency",
//                 ParentAgencyIsMAP: true,
//                 Modified: "Dec 15 2017, 12:32PM"
//             },
//             {
//                 Agency: "Omnus Insurance",
//                 Users:5,
//                 Admin: "hello@omnus.com",
//                 isMember: true,
//                 ParentAgency: "My Agency",
//                 ParentAgencyIsMAP: true,
//                 Modified: "Dec 15 2017, 12:32PM"
//             },
//         ]
//     };
//
//     var agenciesTemplateScript = $("#agencies-template").html();
//     var agenciesTemplate = Handlebars.compile(agenciesTemplateScript);
//     var agenciesData = agenciesTemplate(agencies);
//     $('#agencies').append(agenciesData);
// }

function appendCardViewData() {
    var agencies = {
        agencies: [
            {
                Logo: "central.gif",
                Agency: "Central Insurance Companies",
                premiumVolume: "$3,454,537",
                lossRatio: "45%",
                Users: 23,
                Admin: "joe.smith@central.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "52 Ersel Street",
                Address2: "Dallas TX 75247",
                Phone: "(214) 403-6576",
                Enabled: true
            },
            {
                Logo: "harleysville.gif",
                Agency: "Harleysville",
                premiumVolume: "$3,087,453",
                lossRatio: "45%",
                Users: 11,
                Admin: "michaels@harleysville.com",
                isMember: true,
                ParentAgency: "My Agency",
                ParentAgencyIsMAP: true,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "1329 Romines Mill Road",
                Address2: "Plano TX 75023",
                Phone: "(214) 575-7451",
                Enabled: false
            },
            {
                Logo: "Thiel.png",
                Agency: "Thiel Insurance Agency",
                premiumVolume: "$3,987,573",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@thiel.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "2230 Plano Pkwy",
                Address2: "Plano TX 75021",
                Phone: "(469) 598-8254",
                Enabled: true
            },
            {
                Logo: "tx_insurance_agency.png",
                Agency: "Texas Insurance Agency",
                premiumVolume: "$1,892,403",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@txinsure.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "720 Juno Hill Rd",
                Address2: "Coppell TX 75029",
                Phone: "(214) 545-1345",
                Enabled: true
            },
            {
                Logo: "Weiss.png",
                Agency: "Weiss Insurance Agenices",
                premiumVolume: "$5,398,548",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@weiss.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "2620 Custer Road",
                Address2: "Plano TX 75023",
                Phone: "(214) 345-1248",
                Enabled: false
            },
            {
                Logo: "randall.png",
                Agency: "Randall Insurance Agency, Inc",
                premiumVolume: "2,938,457",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@randall.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "1722 Arapaho Road",
                Address2: "Richardson TX 75017",
                Phone: "(972) 644-1238",
                Enabled: false
            },
            {
                Logo: "harleysville.gif",
                Agency: "Harleysville",
                premiumVolume: "$3,087,453",
                lossRatio: "45%",
                Users: 11,
                Admin: "michaels@harleysville.com",
                isMember: true,
                ParentAgency: "My Agency",
                ParentAgencyIsMAP: true,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "1329 Romines Mill Road",
                Address2: "Plano TX 75023",
                Phone: "(214) 575-7451",
                Enabled: true
            },

            {
                Logo: "tx_insurance_agency.png",
                Agency: "Texas Insurance Agency",
                premiumVolume: "$1,892,403",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@txinsure.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "720 Juno Hill Rd",
                Address2: "Coppell TX 75029",
                Phone: "(214) 545-1345",
                Enabled: true
            },

            {
                Logo: "randall.png",
                Agency: "Randall Insurance Agency, Inc",
                premiumVolume: "2,938,457",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@randall.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "1722 Arapaho Road",
                Address2: "Richardson TX 75017",
                Phone: "(972) 644-1238",
                Enabled: true
            },
            {
                Logo: "Weiss.png",
                Agency: "Weiss Insurance Agenices",
                premiumVolume: "$5,398,548",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@weiss.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "2620 Custer Road",
                Address2: "Plano TX 75023",
                Phone: "(214) 345-1248",
                Enabled: true
            },
            {
                Logo: "Weiss.png",
                Agency: "Weiss Insurance Agenices",
                premiumVolume: "$5,398,548",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@weiss.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "2620 Custer Road",
                Address2: "Plano TX 75023",
                Phone: "(214) 345-1248",
                Enabled: true
            },
            {
                Logo: "central.gif",
                Agency: "Central Insurance Companies",
                premiumVolume: "$3,454,537",
                lossRatio: "45%",
                Users: 23,
                Admin: "joe.smith@central.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "52 Ersel Street",
                Address2: "Dallas TX 75247",
                Phone: "(214) 403-6576",
                Enabled: true
            },
            {
                Logo: "harleysville.gif",
                Agency: "Harleysville",
                premiumVolume: "$3,087,453",
                lossRatio: "45%",
                Users: 11,
                Admin: "michaels@harleysville.com",
                isMember: true,
                ParentAgency: "My Agency",
                ParentAgencyIsMAP: true,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "1329 Romines Mill Road",
                Address2: "Plano TX 75023",
                Phone: "(214) 575-7451",
                Enabled: true
            },
            {
                Logo: "randall.png",
                Agency: "Randall Insurance Agency, Inc",
                premiumVolume: "2,938,457",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@randall.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "1722 Arapaho Road",
                Address2: "Richardson TX 75017",
                Phone: "(972) 644-1238",
                Enabled: true
            },
            {
                Logo: "central.gif",
                Agency: "Central Insurance Companies",
                premiumVolume: "$3,454,537",
                lossRatio: "45%",
                Users: 23,
                Admin: "joe.smith@central.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "52 Ersel Street",
                Address2: "Dallas TX 75247",
                Phone: "(214) 403-6576",
                Enabled: true
            },
            {
                Logo: "Thiel.png",
                Agency: "Thiel Insurance Agency",
                premiumVolume: "$3,987,573",
                lossRatio: "45%",
                Users:5,
                Admin: "wbocac@thiel.com",
                isMember: true,
                ParentAgency: "Alex Huan",
                ParentAgencyIsMAP: false,
                Modified: "Dec 15 2017, 12:32PM",
                Address1: "2230 Plano Pkwy",
                Address2: "Plano TX 75021",
                Phone: "(469) 598-8254",
                Enabled: true
            },
        ]
    };

    var agenciesCardsTemplateScript = $("#agencies-cards-template").html();
    var agenciesCardsTemplate = Handlebars.compile(agenciesCardsTemplateScript);
    var agenciesCardsData = agenciesCardsTemplate(agencies);
    $('#agencies-cards').html(agenciesCardsData);

    var agenciesTableTemplateScript = $("#agencies-table-template").html();
    var agenciesTableTemplate = Handlebars.compile(agenciesTableTemplateScript);
    var agenciesTableData = agenciesTableTemplate(agencies);
    $('#agencies-table').html(agenciesTableData);
}