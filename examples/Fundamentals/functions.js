// Simple function
function showMessage() {
  alert('Hello everyone!')
}

// Calling the function
showMessage()

// using locals variables
function showMessage2() {
  let message = "Hello, I'm JavaScript!" // local variable
  alert(message)
}

// using outer variables
let userName = 'Maria'

function showMessage3() {
  let message = 'Hello, ' + userName
  alert(message)
}

// Using parameters
function substraction(a, b, text = "this a default value") {
  alert(a - b)
}

substraction(5, 2)

// Alternative default parameters
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty'
}

// Returning a value
function checkAge(age) {
  if (age >= 18) {
    return true
  } else {
    return confirm('Do you have permission from your parents?')
  }
}

let age = prompt('How old are you?', 18)

if (checkAge(age)) {
  alert('Access granted')
} else {
  alert('Access denied')
}

// Using a return without value
function showMovie(age) {
  if (!checkAge(age)) {
    return
  }
  alert("Showing you the movie")
}

// Task #1 - check age with ? operator
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?')
}

// Task #2 - Find the minimum value
function min(a, b) {
  return a < b ? a : b
}

// Task #3 -  Pow(x,n)
function pow(x, n) {
  let result = x

  for (let i = 1; i < n; i++) {
    result *= x
  }

  return result
}

let x = prompt("x?", '')
let n = prompt("n?", '')

if (n < 1) {
  alert(`Power ${n} is not possible, use a positive integer`)
} else {
  alert(pow(x, n))
}
