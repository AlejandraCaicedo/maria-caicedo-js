// Rest parameters

// all parameters in an array
function sumAll(...args) {
  let sum = 0

  for (let arg of args) sum += arg

  return sum
}

alert(sumAll(1)) // 1
alert(sumAll(1, 2)) // 3
alert(sumAll(1, 2, 3)) // 6

// Example using variables
function showName(firstName, lastName, ...titles) {
  alert(firstName + ' ' + lastName) // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert(titles[0]) // Consul
  alert(titles[1]) // Imperator
  alert(titles.length) // 2
}

showName("Julius", "Caesar", "Consul", "Imperator")

// variables like arguments
function showName() {
  alert(arguments.length)
  alert(arguments[0])
  alert(arguments[1])

  // it's iterable!
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar")

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya")

// Spread syntax
let arr = [3, 5, 1]
alert(Math.max(...arr)) // it shows 5 (spread turns array into a list of arguments)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(...arr1, ...arr2)) // it shows 8

// Merging arrays with spread syntax
let num = [3, 5, 1]
let num1 = [8, 9, 15]
let merged = [0, ...num, 2, ...num2]

alert(merged) // 0,3,5,1,2,8,9,15 (0, then num, then 2, then num2)

// Example with strings
let str = "Hello World"

alert([...str]) // it shows: H,e,l,l,o,W,o,r,ld

// Converts something in an array
let str = "Hello"

// Array.from converts an iterable into an array
alert(Array.from(str)) // H,e,l,l,o

// Copy an array/object
let arr = [1, 2, 3]

// spread the array into a list of parameters
// then put the result into a new array
let arrCopy = [...arr]

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)) // true

// are the arrays equal?
alert(arr === arrCopy) // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4)
alert(arr) // 1, 2, 3, 4
alert(arrCopy) // 1, 2, 3
