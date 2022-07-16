//!sort() function
//*Function used to determine the order of the elements.
//*It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
const sortt = [1, 5, 8, 3, 2, 10, 92, 55, 90, 11, 333].sort((a, b) => a - b); //a-b means to sort in an croissant order, b-a means this in a decroissant order
console.log(sortt);
