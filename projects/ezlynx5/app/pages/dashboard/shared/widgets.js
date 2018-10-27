function addData(chart, label, data) {
    // config1.data.labels.push(label);
    // config1.data.datasets.forEach((dataset) => {
    //     dataset.data.push(Math.round(Math.random() * 30) + 1);
    //     dataset.data.shift();
    // });
    // window.myLine.update();
}

var config1 = {
    type: 'line',
    plugins: [wholeNumber],
    data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "Agent 1",
            backgroundColor: 'rgba(147, 204, 149, 1)',
            borderColor: 'rgba(147, 204, 149, 1)',
            data: [
                40,
                35,
                29,
                25,
                29
            ],
            fill: false,
        }, {
            label: "Agent 2",
            fill: false,
            backgroundColor: 'rgba(0, 77, 64, 1)',
            borderColor: 'rgba(0, 77, 64, 1)',
            data: [
                31,
                24,
                25,
                17,
                25
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

var ctx1 = document.getElementById("total-activities-by-agent").getContext("2d");
window.myLine = new Chart(ctx1, config1);

setInterval(addData, 5000);


var ctx2 = document.getElementById("sum-of-agency-commission").getContext("2d");
var Chart0 = new Chart(ctx2, {
    type: 'bar',
    plugins: [addDataTogeather],
    data: {
        labels: ["Abbott Group", "Allied", "Balistreri LLC", "Bayer Inc", "Fay and Sons"],
        datasets: [{
            label: "Email",
            backgroundColor: 'rgba(74, 154, 141, 1)',
            borderColor: 'rgba(74, 154, 141, 1)',
            data: [
                40,
                35,
                29,
                25,
                29
            ],
            fill: false,
        },
        {
            label: "Note",
            fill: false,
            backgroundColor: 'rgba(118, 183, 172, 1)',
            borderColor: 'rgba(118, 183, 172, 1)',
            data: [
                31,
                24,
                25,
                17,
                25
            ],
        },
        {
            label: "Task",
            fill: false,
            backgroundColor: 'rgba(0, 121, 107, 1)',
            borderColor: 'rgba(0, 121, 107, 1)',
            data: [
                31,
                10,
                10,
                10,
                10
            ],
        },
        {
            label: "TestMsg",
            fill: false,
            backgroundColor: 'rgba(76, 175, 80, 1)',
            borderColor: 'rgba(76, 175, 80, 1)',
            data: [
                41,
                62,
                12,
                32,
                23
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
                    labelString: ''
                },
                stacked: true
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Activities'
                },
                stacked: true
            }]
        }
    }
});

var ctx3 = document.getElementById("premium-by-agent");
var Chart1 = new Chart(ctx3, {
    type: 'doughnut',
    plugins: [wholeNumber],
    data: {
        labels: [
            "All Others",
            "Lost ID Card",
            "New Customer",
            "Update Info",
            "Call Back",
            "Policy Changes"
        ],
        datasets: [
            {
                label: ' ',
                data: [ 20000,23200,15020,53450,24500,18760],
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

var ctx4 = document.getElementById("activities-by-type");
var Chart2 = new Chart(ctx4, {
    type: 'doughnut',
    plugins: [wholeNumber],
    data: {
        labels: [
            "Note",
            "Email",
            "Unknown",
            "Text Messages"
        ],
        datasets: [
            {
                label: ' ',
                data: [ 200,230,120,350],
                backgroundColor: [
                    'rgba(74, 154, 141, 1)',
                    'rgba(118, 183, 172, 1)',
                    'rgba(0, 121, 107, 1)',
                    'rgba(76, 175, 80, 1)'
                ]
            }
        ]
    }
});

var ctx5 = document.getElementById("high-vs-low-risk");
var Chart3 = new Chart(ctx5, {
    type: 'doughnut',
    plugins: [wholeNumber],
    data: {
        labels: [
            "High",
            "Low"
        ],
        datasets: [
            {
                label: ' ',
                data: [230, 350],
                backgroundColor: [
                    'rgba(74, 154, 141, 1)',
                    'rgba(118, 183, 172, 1)'
                ]
            }
        ]
    }
});