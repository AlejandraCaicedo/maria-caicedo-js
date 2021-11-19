// true (correct)
alert(10 > 1)

// false (wrong)
alert(5 == 1)

// true (correct)
alert(3 != 1)

// assign the result of the comparison, it's true
let result = 8 > 0
alert(result)

// Strings comparisons
alert('F' > 'A') // true
alert('Glow' > 'Glee') // true
alert('Bee' > 'Bez') // false

// Comparison of different types

// true, string '5' becomes a number 5
alert('5' > 1)

// true, string '01' becomes a number 1
alert('01' == 1)

// This is true
alert(true == 1)

// This is true
alert(false == 0)

//Strict equality or Strict non-equality !==

// false, because the types are different
alert(0 === false) // false
alert('' === false) // true

// Comparing null value
alert(null > 0) // false
alert(null == 0) // false
alert(null >= 0) // true

// Comparing undefined value
alert(undefined > 0) // false
alert(undefined < 0) // false
alert(undefined == 0) // false
