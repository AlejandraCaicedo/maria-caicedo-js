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

// Diagonal difference
function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonal = 0
  let secondaryDiagonal = 0
  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i]
    secondaryDiagonal += arr[i][arr.length - i - 1]
  }
  return Math.abs(primaryDiagonal - secondaryDiagonal)
}

// The power sum
function powerSum(X, N) {
  let count = 0
  let sum = 0

  first: for (let i = 1; i < (X / 2); i++) {
    let powerI = Math.pow(i, N)
    if (powerI + sum < X) {
      sum += powerI
      second: for (let j = 1; j < (X / 2); j++) {
        let powerJ = Math.pow(j, N)
        if (powerJ + sum < X) {
          sum += powerJ
        }else if(powerJ + sum == X){
          count += 1
          break second
        }else{
          sum = 0
          continue first
        }
      }
    }else if(powerI + sum == X){
      break first
      count += 1
    }
  }
  return count
}
