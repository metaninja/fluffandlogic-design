var timeouts = [];
for (var i=0; i<11; i++) {
    timeouts[i] = (Math.random() * 4) * 1000 + 1000;
}

setTimeout(function() { $('.js-1').hide(100); loadNumberWidget1() }, timeouts[0]);
setTimeout(function() { $('.js-2').hide(100); loadNumberWidget2() }, timeouts[1]);
setTimeout(function() { $('.js-3').hide(100); loadNumberWidget3() }, timeouts[2]);
setTimeout(function() { $('.js-4').hide(100); loadNumberWidget4() }, timeouts[3]);
setTimeout(function() { $('.js-5').hide(100); loadChart0() }, timeouts[4]);
setTimeout(function() { $('.js-6').hide(100); loadChart1() }, timeouts[5]);
setTimeout(function() { $('.js-7').hide(100); loadChart2() }, timeouts[6]);
setTimeout(function() { $('.js-8').hide(100); $('.js-bar4').addClass('chart-horizontal-bar'); }, timeouts[7]);
setTimeout(function() { $('.js-9').hide(100); $('.js-bar2').addClass('chart-horizontal-bar'); }, timeouts[8]);
setTimeout(function() { $('.js-10').hide(100); $('.js-bar3').addClass('chart-horizontal-bar'); }, timeouts[9]);
setTimeout(function() { $('.js-11').hide(100); $('.js-bar1').addClass('chart-horizontal-bar'); }, timeouts[10]);

function loadNumberWidget1() {
    animateNumberWidget('#pif-animated');
}

function loadNumberWidget2() {
    animateNumberWidget('#premium-to-date-animated');
}

function loadNumberWidget3() {
    animateNumberWidget('#average-policies-customer-animated');
}

function loadNumberWidget4() {
    animateNumberWidget('#average-policies-agency-animated');
}

function loadChart0() {
    var ctx0 = document.getElementById("policy-distribution-by-carrier");
    var Chart0 = new Chart(ctx0, {
        type: 'bar',
        plugins: [amountInDollars],
        data: {
            labels: [
                "AARP",
                "ACE",
                "Acuity",
                "The Hartford",
                "Safeco Insur...",
                "TIAA-CREF",
                "Travelers",
                "Allied Insurance",
                "Mercury Insura.."
            ],
            datasets: [
                {
                    label: ' ',
                    data: [ 7000,5000,6020,7890,12342,8760,13145,17156,16435],
                    backgroundColor: [
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                    ]
                }
            ]
        }
    });
}

function loadChart1() {
    var ctx1 = document.getElementById("personal-commercial");
    var Chart1 = new Chart(ctx1, {
        plugins: [amountInPercent],
        type: 'doughnut',
        data: {
            labels: [
                "Personal",
                "Commercial"
            ],
            datasets: [
                {
                    label: ' ',
                    data: [ 77.34, 22.66],
                    backgroundColor: [
                        'rgba(118, 183, 172, 1)',
                        'rgba(76, 175, 80, 1)',
                    ]
                }
            ]
        }
    });
}

function loadChart2() {
    var ctx2 = document.getElementById("premium-by-lob");
    var Chart2 = new Chart(ctx2, {
        type: 'bar',
        plugins: [amountInDollars],
        data: {
            labels: [
                "Fire",
                "Multiple Peril Crop",
                "Federal Flood",
                "Mortgage guaranty",
                "Inland marine  ",
                "Financial guaranty",
                "Earthquake",
                // "Disability",
                // "Workers' compensation ",
                // "Products liability "
            ],
            datasets: [
                {
                    type: 'bar',
                    label: 'Current Year',
                    data: [ 20000,23200,15020,53450,24500,18760,52340],//,71234,39000,46570
                    backgroundColor: [
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(0, 77, 64, 1)',
                        'rgba(76, 175, 80, 1)',
                    ]
                }
            ]
        }
    });
}






