//!reduce() Function
//*reduce() takes a array and do something and pass the result to the next iteration
//*along with the next item in the array

/*(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.*/

const summ = [1, 2, 3, 4, 5, 6, 7].reduce(function (result, item) {
  return result + item;
}, 0); //we specify the initial value of result to start the accumulation
console.log(summ);
