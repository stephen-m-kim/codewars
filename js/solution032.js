// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

//take arr of integers
//return min and max num in two different functions
//4,6,2,1,9,63,-134,566]  -> max = 566, min = -134

var min = function(list){
    // sort arr in acsending order
    // return the first element (min) 
      list.sort((a,b)=>a-b)
      return list[0];
  }
  
  var max = function(list){
    // return the last element(max)
       list.sort((a,b)=>a-b)
      return list[list.length-1];
}
console.log(min([1,2,3,4]))
console.log(max([1,2,3,4]))