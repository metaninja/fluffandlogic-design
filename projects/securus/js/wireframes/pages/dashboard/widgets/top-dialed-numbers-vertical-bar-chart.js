(function () {
    function initializeBarChartWithChartJs() {
        var barChartData = {
            labels: ['(532) 536-9821', '(144) 345-7173', '(661) 455-1634', '(323) 616-7654', '(214) 441-2351'],
            //labels: ['', '', '', '', ''],
            datasets: [
                {
                    label: 'Alerts',
                    fillColor: 'rgba(0, 116, 200, .6)',
                    highlightFill: 'rgba(0, 116, 200, .2)',
                    data: [13, 9, 8, 5, 5]
                }
            ]
        };

        var options = {
            scaleFontColor: '#555',
            responsive: true,
            barShowStroke: false,
            tooltipTitleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif",
            scaleFontFamily: "'Source Sans Pro', Arial, Helvetica, sans-serif",
            multiTooltipTemplate: '<%= datasetLabel %> - <%= value %>'
        };

        var context = document.getElementById('topDialedNumbersVerticalBarChartCanvas').getContext('2d');

        var covertAlertBarChart = new Chart(context).Bar(barChartData, options);
    }

    function initializeBarChartWithHighcharts() {
        $('#topDialedNumbersVerticalBarChartContainer').highcharts({
            chart: {
                type: 'column',
                height: 200,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: [
                    '(532) 536-9821', '(144) 345-7173', '(661) 455-1634', '(323) 616-7654', '(214) 441-2351'
                ],
                title: null,
                labels: {
                    enabled: false
                },
                tickLength: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                tickInterval: 2
            },
            tooltip: {
                valueSuffix: ' times in the last 7 days',
                borderRadius: 5,
                borderWidth: 0
            },
            plotOptions: {
                series: {
                    groupPadding: 0.1,
                    animation: {
                        duration: 2000,
                        easing: 'easeOutBounce'
                    }
                },
                column: {
                    color: 'rgba(0, 116, 200, .6)',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Total',
                data: [13, 9, 8, 5, 5]
            }],
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
    }

    function init() {
        //initializeBarChartWithChartJs();
        initializeBarChartWithHighcharts();
    }

    init();
}());

//# sourceURL=js/wireframes/pages/dashboard/widgets/top-dialed-numbers-vertical-bar-chart.js