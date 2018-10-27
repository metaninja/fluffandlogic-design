var selectedTemplate = $('templates').find('label').clone();
var matchingTemplate = $('templates').find('result').clone();
var searchTemplate = $('templates').find('search').clone();

$('.labels-selected').append(searchTemplate.html());

var available = [
    'Austin',
    'Dallas',
    'Plano',
    'Round Rock',
    'Frisco',
    'Coppell'
];
var matching = [];
var selected = [];

function searchLabels(text, e) {
    $('.labels-search-results').html('');
    matching = [];
    $('.labels-dropdown').addClass('show');

    available.forEach(function(value) {
        if (value.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
            matching.push(value);
        }
    });

    if (matching.length > 0) {
        $('.btn-label-new').removeClass('show');

        matching.forEach(function(value) {
            matchingTemplate.find('.labels-search-result').html(value);
            $('.labels-search-results').append(matchingTemplate.html());
        });
    }
    else {
        $('.btn-label-new').addClass('show');
    }

    if (e.keyCode === 13) {
        newLabel();
    }

}

function addLabel(result) {
    selected.push($(result).html());
    renderSelectedLabels();
    console.log(selected);
}

function newLabel() {
    selected.push($('.labels-search').val());
    renderSelectedLabels();
    console.log(selected);
}

function removeLabel(btn) {
    var label = $(btn).parents('.label').find('.label-text').text();
    selected.forEach(function(value, index) {
        if (value === label) {
            selected.splice(index, 1);
        }
    });
    renderSelectedLabels();
}

function renderSelectedLabels() {
    $('.labels-search').val('').focus();
    $('.labels-selected').html('');
    $('.labels-dropdown').removeClass('show');
    selected.forEach(function(value) {
        selectedTemplate.find('.label-text').html(value);
        $('.labels-selected').append(selectedTemplate.html());
    });

    $('.labels-selected').append(searchTemplate.html());
    $('.labels-search').focus();
}

