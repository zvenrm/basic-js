const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}
  for(let i = 0; i < domains.length; i++){
      let arr = domains[i].split('.')
      arr.forEach((element, index) => {
          arr[index] = '.' + element
      })
      arr = arr.reverse()
      console.log(arr)
      let items = ''
      while(items.length < arr.join('').length){
          for(let i = 0; i < arr.length; i++){
              items += arr[i]
              if(res.hasOwnProperty(items)){
                  res[items] += 1
              }else{
                  res[items] = 1
              }
          }
      }
  }
  return res
}

module.exports = {
  getDNSStats
};
