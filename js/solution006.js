// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    //P array of integers as strings and numbers
    //R return the sum of elements as numbers
    //E [1,'2'] => sum = 3
    //P loop thru the array and convert all elements to numbers. Then reassign the numbers into the arr.
    x = x.map(e => Number(e))
    //sum all the values
    return x.reduce((acc,c) => acc+c,0)
  }

  console.log(sumMix([1,'5',2,9,'10']))