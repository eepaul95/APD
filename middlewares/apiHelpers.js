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
		return representativeResult.results[0];
	});
	return representative;
}


apiHelpers.getCongressMemberById = (id) => {
	let congressMember = client.memberBioAndRoles({
		memberId: id
	}).then(congressMemberResult => {
		return congressMemberResult.results[0];
	});
	return congressMember;
}

apiHelpers.getIntroducedBillsByMemberId = (id) => {
	let introducedBills = client.billsByMember({
							memberId: id,
							billType: 'introduced'
						}).then(bills => {
							return bills.results[0].bills;
						});

	return introducedBills
}


apiHelpers.getUpdatedBillsByMemberId = (id) => {
	let updatedBills = client.billsByMember({
							memberId: id,
							billType: 'updated',
						}).then(bills => {
							return bills.results[0].bills;
						});

	return updatedBills
}



module.exports = apiHelpers;