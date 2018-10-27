(function () {
    var barChartData = {
        labels: ['Mon.', 'Tues.', 'Wed.', 'Thurs', 'Fri.', 'Sat.', 'Sun.'],
        datasets: [{
            label: 'Visits',
            fillColor: 'rgba(0, 116, 200, .6)',
            highlightFill: 'rgba(0, 116, 200, .2)',
            data: [312, 552, 231, 200, 442, 390, 160]

        }, {
            label: 'Calls',
            fillColor: 'rgba(0, 116, 200, 1.0)',
            highlightFill: 'rgba(0, 116, 200, .6)',
            data: [1442, 2996, 2452, 3142, 2235, 1234, 3943]
        }]
    };

    var ctx = document.getElementById('canvas').getContext('2d');
    var chart = new Chart(ctx).StackedBar(barChartData, {
        scaleFontColor: '#555',
        responsive: true,
        barShowStroke: false,
        tooltipTitleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif",
        scaleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif"
    });
}());

//# sourceURL=js/wireframes/pages/dashboard/widgets/site-activity.js