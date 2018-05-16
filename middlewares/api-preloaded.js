const request = require('request');

var apiPreloaded = function(){
    var api; name = {};
    // Download local data from API
    request('https://theunitedstates.io/congress-legislators/legislators-current.json', function (e,r,b) {
        if (!e && r.statusCode == 200) {
            api = JSON.parse(b);
            
            name.last = {};
            name.first = {};
            name.middle = {};
            for (var i = 0, l = api.length; i < l; i++) {
                // Attempt to add to array. If no array exists, make a new array with a number in it.
                // Last name
                try {
                    name.last[api[i].name.last].push(i);
                } catch (e) {
                    name.last[api[i].name.last] = [i];
                }
                
                // First name
                try {
                    name.first[api[i].name.first].push(i);
                } catch (e) {
                    name.first[api[i].name.first] = [i];
                }
                
                // Middle name
                if (api[i].name.middle !== undefined) {
                    try {
                        name.first[api[i].name.first].push(i);
                    } catch (e) {
                        name.first[api[i].name.first] = [i];
                    }
                }
            }
        }
    });

    apiPreloaded.prototype.getBioguideFromIndex = function(index) {
        return api[index].id.bioguide;
    };

    apiPreloaded.prototype.getCandidatesFromPartial = function(partial) {
        var candidate = {
            last: [],
            first: [],
            middle: []
        }
        // by Last Name
        for (var lastName in name.last) {
            if (lastName.substring(0, partial.length) === partial) {
                candidate.last.push(name.last[lastName]);
            };
        }
        // by First Name
        for (var firstName in name.last) {
            if (firstName.substring(0, partial.length) === partial) {
                candidate.first.push(name.last[firstName]);
            };
        }
        // by Middle Name
        for (var middleName in name.last) {
            if (middleName.substring(0, partial.length) === partial) {
                candidate.last.push(name.last[middleName]);
            };
        }
        
        return candidate;
    };
    
};

module.exports = apiPreloaded();
