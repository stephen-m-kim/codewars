// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    // take a str of spaced numbers
    // return the highest and t lowest number
    //highAndLow("1 2 3 4 5");  // return "5 1"
    // split str by spaces and sort in ascending order
    const sortedArr = numbers.split(' ').sort((a,b)=>(a-b))
    // return the last and first elements
    return `${sortedArr[sortedArr.length-1]} ${sortedArr[0]}`
    // ...
}

console.log(highAndLow('4 6 7 8 12 166 5432'))