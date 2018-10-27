var scoreInterval;

function animateNumberWidget(id) {
    var valueTag = $(id);
    var prepend = valueTag.data('prepend') || false;
    var append = valueTag.data('append') || false;
    var value = Number(valueTag.data('value'));

    var displayedValue = 0;
    var time = 30;
    var increment = value / time;
    increment = (increment >= 1) ? increment : 1;

    function formatValue(value) {
        if (prepend) {
            return prepend + (value).toLocaleString();
        } else if (append) {
            return value.toLocaleString() + append;
        } else {
            return value.toLocaleString();
        }
    }

    function incrementScore() {

        if (displayedValue >= value) {
            displayedValue = value;
            valueTag.text(formatValue(displayedValue));
            clearInterval(scoreInterval);
            return false;
        }
        else {
            displayedValue = Math.floor(displayedValue + increment);
            valueTag.text(formatValue(displayedValue));
        }
    };

    scoreInterval = setInterval(incrementScore, time);

    // $('.marker').addClass('grow').removeClass('scale0');
}
