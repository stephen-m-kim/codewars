// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    // take arr
    // return elements with even index & index 0
    // [1,2,3,5] => [1,3]
    // filter arr
    return arr.filter((e,i) => {
    // only even index
      if(i % 2 === 0){
    // return elements with even index
        return e
      }
    })
}
console.log(removeEveryOther(['hello','stupid','how','dumb ass','are','bounce','you?']))
