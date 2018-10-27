function createAndAppendTemplates(templateScript, data, container) {
    var source = $(templateScript).html();
    var template = Handlebars.compile(source);
    var html = template(data);

    $(container).append(html);
}

function moveMultipleUnmatchedPolicies() {
    countSelectedUnmatchedPolices();

    if (unmatchedPolicesToMoveToAgency.length !== 0) {
        $("#agency-list-modal").modal("show");
    }
}

function addUnmatchedPoliciesToAgency() {
    $(unmatchedPolicesToMoveToAgency).each(function() {
        $(this).remove();
    });

    resetUnmatchedPoliciesToMove();
    changeMoveToAgencyButtonState();

    $("#agency-list-modal").modal("hide");
}

function resetUnmatchedPoliciesToMove() {
    unmatchedPolicesToMoveToAgency = [];
}

function selectMultipleUnmatchedPolices() {
    resetUnmatchedPoliciesToMove();

    countSelectedUnmatchedPolices();

    changeMoveToAgencyButtonState();
}

function changeMoveToAgencyButtonState() {
    if (unmatchedPolicesToMoveToAgency.length !== 0) {
        $(".unmatched-policy button").attr("disabled", true);
    } else {
        $(".unmatched-policy button").attr("disabled", false);
    }
}

function countSelectedUnmatchedPolices() {
    $(".unmatched-policy input[type='checkbox']").each(function() {
        if (this.checked) {
            var $unmatchedPolicy = $(this).closest(".unmatched-policy");
            unmatchedPolicesToMoveToAgency.push($unmatchedPolicy);
        }
    });
}

function toggleAllUnmatchedPolicesCheckboxes() {
    var val = this.checked;
    if (val) {
        $('.btn-move-to-agency').removeAttr('disabled');
    }
    else {
        $('.btn-move-to-agency').attr('disabled', 'disabled');
    }

    $(".unmatched-policy input[type='checkbox']").each(function() {
        this.checked = val;
    });

    selectMultipleUnmatchedPolices();
}

function searchUnmatchedPolicies() {
    var val = $(this).val().toLowerCase();

    $(".unmatched-policy").hide();

    $(".js-applicant-name").each(function() {
        var name = $(this).text().toLowerCase();

        if (name.match(val)) {
            $(this).closest(".unmatched-policy").show();
        }
    });
}

$(document).ready(function() {
    createAndAppendTemplates("#unmatched-policies-template", unmatchedPolices, ".unmatched-policies");
    createAndAppendTemplates("#agency-template", agencies, ".agencies");

    $(".unmatched-policy button").on("click", function() {
        var $unmatchedPolicy = $(this).closest(".unmatched-policy");
        unmatchedPolicesToMoveToAgency.push($unmatchedPolicy);
    });

    $('#agency-list-modal').on('hidden.bs.modal', function() {
        resetUnmatchedPoliciesToMove();
    });
});

var unmatchedPolicesToMoveToAgency = [];

var agencies = {
    agencies: [
        {
            name: "Bob Parr Insurance Inc",
            address: "543 FOLSOM STREET, COPPELL TX 75014"
        },
        {
            name: "Mark Winters Agency",
            address: "534 CUNNINGHAM DR, PLANO TX 75023"
        },
        {
            name: "Alex Huan Insurance Services",
            address: "1200 MCARTHUR DR, LEWISVILLE TX 7503"
        },
        {
            name: "ABC Insurance Agency of Plano",
            address: "9231 W PARKER RD, PLANO TX 75023"
        }
    ]
};

var unmatchedPolices = {
    unmatchedPolicies: [
        {"name":"Austen Spickett","carrier":"AAA Insurance","policyNumber":"9257026264","lob":"Auto (Commercial)","effectiveDate":"8/3/2017 1:32 PM"},
        {"name":"Gian Fowells","carrier":"SafeCo","policyNumber":"0303420979","lob":"Auto (Home)","effectiveDate":"3/9/2017 7:29 PM"},
        {"name":"Augustine Fernandes","carrier":"StateFarm","policyNumber":"3169039202","lob":"Auto (Home)","effectiveDate":"2/8/2017 12:05 AM"},
        {"name":"Carolyne Kurten","carrier":"Kemper","policyNumber":"6032241408","lob":"Auto (Home)","effectiveDate":"8/7/2017 3:52 AM"},
        {"name":"Langston Slopier","carrier":"AAA Insurance","policyNumber":"5339903478","lob":"Auto (Home)","effectiveDate":"7/19/2017 4:37 PM"},
        {"name":"Maximilien Bodocs","carrier":"SafeCo","policyNumber":"0278605990","lob":"Auto (Home)","effectiveDate":"6/12/2017 3:30 PM"},
        {"name":"Beaufort Davson","carrier":"MetLife","policyNumber":"9628265024","lob":"Auto (Commercial)","effectiveDate":"12/14/2016 12:42 PM"},
        {"name":"Erny Stollsteiner","carrier":"AAA Insurance","policyNumber":"5586586703","lob":"Auto (Home)","effectiveDate":"3/2/2017 8:29 PM"},
        {"name":"Clovis Ambrosetti","carrier":"Kemper","policyNumber":"8862308841","lob":"Auto (Home)","effectiveDate":"2/18/2017 12:04 AM"},
        {"name":"Madge Dallon","carrier":"StateFarm","policyNumber":"9759505738","lob":"Auto (Commercial)","effectiveDate":"10/12/2017 4:55 AM"},
        {"name":"Tally Tofful","carrier":"MetLife","policyNumber":"2875763954","lob":"Auto (Commercial)","effectiveDate":"7/14/2017 9:03 AM"},
        {"name":"Meade MacCart","carrier":"SafeCo","policyNumber":"9671438776","lob":"Auto (Commercial)","effectiveDate":"9/27/2017 5:13 AM"},
        {"name":"Belvia Maxworthy","carrier":"MetLife","policyNumber":"5152021625","lob":"Auto (Commercial)","effectiveDate":"4/29/2017 10:27 PM"},
        {"name":"Sella Chittey","carrier":"StateFarm","policyNumber":"4503069160","lob":"Auto (Commercial)","effectiveDate":"10/25/2017 8:24 AM"},
        {"name":"Bradly Worham","carrier":"Kemper","policyNumber":"5542785972","lob":"Auto (Commercial)","effectiveDate":"9/20/2017 3:10 AM"},
        {"name":"Mireielle Kremer","carrier":"Kemper","policyNumber":"0142274089","lob":"Auto (Home)","effectiveDate":"10/19/2017 8:50 PM"},
        {"name":"Padgett Beaven","carrier":"StateFarm","policyNumber":"2817571134","lob":"Auto (Home)","effectiveDate":"7/9/2017 10:18 AM"},
        {"name":"Blanch Horder","carrier":"MetLife","policyNumber":"8614972903","lob":"Auto (Home)","effectiveDate":"12/31/2016 1:48 PM"},
        {"name":"Rochette Scrymgeour","carrier":"MetLife","policyNumber":"0408243376","lob":"Auto (Home)","effectiveDate":"7/29/2017 7:09 PM"},
        {"name":"Sari Nesbeth","carrier":"Kemper","policyNumber":"6010368065","lob":"Auto (Commercial)","effectiveDate":"5/1/2017 11:16 AM"},
        {"name":"Ana Sidary","carrier":"Kemper","policyNumber":"1194472540","lob":"Auto (Commercial)","effectiveDate":"10/9/2017 2:54 AM"},
        {"name":"Larry Schultze","carrier":"SafeCo","policyNumber":"2892867975","lob":"Auto (Commercial)","effectiveDate":"1/22/2017 10:46 AM"},
        {"name":"Ynez Cristofano","carrier":"MetLife","policyNumber":"0327380020","lob":"Auto (Commercial)","effectiveDate":"1/14/2017 1:58 PM"},
        {"name":"Randolf Samson","carrier":"StateFarm","policyNumber":"3616149118","lob":"Auto (Home)","effectiveDate":"10/9/2017 8:55 AM"},
        {"name":"Mada Pooly","carrier":"MetLife","policyNumber":"3194663690","lob":"Auto (Home)","effectiveDate":"4/12/2017 9:03 AM"}
    ]
};
