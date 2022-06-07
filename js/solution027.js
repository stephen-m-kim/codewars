// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    //taka a str of digits
    //return str that has the ditgits converted 0 (if < 5) or 1 (if => 5)
    // '12345678' => '00001111'
    // split str into arr
    const arr = x.split('')
    // create an empty arr
    let newArr = []
    // loop through the arr, run conditional, and push 0/1 to the empty arr
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 5){
        newArr.push(0)
      }else{
        newArr.push(1)
      }
    }
    // return the empty arr
    return newArr.join('')
}
console.log(fakeBin('0873452345098'))