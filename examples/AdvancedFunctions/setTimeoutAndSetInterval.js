// setTimeout: allows to run a function once after the interval of time
function sayHi() {
  alert('Hello')
}

// Delay 1000 milliseconds => 1 second
setTimeout(sayHi, 1000)

// with arguments
function sayHi(phrase, who) {
  alert(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, "Hello", "Maria") // Hello, Maria

// using arrow functions
setTimeout(() => alert('Hello'), 1000)

// Cancel with cleatTimeout
let timerId = setTimeout(() => alert("never happens"), 1000)
alert(timerId) // timer identifier

clearTimeout(timerId)
alert(timerId) // same identifier (doesn't become null after canceling)

// setInterval: allows to run a function repeatedly
// starting after the interval of time, then repeating continuously at that interval

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000)

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop') }, 5000)

// setTimeout nested

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000)
*/

let timerId = setTimeout(function tick() {
  alert('tick')
  timerId = setTimeout(tick, 2000)
}, 2000)
