// Example
let a = 2 + 2

switch (a) {
  case 3:
    alert('Too small')
    break
  case 4:
    alert('Exactly!')
    break
  case 5:
    alert('Too big')
    break
  default:
    alert("I don't know such values")
}

// Example using others arguments
a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1")
    break
  default:
    alert("this doesn't run")
}

// Task #1 - Change the switch for if statement

// Example
switch (browser) {
  case 'Edge':
    alert("You've got the Edge!")
    break
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too')
    break
  default:
    alert('We hope that this page looks ok!')
}

// Solution
if (browser === 'Edge') {
  alert("You've got the Edge!")
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  alert('Okay we support these browsers too')
} else {
  alert('We hope that this page looks ok!')
}
