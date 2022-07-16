//! Write concise declarative functions
console.log();
console.log("Write concise declarative functions :");
console.log();
//?An object can contain a function. When defining functions within objects , we have to use the keyword function as follows:
//*person = {
//*name: "Taylor",
//*  sayHello: function () {
//*  return `Hello! My name is ${this.name}.`;
//* },
//*};
// ?we can remove the function keyword and colon(":") altogether when defining functions in objects. Here's an example of this syntax:
//*person = {
//* name: "Taylor",
//*  sayHello() {
//*  return `Hello! My name is ${this.name}.`;
//* },
//*};

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);
