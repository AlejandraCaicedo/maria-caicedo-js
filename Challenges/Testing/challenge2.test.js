const showNameCompany = require('../Src/challenge2');

const infoUsers = [
  { id: 1, company: 'A' },
  { id: 2, company: 'B' },
];

const infoTodos = [
  { id: 1, userId: 1, title: 'Title delectus' },
  { id: 2, userId: 2, title: 'Title' },
];

const json = jest.fn(() => Promise.resolve(infoUsers));

const request = jest.fn(() =>
  Promise.resolve({
    json,
  })
);

global.fetch = request;

it("show name company", async () => {
  await showNameCompany();

  expect(request.mock.calls.length).toBe(2);
  expect(json.mock.calls.length).toBe(2);
});
