// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

function leastLarger(a,i) {
    //take an arr and an index
    //return the index of the smallest number in the arr that is larger than the number at the provided index
    //leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
    //leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
    
    let largerThanThis = a[i]
    // filter arr to get nums larger than a[i]
    let largerNumsThanLargerThanThis = a.filter(num => num > largerThanThis)
    // get the smallest number of the filtered arr
    let thatIsIt = Math.min(...largerNumsThanLargerThanThis)
    // find the index of the smallest number 
    return a.findIndex(num => num === thatIsIt ) 
}
console.log(leastLarger([1,2,3,4,5],3))
                