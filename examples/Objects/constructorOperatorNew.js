function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// this is the operator new
let user = new User("Maria");

alert(user.name) // shows Maria
alert(user.isAdmin)

// Can not be call after the creation

// create a function and immediately call it with new
let person = new function () {
  this.name = "John";
  this.isAdmin = false;
};

// Return from constructors
function BigUser() {

  this.name = "Luis"
  return { name: "Godzilla" }  // <-- returns this object
}

// Shows "Godzilla"
alert(new BigUser().name)

// Methods in constructor
function User(name) {
  this.name = name
  this.sayHi = function () {
    alert("My name is: " + this.name)
  }
}

let maria = new User("Maria")

