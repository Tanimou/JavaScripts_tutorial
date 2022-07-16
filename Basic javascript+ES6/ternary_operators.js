//! Using multiple ternary operators
console.log();
console.log("Using multiple ternary operators:");
console.log();
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; // if num > 0 return positive
  // else if num < 0 return negative else return zero
}
console.log(checkSign(10));
