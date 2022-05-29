// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

function magNumber(info){
    //take an array that includes type of weapon and number of streets
    //different weapons has different bullet capacity
    //officers need 3 bullets each street
    //return the number of magazines needed per given parameters
    //reassign weapons to bullet capacity in num format
    if(info[0] === 'PT92'){
      info[0] = Number(17)
    }else if(info[0] === 'M4A1'){
      info[0] = Number(30)
    }else if(info[0] === 'M16A2'){
      info[0] = Number(30)
    }else if(info[0] === 'PSG1'){
      info[0] = Number(5)
    }
    //find number of magazines needed and round up to the next integer
    let magsNeeded = info[1]*3/info[0] 
    return Math.ceil(magsNeeded)
  }

  console.log(magNumber(['PSG1',6]))