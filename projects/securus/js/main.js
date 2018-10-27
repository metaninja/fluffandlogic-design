function countUp(element) {
    var count = parseInt($(element).data('count')) || Math.random() * 1000,
        interval = 50, //milliseconds
        times = 30, //interval * times = total seconds of animations
        speed = count / times,
        currentCount = 0;

    var increment = setInterval(function () {

        $(element).text(Math.floor(currentCount));

        if (currentCount > count) {
            currentCount = count;
            clearInterval(increment);
        }
        else {
            currentCount += speed;
        }

//        console.log("Speed: " + speed);
//        console.log("Current count: " + Math.floor(currentCount));
//        console.log("Final count: " + count);
    }, interval);
}

// ----------------------------------------
//           Cookies
// ----------------------------------------
function createCookie(name, value, days) {
  var expires, date;

  if (days) {
    date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = encodeURI(name) + "=" + encodeURI(value) + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURI(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURI(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}
// ----------------------------------------


$(document).ready(function() {

    //------ Mgmt Level Context Dropdown ------
    $('.mgmt-level-dropdown').hide();

    $('.dropdown-toggle.mgmt-level').click(function() {
        $("a:contains('Mgmt Level')").parents('li').addClass('active');
        //$('.mgmt-level-dropdown').show();
        $('.mgmt-level-dropdown-global-nav').show();
    });

    $('.cancel-mgmt-context').click(function() {
        $("a:contains('Mgmt Level')").parents('li').removeClass('active');
        //$('.mgmt-level-dropdown').hide();
        $('.mgmt-level-dropdown-global-nav').hide();
    });

    $('.update-mgmt-context').click(function() {
       //$('.mgmt-level-dropdown').hide();
        $('.mgmt-level-dropdown-global-nav').hide();

    });
    //------ Mgmt Level Context Dropdown ------


    //----- Show busy indicator, then results -----

   $('.busy').hide();

    var showResults = function() {
        $('.results').hide();
        $('.busy').show();
        var showResultsTimeout = setTimeout(function() {
            $('.results').show();
            $('.busy').hide();
            //Count up results
            //countUp('.results-number');
        }, 500);
    };

    $('.btn-search').click(function() {
        showResults();
    });

    showResults();

});
