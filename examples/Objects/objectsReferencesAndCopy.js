// Coping the reference
let message = "Hello!"
let phrase = message

// Comparison by reference
let a = {}
let b = a

alert(a == b) // true, both variables reference the same object
alert(a === b) // true

// Cloning and merging
let user = {
  name: "Maria",
  age: 22
};

let clone = {}

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key]
}

// now clone is a fully independent object with the same content
clone.name = "Carlos" // changed the data in it

alert(user.name) // shows Maria by the original object

// Object assing
let permissions1 = { canView: true }
let permissions2 = { canEdit: true }

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2)

// now user = { name: "Maria", canView: true, canEdit: true }

// Nested cloning
let user = {
  name: "Maria",
  sizes: {
    height: 160,
    width: 47
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++
alert(clone.sizes.width)
