// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number=function(array){
    //take an arr of strings
    //return each element prepended by numbers starting with 1 to arr.length 
    //["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
    //loop thru arr and create another arr in the format of in the format of n: string using template literal
    return array.map((e,i) => `${i+1}: ${e}`)
}
console.log(number(['a','b','c','d']))