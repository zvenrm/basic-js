const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let cntZero = 0
    let mas = []
    arr.forEach(element => {
        if(element !== -1){
            mas.push(element)
        }
    })
    mas.sort((a, b) => {
        return a - b;
    })
    while(mas.length > 0){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== -1){
                arr[i] = mas[0]
                mas.splice(0, 1)
            }
        }
    }
    return arr
}

module.exports = {
  sortByHeight
};
