// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).



function billboard(name, price = 30){
    // take a str and price of 30
    // return final price => each letter times 30
    // do not use '*'
    // 'stephen' => 7 letters for 30 each => 210
    // create an empty arr
    // loop from 1 to length of name
    // push price to arr name.length times
    // sum return all elememnts in arr
    let priceForEachLetter = []
    for(let i = 1; i <= name.length; i++){
       priceForEachLetter.push(price)
    }
    return priceForEachLetter.reduce((acc,c) => acc+c,0)
}
console.log(billboard('Stephen Kim', price = 30)) 