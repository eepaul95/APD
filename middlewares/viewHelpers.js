const helpers = {};

helpers.checkStateWithSpace = (name) => {
	  const State = {
		newhampshire: "New Hampshire",
		newjersey: "New Jersey",
		newmexico: "New Mexico",
		newyork: "New York",
		northcarolina: "North Carolina",
		northdakota: "North Dakota",
		rhodeisland: "Rhode Island",
		southdakota: "South Dakota",
		southcarolina: "South Carolina",
		westvirginia: "West Virginia",
		districtofcolumbia: "District of Columbia"
	  };
		
	 
	  if(name in State) {
		return State[name]; 
	 }
	  else return name.charAt(0).toUpperCase() + name.slice(1);
  
};

module.exports = helpers;