$(document).ready(function() {
    var history = {
        history: [
            {
                Started: "8/18/2017 4:10:28 PM",
                Finished: "8/18/2017 4:10:29 PM",
                Status: "Success",
                Message: "1 file(s) successfully received"
            },
            {
                Started: "8/18/2017 4:10:28 PM",
                Finished: "8/18/2017 4:10:29 PM",
                Status: "Success",
                Message: "Inbox is empty"
            },
            {
                Started: "8/18/2017 4:10:28 PM",
                Finished: "8/18/2017 4:10:29 PM",
                Status: "Success",
                Message: "Inbox is empty"
            },
            {
                Started: "8/18/2017 4:10:28 PM",
                Finished: "8/18/2017 4:10:29 PM",
                Status: "Success",
                Message: "Inbox is empty"
            },
            {
                Started: "8/18/2017 4:10:28 PM",
                Finished: "8/18/2017 4:10:29 PM",
                Status: "Success",
                Message: "Inbox is empty"
            },
            {
                Started: "8/18/2017 4:10:28 PM",
                Finished: "8/18/2017 4:10:29 PM",
                Status: "Success",
                Message: "Inbox is empty"
            },
            {
                Started: "8/18/2017 4:10:28 PM",
                Finished: "8/18/2017 4:10:29 PM",
                Status: "Success",
                Message: "Inbox is empty"
            },

        ]
    };

    var historyTemplateScript = $("#history-template").html();
    var historyTemplate = Handlebars.compile(historyTemplateScript);
    var historyData = historyTemplate(history);
    $('#history').append(historyData);
});