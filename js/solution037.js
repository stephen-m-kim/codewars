// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

function oddCount(n){
    //take a num
    //return the number of positive odd numbers below param
    // 7 => [1,3,5] => 3
    //creat an empty arr
    let arr = []
    //loop from 1 to n
    for(let i = 1; i < n; i++){
    //find odd nums and push to arr
      if(i % 2 !== 0){
        arr.push(i)
      }
    }
    //return the number of elements in arr
    return arr.length
}
console.log(oddCount(89734565))

// this handles large inputs better

// function oddCount(n){
//     return Math.floor(n/2)
// }