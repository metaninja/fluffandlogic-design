function formatDate(input) {
    var text = input.value.split('/').join("");
    var month = text.substr(0,2);
    var day = text.substr(2,2);
    if (text.length  === 6) {
        var year = text.substr(4,2);
        var thisYear = (new Date().getFullYear()).toString().slice(-2);
        if (year >= '00' && year <= thisYear) {
            year = '20' + year;
        } else {
            year = '19' + year;
        }
    } else {
        year =  text.slice(4);
    }

    text = month + "/" + day + "/" + year;
    input.value = text;

}

function formatSSN(input) {
    var text = input.value.split('-').join("");
    if (input.value.length === 9) {
        text = text.substr(0,3) + "-" + text.substr(3,2) + "-" + text.substr(5);
        input.value = text;
    }
}