(function(){
"use strict;"
    var fill = {
        normal: "#b8b8b8",
        highlight: "#00a6f7",
        active: "#007bff"
    }
    
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
            defaultFill: fill.normal
        },
        geographyConfig: {
            borderColor: '#ffffff',
            popupOnHover: false,
            highlightFillColor: fill.highlight,
            highlightBorderColor: '#ffffff',
            highlightBorderWidth: 1
        },
        done: function(d) {
            mapStates = d.svg.selectAll('.datamaps-subunit')
                    .on('mouseover',    mapMouseover) // When you hover on the map
                    .on('mouseleave',   mapMouseleave) // When mouse leaves
                    .on('mousedown',    mapMousedown) // Press and hold
                    .on('mouseup',      mapMouseup) // Release the mouse
                    .on('click',        mapClick) // When you click on the map
                    ;
        }
    });
    
    map.labels({
        fontSize: 14
    }); // display labels
    
    
    // Map highlight transition function in main.css
    var fill, clicked;
    
    function mapMouseover(g,n) {
        $(mapStates[0][n]).css('fill',fill.highlight);
        domStateName.html("<b>" + g.properties.name + "</b>");
    }
    
    function mapMouseleave(g,n) {
        $(mapStates[0][n]).css('fill',fill.normal)
        domStateName.html("");
    }
    
    function mapMousedown(g,n) {
        if (clicked != n)
            $(mapStates[0][clicked]).css('fill',fill.normal)
        $(mapStates[0][clicked = n]).css('fill',fill.active)
    }
    
    function mapMouseup(g,n) {
        if (clicked == n)
            mapStates.on('mouseover',function(){}).on('mouseleave',function(){});
    }
    
    function mapClick(g,n) {
        // TODO: loading screen or something?
        window.location.href = "/states/" + g.properties.name;
        domStateName.html("<b>" + g.properties.name + "</b>");
    }
    
    // Enable resizing map when window resizes
    $(window).resize(function(){
        if (previousWidth != (previousWidth = domContainer.width())) // The hackery!
            map.resize()
    });
    
    window.map = map;
}())