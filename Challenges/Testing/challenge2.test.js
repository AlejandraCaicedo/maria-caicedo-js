jest.mock('../request');

it('works with async/await', async () => {
  expect.assertions(1);
  const data = await response.json();
  expect(data).toEqual('Mark');
});

it('works with async/await and resolves', async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual('Paul');
});
