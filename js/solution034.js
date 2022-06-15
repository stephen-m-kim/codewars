// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    // take arr of same numbers except one number
    // return the unique number
    //findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    // sort arr
    arr = arr.sort((a,b)=>a-b)
    // see if the first two nums are the same num
    if(arr[0] === arr[1]){
    // if so return the last num
      return arr[arr.length-1]
    }else{
    // if not return the first num
      return arr[0]
    }
}
console.log(findUniq([3,3,3,3,3,9,3,3,3]))