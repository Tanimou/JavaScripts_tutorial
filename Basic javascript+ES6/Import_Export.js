//! Use export to share a code blcok
console.log();
console.log("Use export to share a code block:");
console.log();
//*Imagine a file called math_functions.js that contains several functions related to mathematical operations.
//* One of them is stored in a variable, add, that takes in two numbers and returns their sum.
//* You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it

//? export const add = (x, y) => { return x + y;}

//*The above is a common way to export a single function, but you can achieve the same thing like this:
//?const add = (x, y) => { return x + y;}
//?export { add }

//*When you export a variable or function, you can import it in another file and use it without having to rewrite the code.
//*You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

//?export { add, subtract };

const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { uppercaseString, lowercaseString };

//! Reuse Javascript code using import
console.log();
console.log("Reuse Javascript code using import:");
console.log();
//*import allows you to choose which parts of a file or module to load.
//* In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

//?import { add } from './math_functions.js';

//*Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest.
//* The ./ tells the import to look for the math_functions.js file in the same folder as the current file.
//* The relative file path (./) and file extension (.js) are required when using import in this way.
//*You can also import more than one item from the file by adding then in the import statement:

//?import { add, subtract } from './math_functions.js';

import { uppercaseString, lowercaseString } from "./string_functions.js";

uppercaseString("hello");
lowercaseString("WORLD!");

//*We can also import everything from a file with "*":

//?import * as myMathModule from "./math_functions.js";

//*this will import everything from the math_functions.js file and store it in "myMathModule" object
//*so that we can access all the functions from math_functions.js. for example:

//? myMathModule.add(2,3);

//!Create an export fallback with export default
console.log();
console.log("Create an export fallback with export default:");
console.log();
//*There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file.
//* It is also used to create a fallback value for a file or module.

//?export default function add(x, y) {return x + y;}

//*Remember that we can only have one value be a default export in each module or file. You cannot use export default with var, let, const.

//!Import a default export
console.log();
console.log("Import a default export :");
console.log();
//*In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax.
//*In the following example, add is the default export of the math_functions.js file. Here is how to import it:

//? import add from "./math_functions.js";

//*The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}).
//*add here is simply a variable name for whatever the default export of the math_functions.js file is.
//* You can use any name here when importing a default. For example:

import subtract from "./math_functions.js"; // we import whatever the default export of the math_functions.js file can be
// and place it into the variable subtract to be used

subtract(7, 4);
