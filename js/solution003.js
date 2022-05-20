// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    // good luck
    //card as string 
    //return name of shape
    //('3♣') -> return 'clubs'
    //split card into arr
    let arr = card.split('')
    //check last index of arr for shape and retunr correspoding name of shape 
    if(arr[arr.length-1] === '♣'){
      return 'clubs'
    }else if(arr[arr.length-1] === '♦'){
      return 'diamonds'
    }else if(arr[arr.length-1] === '♥'){
      return 'hearts'
    }else if(arr[arr.length-1] === '♠'){
      return 'spades'
    }
}

alert(defineSuit('10♠'))