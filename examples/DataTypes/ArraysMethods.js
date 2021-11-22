let arr = ["Hello", "World", "My", "Name", "is", "Ana"]

// deleting elements
delete arr[1]

alert(arr.length) // 6

// Using the splice method

// from index 1 remove 1 element
arr.splice(1, 1)

// Remove others elements and replace them
arr.splice(2, 4, "This", "is", "javascript")

// Inserting elements with splice
arr.splice(1, 0, "my", "name", "is", "maria")

// It shows: "Hello" "World" "my" "name" "is" "maria" "This" "is" "javascript"
alert(arr)

// Using negative indexes
arr.splice(-7, 4)

// Using the slice method
let letters = ['A', 'T', 'L', 'b']

alert(letters.slice(1, 3)) // T,L (copy from 1 to 3)

alert(letters.slice(-2)) // L,b (copy from -2 till the end)

// Using the concat method

// create an array from: letters and ['G', 'z']
alert(letters.concat(['G', 'z']))

// Concat with others objects
let arr = [1, 2]

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true, // Needed to concat the values
  length: 2
}

alert(arr.concat(arrayLike)) // 1,2,something,else

// ForEach method
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`)
})

// Searching in arrays

// IndexOf, includes, lastIndex(looks from right to left)
let arr = [1, 0, false]

alert(arr.indexOf(0)) // 1
alert(arr.indexOf(false)) // 2
alert(arr.indexOf(null)) // -1

alert(arr.includes(1)) // true

// Find and findIndex
let users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Mary" }
]

let user = users.find(item => item.id == 1)
alert(user.name) // Ana

// Filter method

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3)
alert(someUsers.length)

// Usign the map method
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
alert(lengths) // 5,7,6

// Method sort: The items are sorted as strings by default

// If need to sort numbers implement a compare method first
function compareNumeric(a, b) {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b) return -1
}

let arr = [1, 2, 15]

arr.sort(compareNumeric)

alert(arr) // 1, 2, 15

// Comparing string with localeCompare

let countries = ['Österreich', 'Andorra', 'Vietnam']
alert(countries.sort((a, b) => a > b ? 1 : -1)) // Andorra, Vietnam, Österreich (wrong)
alert(countries.sort((a, b) => a.localeCompare(b))) // Andorra,Österreich,Vietnam (correct!)

// The reverse method
let arr = [1, 2, 3, 4, 5]
arr.reverse()

alert(arr) // 5,4,3,2,1

// Split and join
let names = 'Bilbo, Gandalf, Nazgul'

let arr = names.split(', ')

for (let name of arr) {
  alert(`A message to ${name}.`) // A message to Bilbo (and other names)
}

let arr = ['Bilbo', 'Gandalf', 'Nazgul']
let str = arr.join(';') // glue the array into a string using ;
alert(str) // The result is: Bilbo;Gandalf;Nazgul

// Task #1 - Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('') // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// Task #2 - Sort in decreasing order
let numbers = [5, 2, 1, -10, 8]

numbers.sort((a, b) => b - a)

alert(numbers)

// Task #3 - Copy and sort array
function copySorted(words) {
  return words.slice().sort()
}

let words = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(words)

alert(sorted)
alert(words)

// Task #4 - Create an extendable calculator
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  }

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }
    return this.methods[op](a, b)
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func
  }
}
