const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let mas1 = [...s1]
    let mas2 = [...s2]
    let cnt = 0
    for(let i = 0; i < mas1.length; i++){
        if(mas2.includes(mas1[i])){
            cnt += 1
            mas2.splice(mas2.indexOf(mas1[i]), 1)
            mas1.splice(i, 1)
            
            i -= 1
        }
    }
    return cnt
}

module.exports = {
  getCommonCharacterCount
};
