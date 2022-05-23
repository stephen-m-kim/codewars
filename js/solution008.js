// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    //array of +- integers
    //count of positives and sum of negatives
    //For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
    //check for null / [] to return empty array
    if(input === null || input.length < 1){
      return []
    }
    //create a new array of [count, sum] with the both value being 0
    let newArr = [0, 0]
    //loop through input and check for neg and pos, if neg sum if pos count
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        newArr[0] += 1
      }else if(input[i] < 0){
        newArr[1] += input[i]
      }
    }
      return newArr
  }

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))