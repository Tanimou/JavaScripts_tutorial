//! Create strings using template literals
console.log();
console.log(" Create strings using template literals:");
console.log();

//*we use ${variable} to create strings and also ``to wrap the string and not '' or ""
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; //The ${variable} syntax used above is a placeholder.
//Basically, you won't have to use concatenation with the + operator anymore.
// To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }

console.log(greeting);

const resulte = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(resulte.failure);
console.log(failuresList);
