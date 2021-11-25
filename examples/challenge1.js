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
  let check = [false, false, false, false]
  let minumun = 0;

  let specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']

  for (let i = 0; i < n; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90 && check[0] == false) check[0] = true
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122 && check[1] == false) check[1] = true
    if (specialCharacter.includes(password.charAt(i)) && check[2] == false) check[2] = true
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57 && check[3] == false) check[3] = true
  }
  if (!check[0]) minumun++
  if (!check[1]) minumun++
  if (!check[2]) minumun++
  if (!check[3]) minumun++

  if ((n + minumun) < 6) {
    return ((6 - (n + minumun)) + minumun);
  }
  else {
    return minumun;
  }
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
function powerSum(X, N, next, sum) {
  if (sum == X) {
    return 1
  } else {
    let count = 0

    if (sum < X) {
      for (let i = next; i <= (X / N); i++) {
        count += powerSum(X, N, i + 1, sum + Math.pow(i, N))
      }
    }
    return count
  }
}
