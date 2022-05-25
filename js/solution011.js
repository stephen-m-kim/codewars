// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    // take number of petals
    // return corresponding string to number
    // n = 7 => i love you
    // create arr of strings
  let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    // loop through arr for n-1 times
  for(let i = 0; i <= nbPetals-1; i++){
    // push value to arr
    arr.push(arr[i])
  }
  return arr[nbPetals-1]
}

console.log(howMuchILoveYou(8))