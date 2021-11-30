// STRING CONVERSION

let value = true

// returns "boolean"
alert(typeof value)

// now value is a string "true"
value = String(value)

// returns "string"
alert(typeof value)

// NUMERIC CONVERSION

// the result is 3 numeric
alert("6" / "2")

let str = "123"

// shows "String"
alert(typeof str)

// becomes a number 123
let num = Number(str)

// shows "number"
alert(typeof num)

// BOOLEAN CONVERSION: 1 --> true 0 --> false

// false values
alert(Boolean(""))
alert(Boolean(null))
alert(Boolean(undefined))
alert(Boolean(NaN))
alert(Boolean(0))
