// Using the word extends
class Animal {

  constructor(name) {
    this.speed = 0
    this.name = name
  }

  run(speed) {
    this.speed = speed
    alert(`${this.name} runs with speed ${this.speed}.`)
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`)
  }
}

let animal = new Animal("My animal")

// Class Rabbit that inherits from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`)
  }

  // Own constructor
  constructor(name, earLength) {
    super(name)
    this.earLength = earLength
  }

  // Overriding a method
  stop() {
    super.stop()
    this.hide()
  }
}

let rabbit = new Rabbit("White Rabbit")

rabbit.run(5)
rabbit.hide()

// Clock class extend
class Clock {
  constructor({ template }) {
    this.template = template
  }

  render() {
    let date = new Date()

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

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

class ExtendedClock extends Clock {
  constructor(options) {
    super(options)
    let { precision = 1000 } = options
    this.precision = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
};
