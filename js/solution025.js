// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //take a non-negative integer
    //return digits sorted in desending order
    //42145 => 54421
    //convert n to str and split into an arr and sort. join back as str and convert to num
      return Number(n.toString().split('').sort().reverse().join(''))
    
}
console.log(descendingOrder(9862340))