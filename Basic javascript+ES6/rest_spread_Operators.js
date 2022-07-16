//! Use the Rest operator with function parameters
//*the rest operator allows us to create a function that takes a variable number of parameters. The rest operator is "..."
console.log();
console.log("Use the Rest operator with function parameters :");
console.log();
//*without the rest operator

sum = (() => (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
})();
//console.log(sum(1,2,15)) without the rest operator, we can only put up to 3 parameters
//*with the rest operator

sum = (
  () =>
  (...args) =>
    args.reduce((a, b) => a + b, 0)
)(); //* the rest operator put any variable into an array called args

console.log(sum(1, 2, 15, 2));

//! Use the Spread operator to evaluate arrays in-place
//*the spread operator works just like the rest operator, but it expands an already existing array
console.log();
console.log(" Use the Spread operator to evaluate arrays in-place:");
console.log();

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
const arr3 = ["D","E","F","G","H","I","J","K","L","M"]


const arr2 = [...arr1, ...arr3]; // all the content of arr1 and arr3 will be transfered to arr2

console.log(arr2);
