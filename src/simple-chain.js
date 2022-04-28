const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],
  chain: 0,
  getLength() {
    this.chain++

    return this.chain
  },
  addLink(value) {
    this.chain++
    if([...arguments].length === 0){
      this.links.push('( )')  
    }
    this.links.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    this.chain++
    if(typeof(position) === 'number' && Number.isInteger(position) === true){
      this.links.splice(position - 1, 1)
    }else{
      this.links = []
      throw new NotImplementedError("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    this.links = this.links.reverse()
    console.log(this)
    return this
  },
  finishChain() {
    let mas = this.links
    this.links = []
    return mas.join('~~')
  }
};

module.exports = {
  chainMaker
};
