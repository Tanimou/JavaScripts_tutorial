//! Write Concise Object Literal Declarations Using Object Property Shorthand
console.log();
console.log("Write Concise Object Literal Declarations Using Object Property Shorthand :");
console.log();
//this code:
 getMousePosition = (x, y) => ({
  x: x,
  y: y,
});
//can be easily written by:
 getMousePosition = (x, y) => ({ x, y });//this works if we have the same names
 console.log(getMousePosition(2,3))

 createPerson = (name, age, gender) => ({ name, age, gender });//this code is the same as: createPerson=(name, age, gender)=>({ name: name,
                                                                                                                               // age: age, 
                                                                                                                            //gender:gender
                                                                                                                          // });
                                                                                                                          //it will create an object with properties that can be be filled out by the user
 console.log(createPerson("tatou",25,"male"))