(function() {
    $(document).ready(function() {

        var context = {
            "leftNavLink" :
                [
                    {
                        "description"    : "Action Dropdown",
                        "url"            : "#/app/pages/components/action-dropdown/"
                    },
                    {
                        "description"    : "Alert",
                        "url"            : "#/app/pages/components/alert/"
                    },
                    // {
                    //     "description"    : "Applicant Search",
                    //     "url"            : "#/app/pages/components/applicant-search/"
                    // },
                    {
                        "description"    : "Badges and Labels",
                        "url"            : "#/app/pages/components/badge/"
                    },
                    {
                        "description"    : "Busy Indicator",
                        "url"            : "#/app/pages/components/busy-indicator/"
                    },
                    {
                        "description"    : "Button",
                        "url"            : "#/app/pages/components/button/"
                    },
                    {
                        "description"    : "Breadcrumbs",
                        "url"            : "#/app/pages/components/breadcrumbs/"
                    },
                    {
                        "description"    : "Callouts",
                        "url"            : "#/app/pages/components/callouts/"
                    },
                    {
                        "description"    : "Card",
                        "url"            : "#/app/pages/components/card/"
                    },
                    {
                        "description"    : "Date",
                        "url"            : "#/app/pages/components/date/"
                    },
                    {
                        "description"    : "Expandable Header",
                        "url"            : "#/app/pages/components/expandable-header/"
                    },                    
                    {
                        "description"    : "Form Element",
                        "url"            : "#/app/pages/components/form/"
                    },
                    {
                        "description"    : "Form Validation",
                        "url"            : "#/app/pages/components/form-validation/"
                    },
                    {
                        "description"    : "Filters",
                        "url"            : "#/app/pages/components/filter/"
                    },
                    {
                        "description"    : "Headings",
                        "url"            : "#/app/pages/components/heading/"
                    },
                    {
                        "description"    : "Modal",
                        "url"            : "#/app/pages/components/modal/"
                    },
                    {
                        "description"    : "Pagination",
                        "url"            : "#/app/pages/components/pagination/"
                    },
                    {
                        "description"    : "Popover",
                        "url"            : "#/app/pages/components/popover/"
                    },
                    {
                        "description"    : "Required Label",
                        "url"            : "#/app/pages/components/required-field-label/"
                    },                    
                    {
                        "description"    : "Search",
                        "url"            : "#/app/pages/components/search/"
                    },
                    {
                        "description"    : "Sticky Notes",
                        "url"            : "#/app/pages/components/sticky-notes/"
                    },
                    {
                        "description"    : "Tabs",
                        "url"            : "#/app/pages/components/tab/"
                    },
                    {
                        "description"    : "Table",
                        "url"            : "#/app/pages/components/table/"
                    },
                    {
                        "description"    : "Table Row Details",
                        "url"            : "#/app/pages/components/table-row-details/"
                    },
                    {
                        "description"    : "Tooltips",
                        "url"            : "#/app/pages/components/tooltips/"
                    },
                    {
                        "description"    : "Type Ahead",
                        "url"            : "#/app/pages/components/type-ahead/"
                    },
                ]
        };
        var source = $('#hbs-leftnav-template').html();
        var template = Handlebars.compile(source);
        var html = template(context);
        $('#js-leftnav').html(html);
    });
})();