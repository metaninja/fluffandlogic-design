// Define a plugin to provide data labels

function formatNumber(number) {
    return "$" + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var chartStyles = {
    fontSize: 12,
    fonstStyle: 'normal',
    fontFamily: 'Open Sans',
    padding: 3
};

Chart.plugins.register({
    afterDatasetsDraw: function(chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function(element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgba(0,77,64,1)';

                    var fontSize = chartStyles.fontSize;
                    var fontStyle = chartStyles.fontStyle;
                    var fontFamily = chartStyles.fontFamily;
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                });
            }
        });
    }
});

var amountInDollars = {
    afterDatasetsDraw: function(chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function(element, index) {
                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString();

                    var position = element.tooltipPosition();

                    ctx.fillText(formatNumber(dataString), position.x, position.y - (chartStyles.fontSize / 2) - chartStyles.padding);
                });
            }
        });
    }
};

var amountInPercent = {
    afterDatasetsDraw: function(chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function(element, index) {
                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString();

                    var position = element.tooltipPosition();
                    
                    ctx.fillText(dataString + "%", position.x, position.y - (chartStyles.fontSize / 2) - chartStyles.padding);
                });
            }
        });
    }
};
