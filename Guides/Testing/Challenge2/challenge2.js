'use strict'

async function showNameCompany() {

  const URL = 'https://jsonplaceholder.typicode.com';
  let result = [];

  let responseUsers = await fetch(`${URL}/users`);
  let users = await responseUsers.json();

  let responseTodos = await fetch(`${URL}/todos`)
  let todos = await responseTodos.json();

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
  document
    .querySelector("#app")
    .insertAdjacentHTML("afterbegin", result.join(""));
}

showNameCompany();
