// Camelcase problem
function camelcase(s) {
  let count = 1
  for(let i=0; i<s.length; i++){
    let char = s.charAt(i)
    if( char == char.toUpperCase()){
        count +=1
    }
  }
  return count
}
