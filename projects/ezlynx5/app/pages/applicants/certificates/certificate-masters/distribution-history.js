$(document).ready(function() {
    var distributionHistory = {
        distributionHistory: [
            {
                type: 'Date Sent',
                date: "2/1/2018 12:53pm",
                distributionMethod: "Email",
                destination: 'jane.smith@capitalone.com',
                actions: true
            },
            {
                type: 'Date Sent',
                date: "3/3/2018 9:01am",
                distributionMethod: "Email",
                destination: 'jane.smith@capitalone.com',
                actions: true
            }
        ]
    };

    var distributionHistoryTemplateScript = $("#distribution-history-template").html();
    var distributionHistoryTemplate = Handlebars.compile(distributionHistoryTemplateScript);
    var distributionHistoryData = distributionHistoryTemplate(distributionHistory);
    $('#distribution-history').append(distributionHistoryData);
});

// {
//     type: 'Date Edited',
//         date: "11/12/2016 5:22pm",
//     byUser: "Erin Holder"
// },
// {
//     type: 'Date Viewed',
//         date: "11/5/2016 2:11pm",
//     byUser: "Erin Holder"
// },
