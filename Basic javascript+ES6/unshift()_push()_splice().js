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
ourArray.splice(2,0,"tanimou");//with splice method we say that we want to insert at the index=2 "tanimou"
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