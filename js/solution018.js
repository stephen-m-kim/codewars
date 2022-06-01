// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    //reverse a string 
    //split it into arr, reverse it, and join back as string
    return str.split('').reverse().join('')
}
console.log(solution('stephen'))