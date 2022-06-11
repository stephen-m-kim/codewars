// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    // take a string
    // return arr of string index of vowels
    // stephen => [3,6]
    // create a variable of vowels as a str
    const vowels = 'aeiouy'
    // create an empty arr
    let arr = []
    // split word into arr
    // loop through arr and match with vowels using str.indexoOf()
    // push index + 1 to empty arr
    word.split('').forEach((letter,i) => {
      if(vowels.indexOf(letter) !== -1){
        arr.push(i + 1)
      }
    })
    return arr
}
console.log(vowelIndices('stephen kim'))