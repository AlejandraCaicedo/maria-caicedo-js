let user = {
  name: "John",
  age: 30
}

/* Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ] */

// Task #1 - adding properties
function sumSalaries(salaries) {
  let sum = 0
  for (let salary of Object.values(salaries)) {
    sum += salary
  }

  return sum // 650
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

alert(sumSalaries(salaries)) // 650
