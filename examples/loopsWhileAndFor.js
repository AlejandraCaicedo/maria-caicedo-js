// Loop while

let i = 3

// when i becomes 0, the condition becomes falsy, and the loop stops
while (i) {
  alert( i )
  i--
}

// Without curly braces
while (i) alert(i--)

// Loop do while

i = 3

// The body is executed at least once
do {
  alert( i )
  i++
} while (i < 3)

// Loop for
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i)
}

let j = 0

// Skipping parts

for (; j < 3; j++) {
  alert( j )
}

for (;;) {
  // repeats without limits
}

// Breaking the loop
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '')

  if (!value) break

  sum += value

}
alert( 'Sum: ' + sum )

// Continue to the next iteration
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue

  alert(i) // 1, then 3, 5, 7, 9
}

// Labels for break/continue

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '')

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer

    // do something with the value...
  }
}
alert('Done!')

// Task #1 - number greater than 100
let num

do {
  num = prompt("Enter a number greater than 100?", 0)
} while (num <= 100 && num)

// Taks #2 - outputs prime numbers from 2 to n
let n = 10

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime
  }
  alert( i )
}
