// Async functions
async function f() {
  return Promise.resolve(1)
}

f().then(alert) // it shows 1

// Await function
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  })

  let result = await promise // wait until the promise resolves (*)

  alert(result) // "done!"
}

f()

// Example showAvatar function with asycn and await
async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json()

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json()

  // show the avatar
  let img = document.createElement('img')
  img.src = githubUser.avatar_url
  img.className = "promise-avatar-example"
  document.body.append(img)

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000))

  img.remove()

  return githubUser
}

showAvatar()

// Await accepts “thenables”
class Thenable {
  constructor(num) {
    this.num = num
  }
  then(resolve, reject) {
    alert(resolve)
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1)
  alert(result)
}

f()
