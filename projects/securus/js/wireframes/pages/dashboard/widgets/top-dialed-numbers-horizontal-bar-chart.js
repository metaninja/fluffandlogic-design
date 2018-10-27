(function () {
    function initializeChart() {
        $('#topDialedNumbersHorizontalBarChartCanvas').highcharts({
            title: {
                text: null
            },
            chart: {
                type: 'bar',
                height: 200,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            },
            xAxis: {
                categories: ['(532) 536-9821', '(144) 345-7173', '(661) 455-1634', '(323) 616-7654', '(214) 441-2351'],
                title: {
                    text: null
                },
                labels: {
                    rotation: -10,
                    style: {
                        'font-size': '10px'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                labels: {
                    overflow: 'justify'
                },
                tickInterval: 2
            },
            tooltip: {
                valueSuffix: ' calls',
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
                bar: {
                    color: 'rgba(0, 116, 200, .6)',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Phone Number Count',
                data: [13, 9, 8, 5, 5]
            }],
            exporting: {
                enabled: false
            }
        });
    }

    function init() {
        initializeChart();
    }

    init();
}());

//# sourceURL=js/wireframes/pages/dashboard/widgets/top-dialed-numbers-horizontal-bar-chart.js