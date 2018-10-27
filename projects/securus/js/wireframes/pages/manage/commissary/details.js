$('.confirm-order').click(function() {
    $(this).toggleClass('confirmed');
    $('.confirmed-date').toggleClass('hide');
});

$('.btn-print').click(function() {
    var printSettings = 'toolbar=yes, location=no, directories=no, status=no, scrollbars=yes, resizable=yes, width=800, height=600, top=10';
    var win = window.open('', 'Commissary Request for [Inmate]', printSettings);
    win.document.body.innerHTML = $('.commissary-detail').html();
    var stylesheet = document.createElement('style');

    $.get('../stylesheets/main.css', function(data) {

        stylesheet.appendChild(document.createTextNode(data));
        stylesheet.appendChild(document.createTextNode('body { padding: 20px; }'));
        stylesheet.appendChild(document.createTextNode('.commissary-shopping-cart td:first-child:before { content:""; border-radius: 2px; border: 1px solid #999; width: 10px; height: 10px; display: inline-block; margin-right: 10px; }'));
        win.document.head.appendChild(stylesheet);

    });
});


//# sourceURL=js/wireframes/pages/manage/commissary/details.js