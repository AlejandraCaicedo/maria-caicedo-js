// Adding a function to an object
let user = {
  name: "Alejandra",
  age: 22
}

user.sayHi = function () {
  alert("Hello!");
};

user.sayHi()

// "This" method is optional and the arrow functions doesn't have this 
let user = {
  name: "Maria",
  age: 22,

  sayHi() {
    // "this" is the "current object"
    alert(this.name)
  }

};

// Shows Maria
user.sayHi()


// Task #1 - using This in object literal
function makeUser() {
  return {
    name: "Ana",
    ref() {
      return this;
    }
  }
}

let user = makeUser()
alert(user.ref().name)

// Task #2 - Create a calculator
let calculator = {
  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },

  read() {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  }
};

calculator.read();
alert(calculator.sum())
alert(calculator.mul())
