'use strict'

// Endpoint for todos: https://jsonplaceholder.typicode.com/todos
// Endpoint for users: https://jsonplaceholder.typicode.com/users

async function showNameCompany() {

  let result = [];

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((dataUsers) => {
      const users = dataUsers;
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((dataTodos) => {
          const todos = dataTodos;
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
            .insertAdjacentHTML("afterbegin", result.join(""))
        });
    });
}

showNameCompany();
