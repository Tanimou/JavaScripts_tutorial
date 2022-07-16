//!Arrays of functions
console.log()
console.log('Arrays of functions:')
console.log()
function jump() {
    console.log("You jump")
}
function kick() {
  console.log("You kick");
}

function punch() {
  console.log("You punch");
}

function block() {
  console.log("You block");
}

let actions=[jump,punch,kick,block]
actions.forEach(a => a());