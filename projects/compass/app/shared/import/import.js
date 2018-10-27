function ImportFile( settings ) {
    $.getJSON( settings, function(data) {
        var items = [];
        $.each(data, function( key, val ) {
            localStorage.setItem(key, val);
        });
        location.hash = "#/app/shared/import/upload/index.html";
    });
}