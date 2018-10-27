hash = location.hash;
query = hash.substr(hash.indexOf('?') + 1);
if (query.toLowerCase() === 'reveal') {
    $('.version-bg').show();
}

function Reveal() {
    $('.version-bg').addClass('reveal');
    setTimeout(
        function() {
            $('.version-bg').hide();
        }, 2000);
}