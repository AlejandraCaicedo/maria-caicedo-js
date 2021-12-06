// Export before declarations

// export an array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015

// export a class
export class User {
  constructor(name) {
    this.name = name
  }
}

// 📁 sayHi.js ----

// No semicolons after export class/function
export function sayHi(user) {
  alert(`Hello, ${user}!`)
}  // no ; at the end

// Export apart from declarations

function sayHi(user) {
  alert(`Hello, ${user}!`)
}

function sayBye(user) {
  alert(`Bye, ${user}!`)
}

export { sayHi, sayBye } // a list of exported variables

// ----

// Import *
import * as say from './say.js'

say.sayHi('Ana') // Hello, Ana!
say.sayBye('Ana') // Bye, Ana!

// Import “as”
import { sayHi as hi, sayBye as bye } from './say.js'
hi('Ana') // Hello, Ana!
bye('Ana') // Bye, Ana!

// Export “as”

// 📁 sayHi.js
export { sayHi as hi, sayBye as bye }

// Export default
// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name
  }
}

export default class { // no class name
  constructor() { }
}
export default function (user) { // no function name
  alert(`Hello, ${user}!`)
}

// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// The “default” name
function sayHi(user) {
  alert(`Hello, ${user}!`)
}

// same as if we added "export default" before the function
export { sayHi as default }

// Re-export
export { sayHi } from './say.js' // re-export sayHi

export { default as User } from './user.js' // re-export default
