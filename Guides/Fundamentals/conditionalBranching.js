// The if statement
let year = prompt('In which year was ECMAScript-2015 specification published?', '')

if (year == 2015) alert('You are right!')

// More than one statement
if (year == 2015) {
  alert("That's correct!")
  alert("You're so smart!")
}

// Boolean conversion
if (0) {
  alert("This is falsy")
}

if (1) {
  alert("This is truthy")
}

// Pre-evaluated boolean value
let cond = (year == 2015)

if (cond) {
// some block of code
}

// The else clause
if (year == 2015) {
  alert('You guessed it right!')
} else {
  alert('How can you be so wrong?')
}

// Conditional operator ?
let age = prompt('How old are you?', '')
let accessAllowed = (age > 18) ? true : false

// Avoing the operator ? 
let accessAllowed = age > 18
