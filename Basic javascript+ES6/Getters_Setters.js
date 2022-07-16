//! Use getters and setters to control Acess to an object
console.log();
console.log(" Use getters and setters to control Acess to an object:");
console.log();

class Book {
  constructor(author) {
    this.author = author;
  }
  //getter
  get writer() {
    return this.author;
  }
  //*we can simply set this by a method:
 /* getWriter(){return this.author} */

//*same thing for the setter:
/* setWriter(updateAuthor){this.author= updateAuthor}*/


  //setter
  set Writer(updateAuthor) {
    this.author = updateAuthor;
  }
}

function makeClass2() {
  class Thermostat {
    constructor(temp) {
      
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {    //getTemperature(){return this._temp}
      return this._temp;
    }
    set temperature(updateTemp) {  //setTemperature(updateTemp){this._temp= updateTemp;}
      this._temp = updateTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature; //this is going to use the getter because we want to get the value temperature and store it in temp
//we can also say let temp= thermos.getTemperature();
console.log(temp);
thermos.temperature = 26; //this's gonna use the setter because we set a value of 26 to temperature
//we can also say thermos.setTemperature(26)
temp = thermos.temperature;
console.log(temp);
