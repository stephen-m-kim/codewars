// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    //take a interger
    //return arr of all the powers of 2 with the exponent ranging from 0 to n
    //n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
    //create an empty arr
    let answer = []
    //loop from 0 to n
    for(let i = 0; i <= n; i++){
    //power 2 by i and push to arr 
      answer.push(Math.pow(2, i))
    }
    return answer
}
console.log(powersOfTwo(1))
  
  