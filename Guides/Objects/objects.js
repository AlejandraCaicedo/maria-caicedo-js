// Object constructor syntax
let person = new Object()

// Object literal syntax
let user = {
  name: 'Maria',
  age: 22
}

// get property values of the object:
alert(user[name])
alert(user[age])

// Adding a new property
user[isAdmin] = true

// Deleting a property
delete user.age;

// Setting multiword properties
user["likes birds"] = true

// delete
delete user["likes birds"]

// Computed properties
let fruit = prompt("Which fruit to buy?", "apple")

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
}

// 5 if fruit="apple"
alert(bag.apple)

// Property value shorthand
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  }
}

let user = makeUser("John", 30)
alert(user.name)

// Undefined properties
alert(user.noSuchProperty === undefined)

// in operator
alert("age" in user) // true, user.age exists
alert("blabla" in user) // false, user.blabla doesn't exist

// Task #1 - multiply numeric properties by 2

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2
    }
  }
}
