//!Errors handling
console.log();
console.log("Errors Handling:");
console.log();
let i=1;
//*te function try catch is used to to catch errors inside the try block and display them in our console
//*We can customize our own errors as well with throw new Error(messageError) with messageError as a string
while (i <= 5) {
  try {
    if (i % 2 !== 0) {
      throw new Error("Odd number!");
    }
    console.log("Even number!");
  } catch (error) {
    console.error(error.stack);
    //* console.warn(error) //*display a warn message instead of an error one
  } finally {
    //*the finally block is executed immediately after the catch block, no matter what
    console.log("...Finally");
    i++;
  }
}
