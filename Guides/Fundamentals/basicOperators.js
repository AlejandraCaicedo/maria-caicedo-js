// Unary negation
let x = 1
x = -x

// Binary operator
let x = 1
let y = 3
let sum = x + y

// Exponentiation **

// 2 (power of 1/2 is the same as a square root)
alert(4 ** (1 / 2))

// String concatenation
let str = "Hello" + "World"

// shows "122"
alert('1' + 2 + 2)

// shows "41"
alert(2 + 2 + '1')

// Using another binary operators: -,/,*

// shows 4, converts '2' to a number
alert(6 - '2')

// shows 3, converts both to a number
alert('6' / '2')

// Converting non-numbers with + operator, same thing that Number(x)

alert(+true) // shows 1
alert(+"") // shows 0

let apples = "2"
let oranges = "3"

// shows "23"
alert(apples + oranges)

// both values converted to numbers before the binary plus shows 5
alert(+apples + +oranges)

// Increment and decrement ++/--
let num = 1

// postfix form shows 1 prior to increment
alert(num++)

// prefix form shows 2 after to increment
alert(++num)

// between other operators their precedence is higher
let counter = 1

// it shows 4
alert(2 * ++counter)

// Operator comma

let a = (1 + 2, 3 + 4)

// Only shows the final result
alert(a)
