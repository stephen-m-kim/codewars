// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    // take arr of class points and your points
    // return true is yours is higher than class average otherwise false
    // create a variable of avg point of class
    const classAvg = classPoints.reduce((acc,c) => acc + c,0) /classPoints.length
    //compare this to your score
    if(yourPoints > classAvg){
      return true
    }else if(yourPoints < classAvg){
      return false
    }
}

console.log(betterThanAverage([90,91,90,89,94,98,99,97],100))

