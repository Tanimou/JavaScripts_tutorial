//!Callback function
//*we can pass a function as an argument of a function 
console.log()
console.log("Callback function")
console.log()
function displayConsole(output) {
    console.log(output);
}

function setMessage(text,callback) {
    message=text
    callback(message);
}

setMessage('Hi there',displayConsole);//we passed the function displayConsole as an argument to setMessage function