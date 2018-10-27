function searchForMatchingKeywords() {
    var val = $(this).val(),
        $selector;

    if ($(".js-table-with-all-conditions:visible").length !== 0) {
        $selector = $(".js-table-with-all-conditions tr td").filter(function() {
            return !($(this).hasClass("actions-table-cell") || $(this).hasClass("js-rule-name") || $(this).hasClass("js-active-status"));
        });
    } else {
        $selector = $("span.rule-criteria");

        if (!$("#toggle-rule-details")[0].checked) {
            $("#toggle-rule-details").click();
        }
    }

    $selector.each(function() {
        var text = $(this).text();

        var regex = new RegExp(val.split(" ").join("|"), 'gi');

        text = text.replace(regex, function(matched) {
            if (matched) {
                return "<span style='background: yellow'>" + matched + "</span>";
            } else {
                return matched;
            }
        });

        $(this).text("").append(text);
    });    
}

function toggleTableViews() {
    $(".js-rules-summary-table, .js-table-with-all-conditions").toggle();
    resetTableSearchbar();
}

function resetTableSearchbar() {
    $(".js-table-searchbar").val("");
}

$(document).ready(function() {
    var rules = {
        rules: [
            {
                draft: true,
                RuleName: "RNWL Commercial - All Amer Marine Slip ",
                Criteria: "If New/Renewal is Renewal and Transaction is Renewal Image and LOB is Auto (Commercial) and State is Colorado and Master Company is 1177 INS CO INC and Policy Producer Code is 12346",
                Payees: "Pay Commission Producer 2% of Agency Commission, pay CSR 98% of Agency Commission",
                Active: false,
                Modified: "11/21/2016",
                note: "This is a note added to this rule."
            },
            {
                RuleName: "RNWL Commercial - All Amer Marine Slip ",
                Criteria: "If New/Renewal is Renewal and Transaction is Policy Change and LOB is Commercial Property and Master Company is ALL AMER MARINE SLIP and Commission Producer Code is 12345 and Policy Producer Code is 304",
                Payees: "Pay Commission Producer 100% of Agency Commission",
                Active: true,
                Modified: "11/21/2016",
                note: "This is a note added to this rule."
            },
            {
                RuleName: "RNWL Commercial - All Amer Marine Slip ",
                Criteria: "Always",
                Payees: "Pay Commission Producer 20% of Agency Commission",
                Active: true,
                Modified: "08/15/2016",
                note: "This is a note added to this rule."
            },
            {
                RuleName: "RNWL Commercial - All Amer Marine Slip ",
                Criteria: "If New/Renewal is Renewal and Transaction is Renewal Image and LOB is Auto (Commercial) and State is Colorado and Master Company is 1177 INS CO INC and Policy Producer Code is 12346",
                Payees: "Pay Commission Producer 2% of Agency Commission, pay CSR 98% of Agency Commission",
                Active: false,
                Modified: "11/21/2016",
                note: "This is a note added to this rule."
            },
            {
                RuleName: "RNWL Commercial - All Amer Marine Slip ",
                Criteria: "If New/Renewal is Renewal and Transaction is Policy Change and LOB is Commercial Property and Master Company is ALL AMER MARINE SLIP and Commission Producer Code is 12345 and Policy Producer Code is 304",
                Payees: "Pay Commission Producer 100% of Agency Commission",
                Active: true,
                Modified: "11/21/2016",
                note: "This is a note added to this rule."
            },
            {
                RuleName: "RNWL Commercial - All Amer Marine Slip ",
                Criteria: "If New/Renewal is Renewal and Transaction is Policy Change and LOB is Commercial Property and Master Company is ALL AMER MARINE SLIP and Commission Producer Code is 12345 and Policy Producer Code is 304",
                Payees: "Pay Commission Producer 100% of Agency Commission",
                Active: true,
                Modified: "11/21/2016",
                note: "This is a note added to this rule."
            }
        ]
    };


    var rulesTemplateScript = $("#rules-template").html();
    var rulesTemplate = Handlebars.compile(rulesTemplateScript);
    var rulesData = rulesTemplate(rules);
    var rulesPromise = $('#rules').append(rulesData).promise();
    $.when(rulesPromise).then(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('#toggle-rule-details').click(function() {
        $('.rules-summary').toggleClass('details');
    });

    $('select').select2();
});
