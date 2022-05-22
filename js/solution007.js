// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
    //P array of integer
    //R square root or square
    //E [4,3,9,7,2,1] -> [2,9,3,49,4,1]
    //P
    //check if a value has squear root 
    array = array.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : Math.pow(e,2))
    return array;  
}

console.log(squareOrSquareRoot([2,3,4,5,9,15,16]))
