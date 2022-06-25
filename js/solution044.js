// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

// function consecutive(arr, a, b) {
//   // Your code here...
//   for(let i = 0; i < arr.length; i++){
//     if((a === arr[i] && b === arr[i + 1]) ||
//      (a === arr[i] && b === arr[i - 1])){
//      return true
//      }else{
//       false
//      }
//      } 
// } // error for undefined value.. not sure why.. 

function consecutive(arr, a, b) {
    // take an arr of integers, integer a and b
    // return true if a and b are consecutive elements in arr, false otherwise
    // true if ([1, 3, 5, 7], 3, 1), true
    // false if [1, 3, 5, 7], 3, 7), false
    // create a variable of the indexes of a and b in arr
    let indexOfA = arr.indexOf(a)
    let indexOfB = arr.indexOf(b)
    // run conditional to see if the difference between the indexes are 1 
    if(indexOfA === indexOfB +1 || indexOfB === indexOfA +1){
      return true
    }else{
      return false
    }
}
console.log(consecutive([1, 3, 5, 7], 3, 1))