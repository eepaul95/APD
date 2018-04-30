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

helpers.arrayOfDistrict = (stateAbbr) => {
	const range = helpers.range;
	const State = {
		AL: 7,
		AK: 1,
		AZ: 9,
		AR: 4,
		CA: 53,
		CO: 7,
		CT: 5,
		DC: 1,
		DE:1,
		FL: 27,
		GA: 14,
		HI: 2,
		ID: 2,
		IL: 18,
		IN: 9,
		IA: 4,
		KS: 4,
		KY: 6,
		LA: 6,
		ME: 2,
		MD: 8,
		MA: 9,
		MI: 14,
		MN: 8,
		MS: 4,
		MO: 8,
		MT: 1,
		NE: 3,
		NV: 4,
		NH: 2,
		NJ: 12,
		NM: 3,
		NY: 27,
		NC: 13,
		ND: 1,
		OH: 16,
		OK: 5,
		OR: 5,
		PA: 18,
		RI: 2,
		SC: 7,
		SD: 1,
		TN: 9,
		TX: 36,
		UT: 4,
		VT: 1,
		VA: 11,
		WA: 10,
		WV: 3,
		WI: 8,
		WY: 1
	}

	if(stateAbbr in State){
		return range(State[stateAbbr]);
	}
	else {
		console.log("The given input is not a state abbreviation");
	}
}

helpers.range = (number) => {
	var rangeArray = [];
	for(let i = 1; i < number+1; i++){
		rangeArray.push(i);
	}
	return rangeArray;
}




module.exports = helpers;
