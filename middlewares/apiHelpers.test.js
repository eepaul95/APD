const apiHelpers = require('./apiHelpers');



test('The function getAllSenateByState does not return undefined', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getAllSenateByState('NY');
  expect(data).not.toBeUndefined();
});

test('The function getRepresentativeByDistrict does not return undefined', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getRepresentativeByDistrict('NY', 1);
  expect(data).not.toBeUndefined();
});


test('The function getCongressMemberById does not return undefined', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getCongressMemberById('A000014');
  expect(data).not.toBeUndefined();
});


test('The function getAllSenateByState does not return null', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getAllSenateByState('NY');
  expect(data).not.toBeNull();
});

test('The function getRepresentativeByDistrict does not return null', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getRepresentativeByDistrict('NY', 1);
  expect(data).not.toBeNull();
});


test('The function getCongressMemberById does not return null', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getCongressMemberById('A000014');
  expect(data).not.toBeNull();
});

test('The function getAllSenateByState does return something with length equal or more than one', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getAllSenateByState('NY');
  expect(data).not.toHaveLength(0);
});

test('The function getRepresentativeByDistrict does return something with length equal or more than one', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getRepresentativeByDistrict('NY', 1);
  expect(data).not.toHaveLength(0);
});


test('The function getCongressMemberById does return something with length equal or more than one', async () => {
  expect.assertions(1);
  const data = await apiHelpers.getCongressMemberById('A000014');
  expect(data).not.toHaveLength(0);
});

