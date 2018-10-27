var Ngscp = Ngscp || {};
Ngscp.Wireframes = Ngscp.Wireframes || {};

Ngscp.Wireframes.Highcharts = function () {
    function getDefaultChartOptions() {
        var chartOptions = {
            chart: {
                height: 200,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            },
            title: {
                text: null
            },
            tooltip: {
                borderRadius: 5,
                borderWidth: 0
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        };

        return chartOptions;
    }

    return  {
        getDefaultChartOptions: getDefaultChartOptions
    }
} ();

// #sourceURL=js/wireframes/Ngscp.Wireframes.Highcharts.js

//# sourceURL=js/wireframes/Ngscp.Wireframes.Highcharts.js