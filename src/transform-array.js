const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr) === false){
    throw new NotImplementedError(`'arr' parameter must be an instance of the Array!`)
  }
  else if(arr.length === 0){
    return []
  }
  let res = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev'){
      res.push(arr[i])
    }
    else if(arr[i] === '--discard-next'){
      if(i === arr.length - 1){
        continue
      }
      i += 1
    }
    else if(arr[i] === '--discard-prev'){
      if(i === 0 || arr[i - 2] === '--discard-next'){
        continue
      }
      res = res.slice(0, -1)
    }
    else if(arr[i] === '--double-next'){
      if(i === arr.length - 1 || typeof(arr[i + 1]) === 'string'){
        continue
      }
      res.push(arr[i + 1])
    }
    else if(arr[i] === '--double-prev'){
      if(i === 0 || typeof(arr[i - 1]) === 'string' || arr[i - 2] === '--discard-next'){
        continue
      }
      res.push(arr[i - 1])
    }
  }
  return res
}

module.exports = {
  transform
};
