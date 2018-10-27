// ---------------------------------------------
// Tabs object should have following format:
//
// var tabs = {
//     tabs: [
//         {
//             URL: "#/app/pages/url/of/link/",
//             Content: "URL Description",
//             isActive: false,
//         },
//     ]
// };
// ---------------------------------------------

function renderTabs() {

    var page = (location.hash).toString().toLowerCase();

    tabs.tabs.forEach(function(tab, index)  {
        if (page === tab.URL.toLowerCase()) {
            tab.isActive = true;
        }
        else {
            tab.isActive = false;
        }
    });

    var tabsTemplateScript = $("#tabs-template").html();
    var tabsTemplate = Handlebars.compile(tabsTemplateScript);
    var tabsData = tabsTemplate(tabs);
    $('#tabs').html(tabsData);
}