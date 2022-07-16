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
