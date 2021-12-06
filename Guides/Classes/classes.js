// Class basic syntax
class User {

  // This a class field
  name = "John"

  constructor(name) {
    this.name = name
  }

  sayHi() {
    alert(this.name)
  }

  // Using getters and setters
  get name() {
    return this._name
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.")
      return
    }
    this._name = value
  }
}

// Usage:
let user = new User("Clarin")
user.sayHi()

// Using the prototype 

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal

// rabbit.__proto__ == animal
let rabbit = new Rabbit("White Rabbit")

// This is truthy
alert(rabbit.eats)

// Rewritin a class in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name
}

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  alert(this.name)
};

// Usage:
let user = new User("Maria")
user.sayHi()

// Task #1 - Clock class
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date()

    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    let secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output)
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}

let clock = new Clock({ template: 'h:m:s' })
clock.start()
