// promise all like an array
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert) // 1,2,3 when promises are ready: each promise contributes an array member

// example mapping
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
]

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url))

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ))

// fetching user information for an array of GitHub users by their names
let names = ['iliakan', 'remy', 'jeresig']

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`))

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`) // shows 200 for every url
    }

    return responses
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)))

// Promise.allSettled
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
]

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => {
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`)
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`)
      }
    })
  })

// Promise.race
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert) // it shows 1 the first promise

// Promise.any
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert) // it shows 1 the second promise

// Loadcache example
let cache = new Map()

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url))
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url, text)
      return text
    })
}
