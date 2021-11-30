// NUMBERS
let num = 123
num = 2.36

// Infinity number
alert(1 / 0)
alert(Infinity)

// Computational error: NaN
alert("This is a string" / 2)

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n

// STRINGS
let phrase = 'Using single quotes'
let str = "Using double quotes"

// Embed variables and expressions
let str2 = `It is a embed string ${phrase}`
alert(`Embed an expression ${1 + 2}`)

// BOOLEANS
let nameFieldChecked = true
let ageFieldChecked = false

// comparisons
let isGreater = 8 < 2
alert(isGreater)

// null value
let age = null

// Undefined value, a variable without assignment
let color
alert(color)

// TYPW OF OPERATOR
typeof undefined

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
