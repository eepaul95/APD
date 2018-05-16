(function(){
"use strict";

var legislators = new Bloodhound({
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: "/search/autocomplete?q=%QUERY",
        wildcard: "%QUERY"
    }
});

var states = new Bloodhound({
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    local: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
});

$('.main-search').typeahead({
    highlight: true,
}, {
    name: 'legislator-name',
    source: legislators,
    displayKey: '0',
    templates: {
        header: '<h3 class="tt-suggestion">Legislators</h3>',
        suggestion: function (name) {
            return '<p>' + name[0] + '</p>';
        }
    }
}, {
    name: 'states',
    source: states,
    templates: {
        header: '<h3 class="tt-suggestion">States</h3>',
        suggestion: function (name) {
            return '<p>' + name + '</p>';
        }
    }
    
/*}, {
    name: 'middlename',
    source: middlename
    */
});

$('.main-search').on('typeahead:selected', function(e, it0, it1) {
    // CAUTION: if it1 is empty, it's a state. if it1 is bioguide, it's a senator.
    if (it1)
        window.location.href = "/politicians/" + it1;
    else
        window.location.href = "/states/" + it0;
});

}());