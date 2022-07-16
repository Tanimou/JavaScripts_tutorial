//!every()
//*every() returns a boolean and takes a function as argument
//*every item in the array have to meet the condition to be true or else every() return false

const allPositiveNumbers = [1, 2, 3].every((item) => item > 0); //return true if all numbers in the array are positive
console.log(allPositiveNumbers);
