// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    // take arr of numbers
    // square each number => return a new arr
    // sum all elements in new arr
    let sum = numbers.map(x => Math.pow(x,2)).reduce((a,c) => a+c,0)
    return sum
}
console.log(squareSum([3,5,3,2,6]))