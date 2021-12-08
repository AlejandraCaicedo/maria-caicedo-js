const URL = {
  todos: 'https://jsonplaceholder.typicode.com/todos',
  users: 'https://jsonplaceholder.typicode.com/userss'
};

export default function request() {
  return new Promise((resolve, reject) => {
    const users = fetch(`${URL}/users`);
  });
}
