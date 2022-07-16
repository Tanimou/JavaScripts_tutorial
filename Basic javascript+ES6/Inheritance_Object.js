//! Inheritance objects with Object.create() function
console.log();
console.log("Inheritance objects with Object.create() function");
console.log();
//*let's consider we have this object
vehicule = {
  wheel: 4,
  engine() {
    return "vrooom";/*?*/
  },
};
//* we want to create a new object truck that has the same properties as vehicule + others ones,
//*because a truck is also a vehicule. We can do that with Object.create() function:

truck = Object.create(vehicule); //now truck inherited all the properties from vehicule
truck.door = 2; //we add another property to the truck object
console.log(truck.wheel);/*? truck.engine()*/
