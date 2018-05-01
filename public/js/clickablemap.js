(function(){
"use strict;"
    const domMap = $('#clickableMap'),
          domStateName = $('#stateName'),
          domContainer = $('#mapContainer');
    var previousWidth = domContainer.width();
    
    // Refer to https://github.com/markmarkoh/datamaps#default-options
    var map = new Datamap({
        scope: 'usa',
        element: domMap[0],
        responsive: true,
        fills: {
            defaultFill: '#b8b8b8'
        },
        geographyConfig: {
            borderColor: '#ffffff',
            popupOnHover: false,
            highlightFillColor: '#00a6f7',
            highlightBorderColor: '#ffffff',
            highlightBorderWidth: 1
        },
        done: function(d) {
            var all = d.svg.selectAll('.datamaps-subunit');
            console.log(all);
            all.on('mouseover', mapMouseover); // When you hover on the map
            all.on('click', mapClick); // When you click on the map
            
        }
    });
    
    map.labels({
        fontSize: 14
    }); // display labels
    
    
    // Map state hover
    function mapMouseover(g) {
        // why does the highlight get disabled ;-;
        // TODO: Attempt to remake the highlight thing
        // TODO: Delete text when mouse leaves
        
        domStateName.html("<b>" + g.properties.name + "</b>");
    }
    
    // Map state clicks
    function mapClick(g) {
        // TODO: Click confirmation, loading screen or something
        
        window.location.href = "/states/" + g.properties.name;
    }
    
    // Enable resizing map when window resizes
    $(window).resize(function(){
        if (previousWidth != (previousWidth = domContainer.width())) // The hackery!
            map.resize()
    });
    
    window.map = map;
}())