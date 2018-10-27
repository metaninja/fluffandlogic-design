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
    animateNumberWidget('#loss-ratio-animated');
}

function loadNumberWidget1() {
    animateNumberWidget('#commission-to-date-animated');
}

function loadNumberWidget1() {
    animateNumberWidget('#book-value-animated');
}

function loadNumberWidget1() {
    animateNumberWidget('#close-ratio-animated');
}

function loadChart0() {
    var ctx0 = document.getElementById("premium-by-lob");
    var Chart0 = new Chart(ctx0, {
        type: 'doughnut',
        plugins: [amountInPercent],
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
                    label: ' ',
                    data: [ 20000,23200,15020,53450,24500,18760,52340],//,71234,39000,46570
                    backgroundColor: [
                        'rgba(74, 154, 141, 1)',
                        'rgba(118, 183, 172, 1)',
                        'rgba(0, 121, 107, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(129, 199, 132, 1)',
                        'rgba(147, 204, 140, 1)',
                    ]
                }
            ]
        }
    });
}

function loadChart1() {
    var config1 = {
        type: 'line',
        plugins: [amountInPercent],
        data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [{
                label: "Prior Year",
                backgroundColor: 'rgba(147, 204, 149, 1)',
                borderColor: 'rgba(147, 204, 149, 1)',
                data: [
                    40,
                    35,
                    29,
                    25,
                    29,
                    19,
                    24,
                ],
                fill: false,
            }, {
                label: "Current Year",
                fill: false,
                backgroundColor: 'rgba(0, 77, 64, 1)',
                borderColor: 'rgba(0, 77, 64, 1)',
                data: [
                    31,
                    24,
                    25,
                    17,
                    25,
                    14,
                    16,
                ],
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    };
    var ctx1 = document.getElementById("book-value").getContext("2d");
    window.myLine = new Chart(ctx1, config1);
}

// function loadChart2() {
//     var ctx2 = document.getElementById("losses-ytd").getContext("2d");
//     var config1 = {
//         type: 'line',
//         plugins: [amountInDollars],
//         data: {
//             labels: ["January", "February", "March", "April", "May", "June", "July"],
//             datasets: [{
//                 label: " ",
//                 backgroundColor: 'rgba(147, 204, 149, 1)',
//                 borderColor: 'rgba(147, 204, 149, 1)',
//                 data: [
//                     400,
//                     780,
//                     840,
//                     880,
//                     910,
//                     1040,
//                     1120,
//                 ],
//                 fill: false,
//             }]
//         },
//         options: {
//             responsive: true,
//             tooltips: {
//                 mode: 'index',
//                 intersect: false,
//             },
//             hover: {
//                 mode: 'nearest',
//                 intersect: true
//             },
//             scales: {
//                 xAxes: [{
//                     display: true,
//                     scaleLabel: {
//                         display: true,
//                         labelString: 'Month'
//                     }
//                 }],
//                 yAxes: [{
//                     display: true,
//                     scaleLabel: {
//                         display: true,
//                         labelString: 'Value'
//                     }
//                 }]
//             }
//         }
//     };
//     window.myLine = new Chart(ctx2, config1);
// }










