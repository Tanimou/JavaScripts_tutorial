//!map() Function
//*map() takes a item that's from the array, does something to it
//*and then put a new thing back in the new array
//*and each of these makes a brand new array

const three = [1, 2, 3];
const doubled = three.map(function (item) {
  return item * 2;
});
console.log(doubled);
