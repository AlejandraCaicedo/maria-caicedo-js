// Code blocks
{
  // do some job with local variables that should not be seen outside
  let message = "Hello" // only visible in this block
  alert(message) // it shows: Hello
}

alert(message) // Error: message is not defined

// if block
if (true) {
  let phrase = "Hello!"
  alert(phrase) // Hello!
}

// Nested functions
function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName
  }

  alert("Hello, " + getFullName())
  alert("Bye, " + getFullName())
}

// Returning a function
function makeCounter() {
  let count = 0

  return function () {
    return count++
  }
}

let counter = makeCounter()

alert(counter()) // 0
alert(counter()) // 1
alert(counter()) // 2

// Garbage collection
function f() {
  let value = 123

  return function() {
    alert(value)
  }
}

let g = f() // g.[[Environment]] stores a reference to the Lexical Environment of the corresponding f() call
