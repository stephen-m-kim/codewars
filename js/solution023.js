// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    //take arr of at least of 4 positive integers
    //return the sum of the lowest 2
    //[19, 5, 42, 2, 77] => 7
    //sort arr in acending order
    let sorted = numbers.sort((a,b)=>a-b)
    //return the sum of the first two elements
    return sorted[0] + sorted[1]
    //Code here
}
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))