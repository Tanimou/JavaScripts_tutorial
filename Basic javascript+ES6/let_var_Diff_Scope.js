//! Difference between let and var keyword
//*wih Let keyword we can set an unique variable. We can't declare it twice
//* while with var keyword it's possible to define a variable many times
var catName = "quincy";
var quote;
var catName = "beau"; //No error, we can declare catName many times with var
let chaton = "animal";
//var chaton //we can't declare chaton twice here because it was already declared once with let

//! Compare scopes of var and let keywords
//*when we declare a variable with var, it is declared globally or locally if it is inside of a function
//*however the scope of let is limited to the block statement that it was declared in.
//*a block statement is for example a switch statement or a if statement or a function statement etc

function checkScope() {
  /* // ? i = "function scope";
 ? if (true) {
  ?  i = "block scope";
   ? console.log("Block scope i is: ", i); //*the output will be: "Block scope i is: block scope"
  ?}
  ?console.log("Function scope i is: ", i); //*the output will be: "Block scope i is: block scope" too
  ?
  */

  let i = "function scope"; //* declaration of i inside of block statement "function"
  if (true) {
    let i = "block scope"; //*we can declare i twice here because it is declared inside of a block statement "if"
    console.log("Block scope i is: ", i); //*the output will be: "Block scope i is: block scope"
  }
  console.log("Function scope i is: ", i); //*the output will be: "Block scope i is: function scope"
}
checkScope();
