function sayHi() {
  alert("Hello")
}

// This a function expression, it is a statement
let func = sayHi;

func()
sayHi()

// Callback functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

function showOk() {
  alert("You agreed.")
}

function showCancel() {
  alert("You canceled the execution.")
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel)

// Other example a bit short
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function () { alert("You agreed.") },
  function () { alert("You canceled the execution.") }
);

// Calling the function eailer that its definition
sayHi("John")

function sayHi(name) {
  alert(`Hello, ${name}`)
}

// Example using function expressions
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function () { alert("Hello!"); } :
  function () { alert("Greetings!"); };

welcome()
