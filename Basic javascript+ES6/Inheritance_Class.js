//! Inheritance class with "extends"
console.log();
console.log("Inheritance class with extends:");
console.log();
//*Now we have an class Pizza:
class Pizza{ 
    crust="original"//* here is a new way to declare a public field. it must be declared before the constructor
    #sauce="traditional"//*here is a new way to declare a private field. it must be declared above the constructor
    #size;
    constructor(pizzaSize){
        this.#size=pizzaSize;
   
    }
    get getCrust() {
        console.log("you are getting crust")
        return this.crust
    }
    
    get getsize() { return this.#size }

    set setCrust(pizzaCrust) {
        console.log("you are setting crust")
        this.crust=pizzaCrust;
    }
    HereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza`)
    }
}

//*we can create a different type of pizza from pizza class:

class specializedPizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize);//* like in java we call super() function for the child class
        this.type="the Works"
    }
    slice(){
        console.log(`Our ${this.type} ${this.getsize} pizza has 8 slices.`)
    }
}

const mySpecialty = new specializedPizza("Gigantesque")
mySpecialty.slice();
SpecialCrust=mySpecialty.getCrust;/*?*/

const myPizza=new Pizza("large")
myPizza.HereYouGo();
myPizza.setCrust="yoyo"
