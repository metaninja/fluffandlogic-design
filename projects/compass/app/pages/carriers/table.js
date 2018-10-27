var carriers = {
    carriers: [
        {
            Logo: "libs/images/carriers/21st_Century.png",
            Name: "21st Century Insurance",
            premiumVolume: "$3,454,537",
            lossRatio: "45%",
            Users: 23,
            Admin: "joe.smith@21stcentury.com",
            isMember: true,
            ParentName: "Alex Huan",
            ParentAgencyIsMAP: false,
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "52 Ersel Street",
            Address2: "Dallas TX 75247",
            Phone: "(214) 403-6576"
        },
        {
            Logo: "libs/images/carriers/aaa.png",
            Name: "AAA",
            premiumVolume: "$3,087,453",
            lossRatio: "45%",
            Users: 11,
            Admin: "michaels@aaa.com",
            isMember: true,
            ParentName: "My Agency",
            ParentAgencyIsMAP: true,
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "1329 Romines Mill Road",
            Address2: "Plano TX 75023",
            Phone: "(214) 575-7451"
        },
        {
            Logo: "libs/images/carriers/American_Commerce.png",
            Name: "American Commerce",
            premiumVolume: "$3,987,573",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@american-commerce.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "2230 Plano Pkwy",
            Address2: "Plano TX 75021",
            Phone: "(469) 598-8254"
        },
        {
            Logo: "libs/images/carriers/central.gif",
            Name: "Central Insurance Companies",
            premiumVolume: "$1,892,403",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@central-insurance.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "720 Juno Hill Rd",
            Address2: "Coppell TX 75029",
            Phone: "(214) 545-1345"
        },
        {
            Logo: "libs/images/carriers/Encompass.jpg",
            Name: "Encompass",
            premiumVolume: "$5,398,548",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@encompass.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "2620 Custer Road",
            Address2: "Plano TX 75023",
            Phone: "(214) 345-1248"
        },
        {
            Logo: "libs/images/carriers/harleysville.gif",
            Name: "Harleysville",
            premiumVolume: "2,938,457",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@harleysville.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "1722 Arapaho Road",
            Address2: "Richardson TX 75017",
            Phone: "(972) 644-1238"
        },
        {
            Logo: "libs/images/carriers/hartford.png",
            Name: "The Hartford",
            premiumVolume: "$3,087,453",
            lossRatio: "45%",
            Users: 11,
            Admin: "michaels@hartford.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "1329 Romines Mill Road",
            Address2: "Plano TX 75023",
            Phone: "(214) 575-7451"
        },

        {
            Logo: "libs/images/carriers/Kemper_Preferred.jpg",
            Name: "Kemper Preferred",
            premiumVolume: "$1,892,403",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@kemper.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "720 Juno Hill Rd",
            Address2: "Coppell TX 75029",
            Phone: "(214) 545-1345"
        },
        {
            Logo: "libs/images/carriers/Liberty-Mutual-Insurance-Logo.png",
            Name: "Liberty Mutual Insurance",
            premiumVolume: "$1,892,403",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@libertymutual.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "720 Juno Hill Rd",
            Address2: "Coppell TX 75029",
            Phone: "(214) 545-1345"
        },
        {
            Logo: "libs/images/carriers/metlife.png",
            Name: "MetLife",
            premiumVolume: "$1,892,403",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@metlife.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "720 Juno Hill Rd",
            Address2: "Coppell TX 75029",
            Phone: "(214) 545-1345"
        },
        {
            Logo: "libs/images/carriers/victoriainsurance.png",
            Name: "Victoria Insurance",
            premiumVolume: "$1,892,403",
            lossRatio: "45%",
            Users:5,
            Admin: "wbocac@victoria-insurance.com",
            Modified: "Dec 15 2017, 12:32PM",
            Address1: "720 Juno Hill Rd",
            Address2: "Coppell TX 75029",
            Phone: "(214) 545-1345"
        },
    ]
};

function renderCarriers() {
    var carriersTemplateScript = $("#carriers-template").html();
    var carriersTemplate = Handlebars.compile(carriersTemplateScript);
    var carriersData = carriersTemplate(carriers);
    $('#carriers').html(carriersData);
}

renderCarriers();