//! Using the test method
//*Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.


//*If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.


//*JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses),


//* and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));// this will return true but if we were to use testRegrx=/code/, it will return false because Code!=code 

//*We can also search more that one pattern. By adding "|" between the patterns we want to look for:

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString))// this will search either pattern (dog, cat, bird, fish) in the petString string


