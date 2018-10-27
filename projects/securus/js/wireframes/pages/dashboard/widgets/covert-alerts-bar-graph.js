(function () {
    var _highchartsManager = Ngscp.Wireframes.Highcharts;

    function getBarChartDateLabels() {
        var barChartDateLabels = [];

        // Generate labels for the past 7 days
        for (var i = 0; i < 7; i++) {
            var currentDate = new Date();
            var numberOfDaysToAdd = -i;
            currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);

            var month = currentDate.getMonth() + 1;
            var day = currentDate.getDate();
            var dateLabel = month + '/' + day;

            barChartDateLabels.push(dateLabel);
        }

        barChartDateLabels.reverse();

        return barChartDateLabels;
    }

    function initializeBarChartWithChartJs() {
        var barChartDateLabels = getBarChartDateLabels();

        var barChartData = {
            labels: barChartDateLabels,
            datasets: [
                {
                    label: "Alerts",
                    fillColor: "rgba(242, 97, 34, .6)",
                    data: [1, 4, 2, 7, 10, 3, 8]
                }
            ]
        };

        var context = document.getElementById("covertAlertBarChartCanvas").getContext("2d");

        var covertAlertBarChart = new Chart(context).Bar(barChartData, {
            scaleFontColor: "#555",
            responsive: true,
            barShowStroke: false,
            tooltipTitleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif",
            scaleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif"
        });
    }

    function initializeBarChartWithHighcharts() {
        var barChartDateLabels = getBarChartDateLabels();

        var defaultChartOptions = _highchartsManager.getDefaultChartOptions();

        defaultChartOptions.chart.type = 'column';
        defaultChartOptions.xAxis = {
            categories: barChartDateLabels,
            title: null,
            labels: {
                //enabled: false,
                //rotation: 0,
                staggerLines: 2,
                style: {
                    //'font-size': '8px'
                }
            }//,
            //tickLength: 0
        };
        defaultChartOptions.yAxis = {
            min: 0,
                title: {
                text: null
            },
            tickInterval: 2
        };
        defaultChartOptions.tooltip.valueSuffix = ' in the last 7 days';
        defaultChartOptions.plotOptions = {
            series: {
                groupPadding: 0.1,
                animation: {
                    duration: 500//,
                    //easing: 'easeOutBounce'
                }
            },
            column: {
                color: 'rgba(242, 97, 34, .6)',
                    dataLabels: {
                    enabled: false
                }
            }
        };
        defaultChartOptions.series = [{
            name: 'Alerts',
            data: [1, 4, 2, 7, 10, 3, 8]
        }];

        $('#covertAlertBarChartContainer').highcharts(defaultChartOptions);
    }

    function init() {
        //initializeBarChartWithChartJs();
        initializeBarChartWithHighcharts();
    }

    init();
}());

//# sourceURL=js/wireframes/pages/dashboard/widgets/covert-alerts-bar-graph.js