//*! Build JavaScript Object
//*declaration of the JavaScript Object

ourDog = {
  name: "Camper", //for the set of properties we can ommit the "" and just declare directly the name of the property,
  //but the value of the property must be declared between "" if the value is a string
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};
//* We can access the JavaScript Object properties by 2 ways:
//* 1- by dot notation, 2- by bracket notation
//!Accessing object properties with dot notation

nameofDog = ourDog.name;
numberofDogLegs = ourDog.legs;
numberofDogtails = ourDog.tails;
numberofDogfridens = ourDog.friends;
console.log(nameofDog);
console.log(numberofDogfridens);

//*! Accessing object properties with bracket notation (useful when you have a space in object properties)

testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
  12: "yes",
};
entreeValue = testObj["an entree"];
drinkValue = testObj["the drink"];
numValue = testObj[12];
console.log(entreeValue);
console.log(numValue);

//*we can also add/modify some more properties to objects

testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
  12: "yes"
};
testObj.dessert = "cake"; //adding the propertie "a dessert" to the object testObj
testObj["the drink"] = "juice"; //modifying the property "the drink" to the object testObj
console.log(testObj);

//*and also delete some properties

delete testObj["an entree"]; //deleting the propertie "an entree" from the object testObj
console.log("-----------deletion--------");
console.log(testObj);

//!display object properties with Object.keys() and their values with Object.values
console.log();
console.log(
  "display object properties with Object.keys() and their values with Object.values:"
);
console.log();

const band={
  vocals:"Robert Plant",
  guitar:"Jimmy page",
  bass:"John Paul Jones",
  drums:"Bonhman"
}
console.log(Object.keys(band)); 
console.log(Object.values(band)); 
console.log();

for (let job in band) {
  //put each property of band into job succeedly
  console.log(`On ${job}, it's ${band[job]}!`);
}

//!Using objects as an alternative for switch statement

function phoneticLookup(value) {
  var lookup = {
    alpha: "adams",
    bravo: "boston",
    charlie: "chicago",
  };
  return lookup[value];
  /*instead of doing switch (value) {
            case "alpha":
               result = "boston"
                break;
                case "bravo":
                    result = "boston"
        
            default: result = "NULL"
                break;
        }*/
}
console.log(phoneticLookup("alpha"));

//!Checkin object properties with hasownproperty() method
console.log("Checkin object properties with hasownproperty() method");
console.log();
var lookup = {
  alpha: "adams",
  bravo: "boston",
  charlie: "chicago",
};
function checkinObject(checkProp) {
  return lookup.hasOwnProperty(checkProp) ? lookup[checkProp] : "Not found";
}
console.log(checkinObject("bravo"));
//! accessing nested object
console.log();
console.log("accessing nested object");
console.log();
//*creation of a nested object
myStorage = {
  //first object
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
  //second object
  bicycle: {
    inside: {
      color: "red",
      size: 25,
    },
    outside: {
      form: "circle",
      state: "good",
    },
  },
};
console.log(myStorage.car.inside["glove box"]);
console.log(myStorage.bicycle.outside.state); //or console.log(myStorage.bicycle.outside["state"])

//! accessing nested array object
console.log();
console.log("accessing nested array object");
console.log();
//*creation of an object array

myPlants = [
  //first object
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
    format: "Unknow format",
  },
  //second object
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

console.log(myPlants[1].list[0]);
console.log(myPlants[0].list[1]);
console.log(myPlants[0].format); // or console.log(myPlants[0]["format"])

const object={
  message:"hello, world",
  getmessage(){
    const message="hello, earth";
    return this.message// this references to its parent which is object
              //so this.message will return the message:"hello, world"
  }
}
console.log(object.getmessage());


