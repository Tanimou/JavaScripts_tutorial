//!Difference between break and continue
//*break: used to exit out of a loop
//*continue: skips over an iteration of a loop
console.log()
console.log("Difference between break and continue:")
console.log()
console.log("with break:")
for (let i = 0; i < 20; i++) {
    if (i==13) {
        break;
    }
    console.log(i)
}
console.log();
console.log("with continue:");

for (let i = 0; i < 20; i++) {
  if (i == 13) {
    continue;
  }
  console.log(i);
}

//create a date object
console.log(date= new Date());//date in current time
//console.log(date=new Date(2022, 3, 4, 18, 1, 2, 3))//we can customize the date,
                                                   //the order is year, month,date, hour, minute, second and millisecond
//console.log(date=new Date("April 20, 2021 16:20:01"))//another way to customize the date
let month= date.getMonth()
console.log(month)
console.log(date.getFullYear())
date.setFullYear(2025)
date.setMonth(11)//we can also set separately the date

