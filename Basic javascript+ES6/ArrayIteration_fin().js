//!find() function
//*find() is gonna search an item in the array and return that item

const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
const found = objects.find((item) => item.id === 3);
console.log(found);
