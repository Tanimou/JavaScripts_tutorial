//!Use class Syntax to Define a Constructor Function
console.log();
console.log(" Use class Syntax to Define a Constructor Function:");
console.log();
//?Here is an older way to create an object:

//* SpaceShuttle=function(targetPlanet){
//*this.targetPlanet=targetPlanet;
//*}
//*zeus=new SpaceShuttle("Jupiter")
//?Now with ES6, we can do this in a new way using class Syntax and constructor function:



class SpaceShuttle {
  constructor(targetPlanet) { 
    this.targetPlanet = targetPlanet;
  }
}
zeus = new SpaceShuttle("Jupiter");//?
console.log(zeus.targetPlanet);






function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;/*?*/
}
/*?*/
const Vegetable = makeClass();//?
const carrot = new Vegetable("carrot"); //?
console.log(carrot.name);







class Car{
   //* a class can have its own property or attribute or method that not any one object can access if we add "static"
   //* this is called a class attribute 
  static numberOfCars=0
  static beginrace(){
    console.log("The race has begun")
  }
  constructor(model){
    this.model = model/*?*/
    Car.numberOfCars += 1
  }
}

let car1 = new Car("Mustang")/*?*/
let car2=new Car("Corvette")
let car3 = new Car("Challenger")/*?*/
//*in order to use a static property or method we need to list the name of the class in which it belongs to
console.log(Car.numberOfCars)
Car.beginrace()/*?*/
//*Objects created from a class don't have access to anything that is static






class Pet{
  constructor(name){
    this.name = name
}
  getName = () => this.name/*?*/// this.name is written inside an arrow function

    getSurname=function(){
      this.name// this.name is written inside a plain function so it has a reference not to the parent but to the global context
      //this is why we have undefined here because name is not defined globally
    }
  
}
const cat = new Pet("Fluffy")/*?*/
console.log(cat.getName())
console.log(cat.getSurname())