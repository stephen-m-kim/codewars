// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    //take str of first and last name
    //return reversed
    //stephen kim => kim stephen
    //split str to arr
    let arr = str.split(' ')
    //swap the values by reassigning
    let name = arr[0]
    arr[0] = arr[1]
    arr[1] = name
    
    return arr.join(' ')
  }

  console.log(nameShuffler('Stephen Kim'))
