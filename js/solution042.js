// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    //take a string 
    //return each character doubled as a string
    //* "String"      -> "SSttrriinngg"
    //create an empty str
    let answer = ''
    //loop str str.legnth times
    for(let i = 0; i < str.length; i++){
    // concatenate each cha twice to the empty string
      answer += str[i]+str[i]
    }
    return answer
}
