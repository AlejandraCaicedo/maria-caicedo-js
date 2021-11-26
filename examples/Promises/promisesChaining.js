new Promise(function (resolve, reject) {

  setTimeout(() => resolve(1), 1000) // (*)

}).then(function (result) { // (**)

  alert(result) // 1
  return result * 2

}).then(function (result) { // (***)

  alert(result) // 2
  return result * 2

}).then(function (result) {

  alert(result) // 4
  return result * 2

})

// Returning promises
new Promise(function (resolve, reject) {

  setTimeout(() => resolve(1), 1000)

}).then(function (result) {

  alert(result) // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000)
  });

}).then(function (result) { // (**)

  alert(result) // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000)
  });

}).then(function (result) {

  alert(result) // 4

})

// Example loadScript with arrow functions
loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one()
    two()
    three()
  })

// Thenables
class Thenable {
  constructor(num) {
    this.num = num
  }
  then(resolve, reject) {
    alert(resolve); // function() { native code }
    // resolve with this.num*2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000) // (**)
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result) // (*)
  })
  .then(alert) // shows 2 after 1000ms

