// Camelcase problem
function camelcase(s) {
  let count = 1
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    if (char == char.toUpperCase()) {
      count += 1
    }
  }
  return count
}

// Strong password problem
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let minumun = 0

  if (n < 6) {
    minumun = 6 - n
  } else {
    let specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']
    let check = [false, false, false, false]
    for (let i = 0; i < n; i++) {
      let char = password.charAt(i)
      if (specialCharacter.includes(char)) {
        check[1] = true
      } else if (!specialCharacter.includes(char) && char === char.toLowerCase()) {
        check[2] = true
      } else if (+char.isInteger && !specialCharacter.includes(char)) {
        check[0] = true
      } else if (!specialCharacter.includes(char) && char === char.toUpperCase()) {
        check[3] = true
      }
    }
    if (check.length == check.filter(check => check == true).length) {
      minumun = 0
    } else {
      minumun = check.filter(check => check == false).length
    }
  }
  return minumun
}

// Simple array sum
function simpleArraySum(ar) {
  let sum = ar.reduce((n1, n2) => n1 + n2, 0)
  return sum
}
