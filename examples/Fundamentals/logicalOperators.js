// The || operator
alert(true || true) // true
alert(false || true) // true
alert(true || false) // true
alert(false || false) // false

let hour = 9

// it works just like if( true || false )
if (hour < 10 || hour > 18) {
  alert('The office is closed.')
}

let firstName = ""
let lastName = ""
let nickName = "SuperCoder"

// Shows "Supercoder", the first truthy
alert(firstName || lastName || nickName || "Anonymous")

// The && operator
alert(true && true) // true
alert(false && true) // false
alert(true && false) // false
alert(false && false) // false

let minute = 30

// it works just like if( true && true )
if (hour == 9 && minute == 30) {
  alert('The time is 9:30')
}

// shows null, the first falsy
alert(1 && 2 && null && 3)

// The ! operator, returns the inverse value
alert(!true) // false
alert(!0) // true

// Double !! converts to boolean type 
alert(!!"non-empty string") // true
alert(!!null) // false

// Task check login
let userName = prompt("Who's there?", '')

if (userName === 'Admin') {

  let pass = prompt('Password?', '')

  if (pass === '123') {
    alert('Welcome!')
  } else if (pass === '' || pass === null) {
    alert('Canceled')
  } else {
    alert('Wrong password')
  }

} else if (userName === '' || userName === null) {
  alert('Canceled')
} else {
  alert("I don't know you")
}
