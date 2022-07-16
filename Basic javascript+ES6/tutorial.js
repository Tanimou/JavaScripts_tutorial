//we don't necessarly need to put ";" at the end of each line of code, we can ommit it
var a = 0;
//*it is possible to set a variable without using the "var" keyword
b = " firstLine\n\t\\secondLine\ntihirdLine";
a = b.length;
var c = "I am a ";
//name = "beau";
//c += name;
let value = "freecodecamp";

function wordblanks(noun, age, verbe) {
  result = "";
  result += "the " + noun + " are " + age + " years old" + " and he " + verbe;
  console.log(result);
}
wordblanks("dog", 14, "run");
c = 'I am a "double quoted" string inside "double quote"';
//prompt("comment vas tu?")
console.log(c);
console.log();

//!add some elements to the beginning of our array with unshift()

var ourArray = ["stimpson", "cat", "dog"];
console.log("ourArray before unshift()");
console.log();
console.log("Our Array: " + JSON.stringify(ourArray)); //*JSON.stringify() function is a function that change an variable into a string
console.log();
console.log("ourArray after unshift()");
console.log();
ourArray.unshift("tanimou", "cisse");
console.log("OurArray: " + JSON.stringify(ourArray));
console.log();

//!add some elements to the end of an array with push()

var ourArray = ["stimpson", "cat", "dog"];
console.log("ourArray before push()");
console.log();
console.log("Our Array: " + JSON.stringify(ourArray));
console.log();
console.log("ourArray after push()");
console.log();
ourArray.push("tanimou", "cisse");
console.log("Our Array: " + JSON.stringify(ourArray));

//! Insert some elements inside of an array with splice method
console.log();
console.log("Insert some elements inside of an array with splice method:");
console.log();
var ourArray = ["stimpson", "cat", "dog","lion","bird"];
console.log("ourArray before insertion");
console.log();
console.log("Our Array: " + JSON.stringify(ourArray));
console.log();
console.log("ourArray after insertion");
console.log();
ourArray.splice(2,0,"tanimou");//with splice method we say that we want to insert at the index=2 "tanimou" and "cisse" 
                                       //0 means that there is no splice to do, therefore it adds instead of splice
                                       //if we didn't specify the third parameter, splice method will delete the element (we have to specify 1 as second parameter to say that we want to delete 1 element)
console.log("Our Array: " + JSON.stringify(ourArray));

//! Replace some elements inside of an array with splice method
console.log();
console.log("Replace some elements inside of an array with splice method:");
console.log();
var ourArray = ["stimpson", "cat", "dog","lion","bird"];
console.log("ourArray before replace");
console.log();
console.log("Our Array: " + JSON.stringify(ourArray));
console.log();
console.log("ourArray after insertion");
console.log();
ourArray.splice(3,1,"tanimou");//with splice method we say that we want to replace at the index=3 "lion" to "tanimou" 
                                       //1 means that there is a splice to do, therefore it replace instead of splice
                                       //if we didn't specify the third parameter, splice method will delete the element (we have to specify 1 as second parameter to say that we want to delete 1 element)
console.log("Our Array: " + JSON.stringify(ourArray));

//!remove some elements from our array with pop(): remove the last element of an Array

console.log();
var myArray = [
  ["john", 23],
  ["joe", 25],
];
console.log("myArray before pop()");
console.log();
console.log("My Array: " + myArray);
var removefromArray = myArray.pop();
console.log();
console.log("myArray after pop()");
console.log();
console.log("My Array: " + myArray);
console.log("removefromArray =" + removefromArray);

//!remove some elements from our array with shift(): remove the first elements from an Array

var myArray = [
  ["john", 23],
  ["joe", 25],
];
console.log();
console.log("myArray before shift()");
console.log();
console.log("My Array: " + myArray);
var removefromArray = myArray.shift();
console.log();
console.log("myArray after shift()");
console.log();
console.log("My Array: " + myArray);
console.log("removefromArray =" + removefromArray);
console.log();

//!remove an element anywhere in the array with splice() method
console.log();
console.log("remove an element anywhere in the array with splice() method:");
console.log();
var myArray2 = [
  ["john", 23],
  ["joe", 25],
  ["jaja", 26],
  ["yiyou",30],
  ["jaffal",45]
];
console.log("myArray before removing the third element");
console.log();
console.log("My Array: " + JSON.stringify(myArray2));
console.log();
myArray2.splice(2,1)// the splice method allows us to splice(trancher). 
                   //For example if we want to remove the third element of our array, which correspond of index=2, we specify in parameter 2 
                  //and then we specify the number of elements to remove, here 1
console.log();
console.log("myArray after deletion");
console.log();
console.log("My Array: " + JSON.stringify(myArray2));

//!delete an element without removing it from an Array with delete function
var myArray3 = [
  ["john", 23],
  ["joe", 25],
  ["jaja",26]
];
console.log();
console.log("myArray before deletion");
console.log();
console.log("My Array: " + JSON.stringify(myArray3));
console.log();
console.log("myArray after deletion");
console.log();
delete myArray3[1]
console.log("My Array: " + JSON.stringify(myArray3));

//!Global scope variable: variables that are defined outside of a function
//!and can be accessed by any functions

var myGlobal = 10; //*global variable

function fun1() {
  oops = 5; //* it is possible to set a variable without using the "var" keyword
  //* but because we didn't put the "var" keyword, oops becomes Global
  //* and can be accessed by any functions

  var fifi = 30; //* this variable is set only to this function
  //* and can't be used by other functions. This variable is a local scope variable
}

function fun2() {
  var output = ""; //*non global variable
  //*because it is defined with var keyword and inside of a function
  //*and can be used only by this function

  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oops != "undefined") {
    output += " oops: " + oops;
  }
  console.log(output);
}
fun1();
fun2();

//!Stand in line: notion of queue (LIFO: Last in First Out)

testArr = [1, 2, 3, 4, 5];
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
console.log("Befor: " + JSON.stringify(testArr)); //*JSON.stringify() function is a function that change an variable into a string
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//*the strict equality sign with if statement

function testStrictEquals(val) {
  if (val === 12)
    //*compare the value and the type of the value of "val" with those of 12
    return "equal to 12";
  else return "not equal to 12";
}
console.log(testStrictEquals(12));

//*the strict inequality sign with if statement

function testStrictinEquals(val) {
  if (val !== 12)
    //*compare the value and the type of the value of "val" with those of 12
    return "not equal to 12";
  else return "equal to 12";
}

console.log(testStrictinEquals(145));

//*!return boolean value from function

function isless(a, b) {
  return a < b; //*return true if a<b or flase if a>b
}
console.log(isless(10, 15));

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
  12: "yes",
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
console.log()

for (let job in band) { //put each property of band into job succeedly
  console.log(`On ${job}, it's ${band[job]}!`)
    
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
console.log();
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
console.log(checkinObject("charlie"));
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

//! Inheritance objects with Object.create() function
console.log();
console.log("Inheritance objects with Object.create() function");
console.log();
//*let's consider we have this object
vehicule={
  wheel:4,
  engine(){
    return "vrooom"
  }
}
//* we want to create a new object truck that has the same properties as vehicule + others ones,
//*because a truck is also a vehicule. We can do that with Object.create() function:

truck= Object.create(vehicule)//now truck inherited all the properties from vehicule
truck.door=2//we add another property to the truck object
console.log(truck.wheel);

//?EXERCISE:RECORD COLLECTION?
/*update collection function:
return the full collection
if we have an empty string for val we just delete the poperty
if we have the property track and val, instead of updating the whole track, we just put the track at the end of the track array
*/
console.log();
console.log("Exercise: Record collection:");
console.log();
collection = {
  2548: {
    album: "Slippery when wet",
    artist: "Bon voyage",
    tracks: ["let it rock", "You give love a bad name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Rober Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};
//keeping a copy of collection for tests
collectioncopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, valeur) {
  if (valeur === "") delete collection[id][prop];
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] ? collection[id][prop] : [];
    collection[id][prop].push(valeur);
  } else collection[id][prop] = valeur;

  return collection;
}
console.log("Collection before update:");
console.log();
console.log(collection);
console.log();
console.log("Collection after update:");
console.log();
updateRecords(5439, "artist", "BOBODIOULASSO");
//updateRecords(5439, "tracks", "ALIbobo et voyage");
updateRecords(5439, "tracks", "yaya");
console.log(updateRecords(5439, "tracks", "shingeki"));

//?EXERCISE :PROFILE LOOKUP with nested array object?
console.log();
console.log("Exercise:Profile lookup with nested array object:");
console.log();
//*create a function where we put a name and a property of that name and then reurn the value of the property
//*if the name we give doesn't correspond to any contact, then return no such name
//* if this is the case for property, then return no such property

contacts = [
  {
    firstname: "akira",
    lastname: "laine",
    number: "98756421",
    likes: ["pizza", "coding", "brownie points"],
  },

  {
    firstname: "marry",
    lastname: "potter",
    number: "1479535",
    likes: ["hogwarts", "magic", "hagrid"],
  },
  {
    firstname: "sherlock",
    lastname: "holmes",
    number: "865214765",
    likes: ["violin", "foot"],
  },

  {
    firstname: "kristian",
    lastname: "vochae",
    number: "6978623",
    likes: ["JavaScript", "gaming", "foxes"],
  },
];

function LookupProfile(name, prop) {
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstname"] == name)
      return (prop = contacts[i][prop]
        ? contacts[i][prop]
        : "no such property");
  }

  return "no such contact";
}
console.log(LookupProfile("marry", "lastname"));

//!Generating random fraction with math.random() method
console.log();
console.log("Generating random fraction with math.random() method:");
console.log();
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

//!Generating random whole number with math.floor() method
console.log();
console.log("Generating random whole number with math.floor() method:");
console.log();
function randomWholeNumber() {
  return Math.floor(Math.random() * 10); //generate a whole number between 0 and 10
}
console.log(randomWholeNumber());

//! generate random whole numbers within a range
console.log();
console.log("Generate random whole numbers within a range:");
console.log();
function RandomRangeWholeNumbers(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin; //generate a whole number between ourMin and ourMax
}
console.log(RandomRangeWholeNumbers(5, 15));

//! Use parseInt() method to convert a string to integer
console.log();
console.log("Use of parseInt() method to convert a string to integer:");
console.log();
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));

//! Use the parseInt() method with a radix
console.log();
console.log("Use of the parseInt() method with a radix:");
console.log();
function convertToIntegerwithRadix(str) {
  return parseInt(str, 2); //convert the sting to integer in base 2
}
console.log(convertToIntegerwithRadix("10011"));

//! Using multiple ternary operators
console.log();
console.log("Using multiple ternary operators:");
console.log();
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; // if num > 0 return positive
  // else if num < 0 return negative else return zero
}
console.log(checkSign(10));

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

//! Mutate an array declared with const
console.log();
console.log("Mutate an array declared with const:");
console.log();
const s = [5, 7, 2];
console.log("Before mutation: " + JSON.stringify(s));

function editPlace() {
  // s=[2,5,7] //!we will get an error because we cannot change a const array. However
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  //! this trick works even though s is a const array
}
editPlace();
console.log("After mutation" + JSON.stringify(s));

//! Prevent object mutation with object.freeze() method
//*as seen above a const declaration alone doesn't really protect a array or an object from mutation
//*to remediate to that we use object.freeze() method

function freezeObj() {
  //create a const object
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS); //with this method we cannot change the object MATH_CONSTANTS
  try {
    MATH_CONSTANTS.PI = 99; //this mutation is possible if we don't use Object.freeze() method
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//! Use arrow function to write concise anonymous functions: convert a anonymous function into an arrow functions
//*an anonymous function is a function that doesn't have a name
//*whenever we have an anonymous function we can convert it into an arrow functions

var magic = function () {
  return new Date();
};
//?this function can be convert into :

var magic = () => new Date();

//*write arrow functions with parameters
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

//*write higher order arrow functions
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


//!Callback function
//*we can pass a function as an argument of a function 
console.log()
console.log("Callback function")
console.log()
function displayConsole(output) {
    console.log(output);
}

function setMessage(text,callback) {
    message=text
    callback(message);
}

setMessage('Hi there',displayConsole);//we passed the function displayConsole as an argument to setMessage function

//! Closure
//*we use this method to private our variables so that nobody can access
console.log();
console.log("Closure:");
console.log();

let score = (function () {
  let points = 0; //point becomes private because his scope is a local scope
  return function () {
    points++; //but we can still have access to point variable from outer function. that's closure
    return points;
  };
})();
console.log(score());
console.log(score());
console.log(score());
//*Closure means that inside of a function we're getting access to variables which are defined outside of the function
//passed=4
//addTo=function() {
  //inner=2
 // return passed+inner;
//}
//console.log(addTo())

var addTo=function(passed) { //*addTo() is an outer function
  var add=function(inner) { //*add() is an inner function
return passed+inner; //we have access to vars from the outer function
  }
  return add;
}
addThree=addTo(3);//addTo becomes a function as it returns a function so we can assign to the variable addThree that becomes also a function
console.log(addThree(3));
console.log(addTo(3)(6)) //or we can simply invoke addTo() like this: with 2 parenthesis as he have 2 separate parameters

//!Arrays of functions
console.log()
console.log('Arrays of functions:')
console.log()
function jump() {
    console.log("You jump")
}
function kick() {
  console.log("You kick");
}

function punch() {
  console.log("You punch");
}

function block() {
  console.log("You block");
}

let actions=[jump,punch,kick,block]
actions.forEach(a => a());

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

//! Use Destructuring Assignment to Extract Values from objects
//*Destructuring assignment is special syntax for neatly assigning values taken directly from an object
console.log();
console.log("Use Destructuring Assignment to Extract Values from objects :");
console.log();

const user = {
  name: "John Doe",
  age: 34,
};
//?this code:?
/*

const  name = user.name;
 const age = user.age;
 */

//?can be write easily by:?

//const { name, age } = user; //here we create 2 variables const name and age and we assign them respectively user.name and user.age.
//Note that variables have the same name that ones of object user
//console.log(name);

//!Use Destructuring Assignment to Assign Variables from Objects
//*Destructuring allows you to assign a new variable name when extracting values.
//* You can do this by putting the new name after a colon when assigning the value.
console.log();
console.log(" Use Destructuring Assignment to Assign Variables from Objects:");
console.log();

//*Here's how you can give new variable names in the assignment:
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; //we begin first by specify the property's name of our object then we put ":" and the name of the variable in which we want to assign to
console.log(highToday, highTomorrow);

//!Use Destructuring Assignment to Assign Variables from Nested Objects
console.log();
console.log(
  "Use Destructuring Assignment to Assign Variables from Nested Objects :"
);
console.log();
//*we can use the same principles from the previous two lessons to destructure values from nested objects

const LOCAL_FORECAST = {
  //Here we have 3objects (yesterday,today,tomorrow) nested in the LOCAL_FORECAST object
  yesterday: {
    low: 61,
    high: 75,
  },

  today: {
    low: 64,
    high: 77,
  },

  tomorrow: {
    low: 68,
    high: 80,
  },
};
//if we want to extract the properties low and high from today object
// and assign them respectively to lowToday and highTodayy variables we do like this:

const {
  today: { low: lowToday, high: highTodayy },
} = LOCAL_FORECAST;
console.log(lowToday, highTodayy);

//!Use Destructuring Assignment to Assign Variables from Arrays
console.log();
console.log(" Use Destructuring Assignment to Assign Variables from Arrays:");
console.log();

//*One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
//*Consequently, you cannot pick or choose which elements you want to assign to variables
//*Destructuring an array lets us do exactly that:
const [k, z] = [1, 2, 3, 4, 5, 6];
console.log(k, z);
//*We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
[h, j, , , m] = [1, 2, 3, 4, 5, 6];
console.log(h, j, m);

//!Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
console.log();
console.log(
  "Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements :"
);
console.log();
//*In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;

  return arr;
}
console.log(removeFirstTwo(source));

//!Use Destructuring Assignment to Pass an Object as a Function's Parameters
console.log();
console.log(
  "Use Destructuring Assignment to Pass an Object as a Function's Parameters :"
);
console.log();
/* //?Here we have an object: ?
//*     const profileData={
   //*                      names:"aminata",
   //*                      ages:16,
   //*                      nationalitys: "nigerienne",
   //*                      locations: "niger"
 //*                        }

 ?Let's consider the code below: ?
 //*const profileUpdate = (profileData) => {
 //*  const { names, ages, nationalitys, locations } = profileData;
 //*  return names,ages,nationalitys,locations
 //*};
 ? This effectively destructures the object sent into the function. This can also be done in-place:?
//*const profileUpdate = ({ names, ages, nationalitys, locations }) => (names,ages,nationalitys,locations);
? ?
*/
const stats = {
  max: 56,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -2,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2; //we use this method only to destructure  properties of our object that have to be put as a parameter for use within the function
console.log(half(stats)); //remember that the parameter must be still an object

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

//! Write Concise Object Literal Declarations Using Object Property Shorthand
console.log();
console.log(
  "Write Concise Object Literal Declarations Using Object Property Shorthand :"
);
console.log();
//this code:
getMousePosition = (x, y) => ({
  x: x,
  y: y,
});
//can be easily written by:
getMousePosition = (x, y) => ({ x, y }); //this works if we have the same names
console.log(getMousePosition(2, 3));

createPerson = (name, age, gender) => ({ name, age, gender }); //this code is the same as: createPerson=(name, age, gender)=>({ name: name,
// age: age,
//gender:gender
// });
//it will create an object with properties that can be be filled out by the user
console.log(createPerson("tatou", 25, "male"));

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
zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

class Car{
  static numberOfCars=0 //* a class can have its own property or method that not any one object can access
  static beginrace(){
    console.log("The race has begun")
  }
  constructor(model){
    this.model=model
    Car.numberOfCars+=1
  }
}

let car1=new Car("Mustang")
let car2=new Car("Corvette")
let car3=new Car("Challenger")
//*in order to use a static property or method we need to list the name of the class in which it belongs to
console.log(Car.numberOfCars)
Car.beginrace()/*?*/

//*Objects created from a class don't have access to anything that is static
//car1.beginrace()


//! Use getters and setters to control Acess to an object
console.log();
console.log(" Use getters and setters to control Acess to an object:");
console.log();

class Book {
  constructor(author) {
    this.author = author;
  }
  //getter
  get writer() {
    return this.author;
  }
  //*we can simply set this by a method:
 /* getWriter(){return this.author} */

//*same thing for the setter:
/* setWriter(updateAuthor){this.author= updateAuthor}*/


  //setter
  set Writer(updateAuthor) {
    this.author = updateAuthor;
  }
}

function makeClass2() {
  class Thermostat {
  
    constructor(temp) {
     
      this._temp = (5 / 9) * (temp - 32);
    }
    get getTemperature() {    //getTemperature(){return this._temp}
      return this._temp;
    }
    set setTemperature(updateTemp) {  //setTemperature(updateTemp){this._temp= updateTemp;}
      this._temp = updateTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.getTemperature; //this is going to use the getter because we want to get the value temperature and store it in temp
//we can also say let temp= thermos.getTemperature();
console.log(temp);
thermos._temp
thermos.setTemperature = 26; //this's gonna use the setter because we set a value of 26 to temperature
//we can also say thermos.setTemperature(26)
temp = thermos.getTemperature;
console.log(temp);


//! Inheritance class with "extends"
console.log();
console.log("Inheritance class with extends:");
console.log();
//*Now we have an class Pizza:
class Pizza {
  crust = "original"//* here is a new way to declare a public field. it must be declared before the constructor
  #sauce = "traditional"//*here is a new way to declare a private field. it must be declared above the constructor
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;

  }
  get getCrust() {
    console.log("you are getting crust")
    return this.crust
  }

  get getsize() { return this.#size }

  set setCrust(pizzaCrust) {
    console.log("you are setting crust")
    this.crust = pizzaCrust;
  }
  HereYouGo() {
    console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza`)
  }
}

//*we can create a different type of pizza from pizza class:

class specializedPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);//* like in java we call super() function for the child class
    this.type = "the Works"
  }
  slice() {
    console.log(`Our ${this.type} ${this.getsize} pizza has 8 slices.`)
  }
}

const mySpecialty = new specializedPizza("Gigantesque")
mySpecialty.slice();
SpecialCrust = mySpecialty.getCrust;/*?*/

const myPizza = new Pizza("large")
myPizza.HereYouGo();
myPizza.setCrust = "yoyo"




//!Create a module Script

//*ES6 introduced a way to easily share code among JavaScript files.
//* This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them

//*In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:
//?<script type="module" src="filename.js"></script>

//*A script that uses this module type can now use the import and export features

//!Create a JavaScript Promise
console.log();
console.log(" Create a JavaScript Promise:");
console.log();
//*A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
//*When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one.
//* It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

//?const myPromise = new Promise((resolve, reject) => {});

//!Complete a promise with resolve and reject functions
//*A promise has three states: pending, fulfilled, and rejected.
//* The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise.
//* The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, 
//*and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer=true;

  if (responseFromServer) {
    resolve(result="We got the data");
  } else {
    reject(error="Data not received");
  }
});

//! Handle a Fulfilled promise with "then" and a Rejected promise with "catch" functions
//*Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request.
//* When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. 
//*This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

//?myPromise.then((result) => {}) //"result" comes from the argument given to the resolve method

makeServerRequest.then((result) => {
  console.log(result);
});

//*catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

//?myPromise.catch((error) => {});// error is the argument passed into the reject method

makeServerRequest.catch((error) => {
  console.log(error);
});

//! JSON: Javascript Object Notation
//* JSON is used to send and receive data. It is a text format that is completely language independant
//*Meaning JSON is used to send and receive data in many languages. It is a text format that is completely language
//*Not just in JavaScript
//*we can use Json for send and receive data from database. When we send data we must stringify them with JSON.stringify() and when we receive data(usually in string statement) we may use JSON.parse() to convert them to exploitable data

//!Errors handling
console.log();
console.log( "Errors Handling:");
console.log();
//*te function try catch is used to to catch errors inside the try block and display them in our console
//*We can customize our own errors as well with throw new Error(messageError) with messageError as a string
while(i <=5)
{
try {
  
  if(i % 2 !==0){
    throw new Error("Odd number!")
  }
  console.log("Even number!")
} catch (error) {
  console.error(error.stack)
 //* console.warn(error) //*display a warn message instead of an error one
} finally {  //*the finally block is executed immediately after the catch block, no matter what
console.log("...Finally")
i++
}
}

//!The Document Object Model (DOM)
console.log();
console.log("The Document Object Model (DOM):");
console.log();
//*we are going to interact with html file

//?
//* const view1=document.getElementById("view1")


//! Array iteration
//!forEach() function 
[1,2,3].forEach(function(item,index){
  console.log(item,index)
})

//!map() Function
//*map() takes a item that's from the array, does something to it 
//*and then put a new thing back in the new array
//*and each of these makes a brand new array

const three=[1,2,3]
const doubled=three.map(function(item){
  return item*2
})
console.log(doubled)

//!filter() function
//*filter is gonna take an array and check each item in the array. It gets some kind of condition to see if it's true or false
//*If it's true, it's going to put the item back in the array
//*If it's false, it's not going to put the item back in the new array
//*and each of these makes a brand new array

const ints=[1,2,3,4,5,6,7,8]
const evens=ints.filter(function(item){
  return item%2 == 0//*this is the condition that filter() is going to look at
})
console.log(evens)

//!reduce() Function
//*reduce() takes a array and do something and pass the result to the next iteration
//*along with the next item in the array

/*(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.*/

const summ=[1,2,3,4,5,6,7].reduce(function(result,item){
  return result+item
},0)//we specify the initial value of result to start the accumulation
console.log(summ)

//!some() Function
//*some() returns a boolean and takes a function as argument

const hasNegativeNumbers=[1,2,3,-4].some(item=>item<0)//*some() will check in the array if there's a negative number or not
console.log(hasNegativeNumbers)

//!every()
//*every() returns a boolean and takes a function as argument
//*every item in the array have to meet the condition to be true or else every() return false

const allPositiveNumbers=[1,2,3].every(item=>item>0)//return true if all numbers in the array are positive
console.log(allPositiveNumbers)

//!find() function
//*find() is gonna search an item in the array and return that item

const objects=[{id:1},{id:2},{id:3}]
const found=objects.find(item=>item.id===3)
console.log(found)

//!sort() function
//*Function used to determine the order of the elements. 
//*It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
const sortt=[1,5,8,3,2,10,92,55,90,11,333].sort((a,b)=>a-b) //a-b means to sort in an croissant order, b-a means this in a decroissant order
console.log(sortt)