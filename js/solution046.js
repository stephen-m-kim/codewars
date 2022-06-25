// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Example:

// a=[1,2,0,3]
// a.length-1=3 
// a includes [0,3] ,hence the function should return true

function isAllPossibilities(x){
    // take an arr of integers
    // return true if the arr has all numbers from 0 to arr.length-1, otherwise false.
    // if arr is not empty
    if(x.length > 0){
    // check if arr contains all index values as elements 
       return x.every((e,i)=> x.includes(i)) // returns boolean
    }else{
      false
    }
}
console.log(isAllPossibilities([0,1,2,3]))