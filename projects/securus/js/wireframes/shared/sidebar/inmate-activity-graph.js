(function () {
    function initializeChart() {
        var barChartData = {
            labels: ['Mon.', 'Tues.', 'Wed.', 'Thurs', 'Fri.', 'Sat.', 'Sun.'],
            datasets: [{
                label: 'Visits',
                fillColor: 'rgba(0, 116, 200, .6)',
                highlightFill: 'rgba(0, 116, 200, .2)',
                data: [2, 1, 5, 2, 4, 4, 1]

            }, {
                label: 'Calls',
                fillColor: 'rgba(0, 116, 200, 1.0)',
                highlightFill: 'rgba(0, 116, 200, .6)',
                data: [1, 2, 1, 3, 4, 1, 2]
            }]
        };

        var canvas = document.getElementById('inmateActivityBarChartCanvas');
        //canvas.width = ;
        //canvas.height = ;

        var ctx = canvas.getContext('2d');

        var barChart = new Chart(ctx).StackedBar(barChartData, {
            scaleFontColor: '#555',
            responsive: true,
            barShowStroke: false,
            tooltipTitleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif",
            scaleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif"
        });
    }

    function init() {
        initializeChart();
    }

    init();
}());

//# sourceURL=js/wireframes/shared/sidebar/inmate-activity-graph.js