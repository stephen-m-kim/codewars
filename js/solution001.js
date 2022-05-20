//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//For example: 
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    // your code here
    //P integers a & b, a < b
    //R return an array of integers a to b
    //E if a = 1, b = 5, should return [1,2,3,4,5]
    //P
    //create an empty array
    let arr = []
    //create a loop that runs from a to b
    for(let i = a; i <= b; i++){
      //push a to b to
      arr.push(i)
    }
    return arr 
  }

 console.log(between(1,5))