// A short example using an arrow function
let sum = (a, b) => a + b

alert(sum(1, 2))

// Creating dynamically a function
let age = prompt("What is your age?", 18)

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome()

// Multiline arrow functions
let sum = (a, b) => {
  let result = a + b
  return result
};

alert(sum(1, 2))

// Task # 1 - rewrite with arrow functions

// Example
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)

// Solution
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask ("Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
)
