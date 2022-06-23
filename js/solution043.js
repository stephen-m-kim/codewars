// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    // take a string
    // return a string whose letters replaced by the corresponding numbers of their positions in the alphabet
    // "a" = 1, "b" = 2, etc.
    // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
    // create a str with all letters
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // convert param to an array with lowercase letters
    const textArr = text.toLowerCase().split('')
    // filter textArr to create another arr that only includes elements that are also in alphabet as char
    const filteredArr = textArr.filter(e => alphabet.indexOf(e) > -1)
    // creat another arr that returns the corresponding indexes of alphabet letters +1 for each element
    const finalArr = filteredArr.map(e => alphabet.indexOf(e)+1)
    // join finalArr with spaces between each element and return it 
    return finalArr.join(' ')
}
console.log(alphabetPosition('Stephen Kim'))
