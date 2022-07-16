//!some() Function
//*some() returns a boolean and takes a function as argument

const hasNegativeNumbers = [1, 2, 3, -4].some((item) => item < 0); //*some() will check in the array if there's a negative number or not
console.log(hasNegativeNumbers);
