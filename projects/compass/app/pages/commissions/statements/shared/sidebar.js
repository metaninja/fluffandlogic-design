(function() {
    $(document).ready(function() {
        $('#premium-range-slider').slider({
            range: true,
            min: 0,
            max: 100000,
            values: [0,100000],
            slide: function(event, ui) {
                var text = "$" + ui.values[0] + " - $" + ui.values[1];
                $('#premium-amount').text(text);
            }
        });
        $('#premium-amount').text( '$' + $('#premium-range-slider').slider('values', 0 ) + ' - $' + $('#premium-range-slider').slider('values', 1) );

        $('#commission-range-slider').slider({
            range: true,
            min: 0,
            max: 10000,
            values: [0,10000],
            slide: function(event, ui) {
                var text = "$" + ui.values[0] + " - $" + ui.values[1];
                $('#commission-amount').text(text);
            }
        });
        $('#commission-amount').text( '$' + $('#commission-range-slider').slider('values', 0 ) + ' - $' + $('#commission-range-slider').slider('values', 1) );
    });
})();
