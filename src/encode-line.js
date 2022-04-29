const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if(str.length === 0) return ''
    let mas = [...str]
    let obj = {}
    let res = ''
    obj[mas[0]] = 1
    for(let i = 1; i < mas.length; i++){
        console.log(mas[i])
        if(mas[i] !== mas[i - 1]){
            if(obj[mas[i - 1]] > 1){
                res += `${obj[mas[i - 1]]}` + `${Object.keys(obj)[0]}`
            }else{
                res += Object.keys(obj)[0]
            }
            mas = mas.slice(obj[mas[i - 1]])
            obj = {}
            i = 0
            obj[mas[0]] = 1
        }else{
            if(obj.hasOwnProperty(mas[i])){
                obj[mas[i]] += 1
            }
            else{
                obj[mas[i]] = 1
            }
        }
        
    }
    let lastKey = Object.keys(obj)[0]
    if(obj[lastKey] > 1){
        res += `${obj[lastKey]}` + `${lastKey}`
    }else{
        res += lastKey
    }
    return res
}

module.exports = {
  encodeLine
};
