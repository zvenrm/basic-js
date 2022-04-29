const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if(n < 10){
    return n
  }
  let arr = Array.from(String(n))
  console.log(arr)
  while(arr.length > 1){
    let sum = 0
    arr.forEach(e => {
      sum += +e
    })
    console.log(sum)
    if(sum >= 10){
      arr = [...String(sum)]
      console.log(arr)
    }else{
      return sum
    }
    
  
  }
  
}

module.exports = {
  getSumOfDigits
};
