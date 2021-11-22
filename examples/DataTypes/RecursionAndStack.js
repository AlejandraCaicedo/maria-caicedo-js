// A recursive function to find a power
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1))
}

// Recursive traversals

// Example: this a company
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
}

// Function to get the sum of all salaries
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0) // sum the array
  } else { // case (2)
    let sum = 0
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep) // recursively call for subdepartments, sum the results
    }
    return sum
  }
}

alert(sumSalaries(company)) // 7700

// Task #1 - Calculate factorial
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}

alert(factorial(5)) // 120

// Task #2 - Fibonacci numbers without recursion
function fib(n) {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

alert(fib(5))
alert(fib(7))
alert(fib(77))

// Fibonacci numbers with recursion
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

alert(fib(5))
alert(fib(7))
// fib(77) // will be extremely slow
