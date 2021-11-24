// Arrow functions don't have “this”

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    )
  }
}

group.showList()

// Arrows don't have arguments
function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

function sayHi(who) {
  alert('Hello, ' + who)
}

let sayHiDeferred = defer(sayHi, 2000)
sayHiDeferred("Ana") // Hello, Ana after 2 seconds
