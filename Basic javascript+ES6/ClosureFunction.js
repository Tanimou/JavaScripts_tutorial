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