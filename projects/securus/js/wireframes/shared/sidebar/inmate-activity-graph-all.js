var Ngscp = Ngscp || {};
Ngscp.Wireframes = Ngscp.Wireframes || {};
Ngscp.Wireframes.Shared = Ngscp.Wireframes.Shared || {};

Ngscp.Wireframes.Shared.InmateActivityGraphForAll = function () {
    function initializeBarChart() {
        var barChartData = {
            labels: ['Mon.', 'Tues.', 'Wed.', 'Thurs', 'Fri.', 'Sat.', 'Sun.'],
            datasets: [{
                label: 'Visits',
                fillColor: 'rgba(0, 116, 200, .6)',
                highlightFill: 'rgba(0, 116, 200, .2)',
                data: [31, 41, 32, 72, 77, 43, 66]

            }, {
                label: 'Calls',
                fillColor: 'rgba(0, 116, 200, 1.0)',
                highlightFill: 'rgba(0, 116, 200, .6)',
                data: [43, 67, 49, 70, 55, 23, 77]
            }]
        };

        var barChartCanvasContext = document.getElementById('inmateActivityAllPartiesBarChartCanvas').getContext('2d');

        // TODO: Fix this for resizing:
        // http://stackoverflow.com/questions/19847582/chart-js-canvas-resize
        barChartCanvasContext.canvas.height = 450;
        barChartCanvasContext.canvas.height = 250;

        var barChart = new Chart(barChartCanvasContext).StackedBar(barChartData, {
            scaleFontColor: '#555',
            responsive: true,
            barShowStroke: false,
            tooltipTitleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif",
            scaleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif"
        });
    }

    function refreshChart() {
        // Do it twice because Chart.js is retarded and isn't designed to redraw to the same canvas
        initializeBarChart();
        initializeBarChart();
    }

    function init() {
        initializeBarChart();
    }

    init();

    return  {
        refreshChart: refreshChart
    }
}();

//# sourceURL=js/wireframes/shared/sidebar/inmate-activity-graph-all.js