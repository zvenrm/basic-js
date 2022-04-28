const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let resStr = str
    let additions = []
    let res = []
    if(options.hasOwnProperty('addition')){
        if(options.hasOwnProperty('additionRepeatTimes')){
            for(let i = 0; i < options.additionRepeatTimes; i++){
                additions.push(String(options.addition))
            }
        }else{
            additions.push(String(options.addition))
        }
    }
    if(options.hasOwnProperty('additionSeparator')){
        additions = additions.join(options.additionSeparator)
    }else{
        additions = additions.join('|')
    }
    resStr += additions
    if(!options.hasOwnProperty('repeatTimes')){
      res.push(resStr)
    }else{
      for(let i = 0; i < options.repeatTimes; i++){
        res.push(resStr)
      }
    }
    
    if(options.hasOwnProperty('separator')){
        return res.join(options.separator)
    }
    return res.join('+')
}

module.exports = {
  repeater
};
