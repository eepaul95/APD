const Congress = require( 'propublica-congress-node' );
const apiKey = 'kKAb1hU4oGSoUjqN5P3NJVUhd0PDWV0r4PizmlGe';
const client = new Congress( apiKey );



const apiHelpers = {};

apiHelpers.getAllSenateByState(stateAbbr){
	let senators = [];
	client.membersCurrentByStateOrDistrict({
     chamber: 'senate',
     state: stateAbbr
    }).then(senatorsResult => {
    	senators = senatorsResult.results;
    });
    return senators;
}

apiHelpers.getRepresentativeByDistrict(stateAbbr, districtNum){
	let representative = [];
	client.membersCurrentByStateOrDistrict({
		chamber: 'house',
		state: stateAbbr,
		district: districtNum
	}).then(representativeResult => {
		representative = representativeResult.results[0];
	});
	return representative;
}


apiHelpers.getCongressMemberById(id){
	let congressMember = [];
	client.memberBioAndRoles({
		memberId: id
	}).then(congressMemberResult => {
		congressMember = congressMemberResult.results[0];
	});
	return congressMember;
}




module.exports = apiHelpers;