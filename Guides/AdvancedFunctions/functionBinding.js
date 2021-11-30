// Avoid to lost the method this
let user = {
  firstName: "Ana",
  sayHi() {
    alert(`Hello, ${this.firstName}!`)
  }
}

setTimeout(function () {
  user.sayHi() // Hello, Ana!
}, 1000)

// Using bind
let user = {
  firstName: "Luis"
}

function func(phrase) {
  alert(phrase + ', ' + this.firstName)
}

// bind this to user
let funcUser = func.bind(user)

funcUser("Hello") // Hello, Luis (argument "Hello" is passed, and this=user)

// Partial functions
function mul(a, b) {
  return a * b
}

let double = mul.bind(null, 2)

alert(double(3)) // = mul(2, 3) = 6
alert(double(4)) // = mul(2, 4) = 8
alert(double(5))  // = mul(2, 5) = 10

// Taks #1 - Losing this
function askPassword(ok, fail) {
  let password = prompt("Password?", '')
  if (password == "rockstar") ok()
  else fail()
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`)
  },

  loginFail() {
    alert(`${this.name} failed to log in`)
  },

};

askPassword(() => user.loginOk(), () => user.loginFail())

// Partial of login
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok()
  else fail()
}

let user = {
  name: 'John',

  login(result) {
    alert(this.name + (result ? ' logged in' : ' failed to log in'))
  }
}

askPassword(() => user.login(true), () => user.login(false))
