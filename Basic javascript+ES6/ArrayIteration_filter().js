//!filter() function
//*filter is gonna take an array and check each item in the array. It gets some kind of condition to see if it's true or false
//*If it's true, it's going to put the item back in a new array
//*If it's false, it's not going to put the item back in the new array
//*and each of these makes a brand new array

const ints = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = ints.filter(function (item) {
  return item % 2 == 0; //*this is the condition that filter() is going to look at
});
console.log(evens);
