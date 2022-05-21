// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
    //P array of numbers
    //R the sum of differeces of consecutive pairs of numbers
    //E Descending order: [10, 2, 1]
    //P 
    //sort the array in descending order
    arr = arr.sort((a,b) => b-a)
    //loop through arr and get differences and add them together
    let sum = 0
    for(let i=0; i<arr.length-1; i++){
      sum += arr[i] - arr[i+1]
    }
    return sum
  }

  console.log(sumOfDifferences([1,2,3,4,10]))