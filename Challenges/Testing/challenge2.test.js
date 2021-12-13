// import { URL_TODOS as URL_TODOS, URL_USERS as URL_USERS } from './URL';
import showNameCompany from '../Src/challenge2';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve()
  })
);

it("show name company", async () => {
  const result = await showNameCompany();

  expect(result).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});
