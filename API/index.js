const Congress = require('propublica-congress-node');
const apiKey = 'kKAb1hU4oGSoUjqN5P3NJVUhd0PDWV0r4PizmlGe';
let client = new Congress(apiKey);

// client.memberLists({
//     congressNumber: '115',
//     chamber: 'senate'
// }).then(res => console.log(res));

client.membersCurrentByStateOrDistrict({
    chamber: 'senate',
    state: 'NY',
}).then(res => console.log(res));