const apiHelpers = require('./apiHelpers');



test('The function getAllSenateByState does return something with length equal or more than one', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getAllSenateByState('NY');
  expect(data).not.toHaveLength(0);
});

test('The function getRepresentativeByDistrict does return an object', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getRepresentativeByDistrict('NY', 1);
  expect(typeof(data)).toBe('object');
});


test('The function getCongressMemberById does return an object', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getCongressMemberById('A000014');
  expect(typeof(data)).toBe('object');
});

test('The function getIntroducedBillsByMemberId does return something with length equal or more than one', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getIntroducedBillsByMemberId('A000014');
  expect(data).not.toHaveLength(0);
});


test('The function getUpdatedBillsByMemberId does return something with length equal or more than one', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getUpdatedBillsByMemberId('A000014');
  expect(data).not.toHaveLength(0);
});

