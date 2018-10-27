var selected = [];

function toggleRow(index, checkbox) {
    if ($(checkbox).is(":checked")) {
        selected.push(index);
    }
    else {
        for (var i=0; i<selected.length; i++) {
            if (selected[i] === index) {
                selected.splice(i,1);
            }
        }
    }
    console.log(selected);

}
