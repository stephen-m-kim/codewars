// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    //take a str and reverse each word
    //return each word reversed
    //"This is an example!" ==> "sihT si na !elpmaxe"
    //split str into letters, reverse the arr then join. 
    //split joined arr into words, reverse the arr of words, and join back together
   return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
console.log(reverseWords('Hi my name is Stephen Kim.'))