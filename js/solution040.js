function expressionMatter(a, b, c) {
    //Max number of the possible operations
  return Math.max(
  a*(b+c),
  a*b*c,
  a+b+c,
  (a+b)*c
  )
}
console.log(expressionMatter(8,5,2))
  
  