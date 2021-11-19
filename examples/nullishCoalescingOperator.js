// The ?? operator

// Both are the same thing
result = a ?? b
result = (a !== null && a !== undefined) ? a : b

// Check if a variable is defined and non-null
let user
alert(user ?? "Anonymous") // Anonymous (user not defined)

let firstName = null
let lastName = null
let nickName = "Supercoder"

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous")
