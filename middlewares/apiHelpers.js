const Congress = require( 'propublica-congress-node' );
const apiKey = 'kKAb1hU4oGSoUjqN5P3NJVUhd0PDWV0r4PizmlGe';
const client = new Congress( apiKey );



const apiHelpers = {};

apiHelpers.getAllSenateByState= (stateAbbr) => {
	let senators = client.membersCurrentByStateOrDistrict({
				     chamber: 'senate',
				     state: stateAbbr
				    }).then(senatorsInfo => {
				    	return senatorsInfo.results;
				    })
	
    return senators;
}

apiHelpers.getRepresentativeByDistrict = (stateAbbr, districtNum) => {
	let representative = client.membersCurrentByStateOrDistrict({
		chamber: 'house',
		state: stateAbbr,
		district: districtNum
	}).then(representativeResult => {
		return representativeResult.results;
	});
	return representative;
}


apiHelpers.getCongressMemberById = (id) => {
	let congressMember = client.memberBioAndRoles({
		memberId: id
	}).then(congressMemberResult => {
		return congressMemberResult.results;
	});
	return congressMember;
}




module.exports = apiHelpers;