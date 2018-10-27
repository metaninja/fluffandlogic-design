(function() {
    $(document).ready(function() {
        $('.js-persona').addClass('hidden');
        var username = localStorage.getItem('username');
        // bff.setData('username', username);

        switch(username) {
            case 'superuser':
                $('.js-persona-superuser').removeClass('hidden');
                break;
            case 'map':
            case 'mapadmin':
            case 'map-admin':
            default:
                $('.js-persona-map-admin').removeClass('hidden');
        }
    });
})();
