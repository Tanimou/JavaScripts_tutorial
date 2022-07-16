//! Use arrow function to write concise anonymous functions: convert a anonymous function into an arrow functions
//*an anonymous function is a function that doesn't have a name
//*whenever we have an anonymous function we can convert it into an arrow functions

var magic = function () {
  return new Date();
};
//?this function can be convert into :

var magic = () => new Date();

//!write arrow functions with parameters
console.log();
console.log("write arrow functions with parameters :");
console.log();
//?this function :
var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};
//? can be converted into :
myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2, 3], [4, 5, 6]));

//!write higher order arrow functions
console.log();
console.log("write higher order arrow functions:");
console.log();
const realNumberArray = [4, 5.6, -9, 3.14, 42, -85, -44, 8.34];

//*if there is one parameter, we don't need to put parentheses
const squareList = (arr) =>
  arr.filter((num) => Number.isInteger(num) && num > 0).map((x) => x * x);

console.log(squareList(realNumberArray));

//*the default parameters

result = (
  () =>
  (number, val = 1) =>
    number + val
)(); //we set val to 1 as a default value
//When we return a function inside of another function we must add () at the end
console.log(result(5)); // we can say also console.log(result(6,8))
