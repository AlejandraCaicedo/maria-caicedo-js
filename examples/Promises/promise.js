// resolve method if the job is finished successfully, with result
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000)
})

// reject method if an error has occurred, is the error object
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000)
})

// There can be only a single result or an error
let promise = new Promise(function (resolve, reject) {
  resolve("done")

  reject(new Error("…")) // it is ignored
  setTimeout(() => resolve("…")) // it is ignored
})

// Consumers: then, catch, finally

// then
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000)
  // setTimeout(() => reject(new Error("Whoops!")), 1000)
})

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
)

// catch
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
})

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert) // shows "Error: Whoops!" after 1 second

// finally with then
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready"))
  .then(result => alert(result)) // <-- .then handles the result

// finally with catch
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready"))
  .catch(err => alert(err)) // <-- .catch handles the error object

// Example of loadScript

function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(null, script)
  script.onerror = () => callback(new Error(`Script load error for ${src}`))

  document.head.append(script)
}

// Now using promises
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.src = src

    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`Script load error for ${src}`))

    document.head.append(script)
  })
}

// Usage
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
)

promise.then(script => alert('Another handler...'))

// Task #1 - Delay with a promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => alert('runs after 3 seconds'))
