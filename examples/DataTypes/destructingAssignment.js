// Allows unpack arrays or objects into a bunch of variables

// we have an array with the name and surname
let arr = ["Maria", "Caicedo"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr

alert(firstName) // Maria
alert(surname)  // Caicedo

// Ignore elements using commas

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

alert(title) // Consul

// Works with any iterable on the right-side
let [a, b, c] = "abc" // the result is: ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3])

// Looping with entries
let user = {
  name: "Maria",
  age: 22
}

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`) // name:Maria, then age:22
}

// Use map is more convenient for destructuring
let user = new Map();
user.set("name", "Ana")
user.set("age", "22")

// Map iterates as [key, value] pairs
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:Ana, then age:22
}

// Swap variables trick
let guest = "Jane"
let admin = "Pete"

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest]

// The rest ...
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

// rest is array of items, starting from the 3rd one
alert(rest[0]) // Consul
alert(rest[1]) // of the Roman Republic
alert(rest.length) // 2

// Setting Default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"]

alert(name) // Julius (from array)
alert(surname) // Anonymous (default used)

// Object destructuring
let options = {
  title: "Menu",
  width: 100,
  height: 200
}

let { title, width: w, height: h } = options

alert(title) // Menu
alert(width) // 100
alert(height) // 200

// Nested destructuring
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options

alert(title) // Menu
alert(width) // 100
alert(height) // 200
alert(item1) // Cake
alert(item2) // Donut

// Task #1 - The maximal salary
function topSalary(salaries) {

  let maxSalary = 0
  let maxName = null

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary
      maxName = name
    }
  }
  return maxName
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

alert(topSalary(salaries))
