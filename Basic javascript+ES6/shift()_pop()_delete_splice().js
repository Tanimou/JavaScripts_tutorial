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