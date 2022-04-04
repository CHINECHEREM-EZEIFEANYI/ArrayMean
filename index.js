function statsFinder(array) {
  // Write your code here
  let sumOfArray = 0;
  var lengthofArray= 0;
  while(array[lengthofArray]!==undefined){
    lengthofArray++
  }
  //return lengthofArray
  for(let x =0; x< lengthofArray; x++){
    sumOfArray += array[x]
  }
  console.log(sumOfArray/lengthofArray)
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))

// Leave this so we can test your code:
module.exports = statsFinder;