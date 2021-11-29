// Function Placement

// the code which uses the functions
let elem = createElement()
setHandler(elem)
walkAround()

// --- helper functions ---
function createElement() {
  // Code
}

function setHandler(elem) {
  // Code
}

function walkAround() {
  // Code
}

// Comments

// Recipe: factor out functions

// First option
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime
    }

    alert(i)
  }
}

// Solution, self-descriptive code
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue

    alert(i)
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false
  }

  return true
}

// Recipe: create functions

// First option

// here we add whiskey
for (let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop)
  add(drop, glass)
}

// here we add juice
for (let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato)
  let juice = press(tomato);
  add(juice, glass)
}

// Solution, refactoring in functions
addWhiskey(glass)
addJuice(glass)

function addWhiskey(container) {
  for (let i = 0; i < 10; i++) {
    let drop = getWhiskey();
  }
}

function addJuice(container) {
  for (let t = 0; t < 3; t++) {
    let tomato = getTomato();
  }
}

// Good comments

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  return Math.pow(x, n)
}
