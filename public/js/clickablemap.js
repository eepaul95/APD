(function(){
"use strict;"
    /* Styling elements are in main.css */
    
    var domMap = $('#clickableMap'),
        domStateName = $('#stateName'),
        domContainer = $('#mapContainer');
    var previousWidth = domContainer.width(),
        mapStates;
    
    // Refer to https://github.com/markmarkoh/datamaps#default-options
    var map = new Datamap({
        scope: 'usa',
        element: domMap[0],
        responsive: true,
        fills: {
            defaultFill: false // is this even valid?
        },
        geographyConfig: {
            borderWidth: false, // this too?
            borderOpacity: false, // this as well?
            borderColor: false, // c'mon now
            popupOnHover: false, // if Datamap.js plugin updates
            highlightFillColor: false, // or if D3.js makes an update
            highlightBorderColor: false, // then these falses might break.
            highlightBorderWidth: false // check main.css for styling changes.
        },
        done: function(d) {
            mapStates = d.svg.selectAll('.datamaps-subunit')
                    .on('mouseover',    mapMouseover) // When you hover on the map
                    .on('mouseleave',   mapMouseleave) // When mouse leaves
                    .on('click',        mapClick) // When you click on the map
                    ;
        }
    });
    
    map.labels({
        fontSize: 14
    }); // display labels
    
    
    // Map color and highlight transition function in main.css
    var clicked;
    
    function mapMouseover(g) {
        domStateName.html("<b>" + g.properties.name + "</b>");
    }
    
    function mapMouseleave(g) {
        domStateName.html("<i>Select a state</i>");
    }
    
    function mapClick(g,n) {
        // TODO: loading screen or something?
        var a;
        
        // Disable State Name field changing on mouseover
        mapStates
                .on('mouseover',function(){})
                .on('mouseleave',function(){});
        
        // Make it focused
        if (clicked != (a = $(mapStates[0][n]))) {
            if (clicked !== undefined)
                clicked.removeClass('focus');
            clicked = a.addClass('focus');
        }

        window.location.href = "/states/" + g.properties.name;
        domStateName.html("<b>" + g.properties.name + "</b>");
    }
    
    // Enable resizing map when window resizes
    $(window).resize(function(){
        if (previousWidth != (previousWidth = domContainer.width())) // The hackery!
            map.resize()
    });

}())