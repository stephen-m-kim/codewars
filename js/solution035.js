// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



function repeatStr (n, s) {
// take a num and a str
// return str num of times
// create an empty str
    let answer = ""
// loop from 0 to num
    for(let i = 0; i < n; i++){
// to add str to empty str num times
    answer += s
    }
    return answer
}
console.log(repeatStr(2,'stephen'))
