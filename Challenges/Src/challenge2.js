'use strict';

import { URL_TODOS, URL_USERS } from './URL';

async function showNameCompany() {

  const result = [];

  const responseUsers = await fetch(URL_USERS);
  const users = await responseUsers.json();

  const responseTodos = await fetch(URL_TODOS);
  const todos = await responseTodos.json();

  users.forEach((user) => {
    todos.forEach((todo) => {
      if (user.id === todo.userId && todo.title.includes('delectus')) {
        let { name } = user.company;
        result.push(
          `<p> The todo with id ${todo.id} has in its title the word 'delectus', and the user company name is: ${name} </p>`
        );
      }
    });
  });

  console.log(result);

  return result;
}

export { showNameCompany };