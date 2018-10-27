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
setTimeout(function() { $('.js-7').hide(100); loadChart3() }, timeouts[7]);
setTimeout(function() { $('.js-8').hide(100); $('.js-bar1').addClass('chart-horizontal-bar'); }, timeouts[8]);

function loadNumberWidget1() {
    animateNumberWidget('#pif-animated');
}

function loadNumberWidget2() {
    animateNumberWidget('#book-value-animated');
}

function loadNumberWidget3() {
    animateNumberWidget('#loss-ratio-animated');
}

function loadNumberWidget4() {
    animateNumberWidget('#performance-score-animated');
}

function loadChart0() {
    var config2 = {
        type: 'line',
        plugins: [amountInDollars],
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: " ",
                backgroundColor: 'rgba(147, 204, 149, 1)',
                borderColor: 'rgba(147, 204, 149, 1)',
                data: [
                    900,
                    1100,
                    1400,
                    1200,
                    1400,
                    1500,
                    1400,
                ],
                fill: false,
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
    var ctx2 = document.getElementById("monthly-production").getContext("2d");
    window.myLine = new Chart(ctx2, config2);
}

function loadChart1() {
    var config1 = {
        type: 'line',
        plugins: [amountInDollars],
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Prior Year",
                backgroundColor: 'rgba(147, 204, 149, 1)',
                borderColor: 'rgba(147, 204, 149, 1)',
                data: [
                    900,
                    1100,
                    1400,
                    1200,
                    1400,
                    1500,
                    1400,
                ],
                fill: false,
            }, {
                label: "Current Year",
                fill: false,
                backgroundColor: 'rgba(0, 77, 64, 1)',
                borderColor: 'rgba(0, 77, 64, 1)',
                data: [
                    1100,
                    1700,
                    1800,
                    1900,
                    1800,
                    1900,
                    1600,
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

function loadChart2() {
    var ctx3 = document.getElementById("policy-distribution-by-carrier");
    var Chart3 = new Chart(ctx3, {
        type: 'pie',
        plugins: [amountInPercent],
        data: {
            labels: ["The Hartford", "Mercury Insurance", "Allied Insurance", "Safeco Insurance", "Travelers"],
            datasets: [
                {
                    label: '%',
                    data: [256,445,350,401,190],
                    backgroundColor: [
                        'rgba(74, 154, 141, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(118, 183, 172, 1)',
                        'rgba(129, 199, 132, 1)',
                        'rgba(0, 121, 107, 1)',
                        'rgba(147, 204, 140, 1)',
                    ]
                }
            ]
        }
    });
}

function loadChart3() {
    var ctx6 = document.getElementById("premium-by-lob");
    var Chart6 = new Chart(ctx6, {
        type: 'doughnut',
        plugins: [amountInPercent],
        data: {
            labels: ["Auto (Commercial)", "Auto (Personal)", "Casualty", "Inland Marine", "BOP"],
            datasets: [
                {
                    label: '%',
                    data: [81.5, 79.9, 73.5, 68.2, 65.5],
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
