//! Use Destructuring Assignment to Extract Values from objects
//*Destructuring assignment is special syntax for neatly assigning values taken directly from an object
console.log();
console.log("Use Destructuring Assignment to Extract Values from objects :");
console.log();

const user = {
  name: "John Doe",
  age: 34,
};
//?this code:?
/*

const  name = user.name;
 const age = user.age;
 */

//?can be write easily by:?

const { name, age } = user; //here we create 2 variables const name and age and we assign them respectively user.name and user.age.
//Note that variables have the same name that ones of object user
console.log(name);

//!Use Destructuring Assignment to Assign Variables from Objects
//*Destructuring allows you to assign a new variable name when extracting values.
//* You can do this by putting the new name after a colon when assigning the value.
console.log();
console.log(" Use Destructuring Assignment to Assign Variables from Objects:");
console.log();

//*Here's how you can give new variable names in the assignment:
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; //we begin first by specify the property's name of our object then we put ":" and the name of the variable in which we want to assign to
console.log(highToday, highTomorrow);

//!Use Destructuring Assignment to Assign Variables from Nested Objects
console.log();
console.log(
  "Use Destructuring Assignment to Assign Variables from Nested Objects :"
);
console.log();
//*we can use the same principles from the previous two lessons to destructure values from nested objects

const LOCAL_FORECAST = {
  //Here we have 3objects (yesterday,today,tomorrow) nested in the LOCAL_FORECAST object
  yesterday: {
    low: 61,
    high: 75,
  },

  today: {
    low: 64,
    high: 77,
  },

  tomorrow: {
    low: 68,
    high: 80,
  },
};
//if we want to extract the properties low and high from today object
// and assign them respectively to lowToday and highTodayy variables we do like this:

const {
  today: { low: lowToday, high: highTodayy },
} = LOCAL_FORECAST;
console.log(lowToday, highTodayy);

//!Use Destructuring Assignment to Assign Variables from Arrays
console.log();
console.log(" Use Destructuring Assignment to Assign Variables from Arrays:");
console.log();

//*One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
//*Consequently, you cannot pick or choose which elements you want to assign to variables
//*Destructuring an array lets us do exactly that:
const [k, z] = [1, 2, 3, 4, 5, 6];
console.log(k, z);
//*We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
[h, j, , , m] = [1, 2, 3, 4, 5, 6];
console.log(h, j, m);

//!Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
console.log();
console.log(
  "Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements :"
);
console.log();
//*In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;

  return arr;
}
console.log(removeFirstTwo(source));

//!Use Destructuring Assignment to Pass an Object as a Function's Parameters
console.log();
console.log(
  "Use Destructuring Assignment to Pass an Object as a Function's Parameters :"
);
console.log();
/* //?Here we have an object: ?
//*     const profileData={
   //*                      names:"aminata",
   //*                      ages:16,
   //*                      nationalitys: "nigerienne",
   //*                      locations: "niger"
 //*                        }

 ?Let's consider the code below: ?
 //*const profileUpdate = (profileData) => {
 //*  const { names, ages, nationalitys, locations } = profileData;
 //*  return names,ages,nationalitys,locations
 //*};
 ? This effectively destructures the object sent into the function. This can also be done in-place:?
//*const profileUpdate = ({ names, ages, nationalitys, locations }) => (names,ages,nationalitys,locations);
? ?
*/
const stats = {
  max: 56,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -2,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2; //we use this method only to destructure  properties of our object that have to be put as a parameter for use within the function
console.log(half(stats)); //remember that the parameter must be still an object
