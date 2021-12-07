/**
 * Function to find the number of words in s following the camelCase style
 * @param {string} s string to analyze
 * @returns {number} the number of words in s
 */
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

/**
 * Function to find the minimum number of characters to make the password strong
 * @param {number} n the length of the password
 * @param {string} password the password to test
 * @returns {number} the minimun number of characters to add
 */
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

/**
 * Function that given an array of integers, finds the sum of its elements
 * @param {array} ar an array of integers 
 * @returns {number} the sum of the array's elements as a single integer
 */
function simpleArraySum(ar) {
  let sum = ar.reduce((n1, n2) => n1 + n2, 0)
  return sum
}

/**
 * Function that given a square matrix,
 * Calculates the absolute difference between the sums of its diagonals
 * @param {array} arr an array of integers
 * @returns {number} the absolute diagonal difference
 */
function diagonalDifference(arr) {
  let primaryDiagonal = 0
  let secondaryDiagonal = 0

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i]
    secondaryDiagonal += arr[i][arr.length - i - 1]
  }
  return Math.abs(primaryDiagonal - secondaryDiagonal)
}

/**
 * Recursive function that calculates the number of possible combinations that a 
 * Number can be expressed as a sum of powers
 * @param {number} X the integer to be found by power combinations 
 * @param {number} N the integer power to raise numbers to
 * @param {number} next initial value 1, the integer where nested iteration starts, the next value to raise
 * @param {number} sum initial value 0, the sum of powers found in a complete iteration
 * @returns {number} the number of possible combinations calculated
 */
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
