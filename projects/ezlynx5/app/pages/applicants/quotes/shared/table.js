var quotes = {
    quotes: [
        {
            Carrier: "Liberty Mutual",
            Logo: "libs/images/carriers/Liberty-Mutual-Insurance-Logo.png",
            LOB: "Auto",
            CarrierLogin: true,
            OptionStatus: "",
            Note: "",

            ResultStatus: "12 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: true,
            SetLogin: false,
            ReportError: false,
        },
        {
            Carrier: "Travelers",
            Logo: "libs/images/carriers/travelers.png",
            LOB: "Auto",
            CarrierLogin: true,
            OptionStatus: "",
            Note: "",

            ResultStatus: "6 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: true,
            SetLogin: false,
            ReportError: false,
        },
        {
            Carrier: "Safeco Insurance",
            Logo: "libs/images/carriers/safeco.png",
            LOB: "Auto",
            CarrierLogin: true,
            OptionStatus: "BETA version of Bristol West Auto for state CT",
            Note: "",

            ResultStatus: "12 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: true,
            SetLogin: false,
            ReportError: false,
        },
        {
            Carrier: "21st Century Insurance",
            Logo: "libs/images/carriers/21st_Century.png",
            LOB: "Auto",
            CarrierLogin: true,
            OptionStatus: "BETA version of Central Mutual of OH - Auto XML for state CT",
            Note: "",

            ResultStatus: "12 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: true,
            SetLogin: false,
            ReportError: false,
        },
        {
            Carrier: "Encompass",
            Logo: "libs/images/carriers/Encompass.jpg",
            LOB: "Auto",
            CarrierLogin: false,
            OptionStatus: "Carrier login has not been set",
            Note: "Temporarily disabled due to carrier site issues",

            ResultStatus: "6 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: true,
            SetLogin: false,
            ReportError: false,
        },
        {
            Carrier: "The Hartford",
            Logo: "libs/images/carriers/hartford.png",
            LOB: "Auto",
            CarrierLogin: true,
            OptionStatus: "",
            Note: "XML",

            ResultStatus: "12 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: false,
            SetLogin: true,
            ReportError: false,
        },
        {
            Carrier: "Kemper Preferred",
            Logo: "libs/images/carriers/Kemper_Preferred.jpg",
            LOB: "Auto",
            CarrierLogin: false,
            OptionStatus: "",
            Note: "ACIC",

            ResultStatus: "12 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: false,
            SetLogin: false,
            ReportError: true,
        },
        {
            Carrier: "Metlife",
            Logo: "libs/images/carriers/metlife.png",
            LOB: "Auto",
            CarrierLogin: false,
            OptionStatus: "",
            Note: "Premium difference testing",

            ResultStatus: "12 Month Premium = $2277.00(Total Premium)",
            StateMin: "$2430.00",
            Option1: "$2530.00",
            Option2: "$2370.00",
            Option3: "$2370.00",
            Valid: false,
            SetLogin: false,
            ReportError: false,
        },
    ]
};

function renderQuotes() {
    var quotesTemplateScript = $("#quotes-template").html();
    var quotesTemplate = Handlebars.compile(quotesTemplateScript);
    var quotesData = quotesTemplate(quotes);
    $('#quotes').html(quotesData);
}

renderQuotes();

