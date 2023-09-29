const removeDuplicates = require('./remove_duplicates');

module.exports = {
  removeDuplicates,
};


function removeDuplicates(inputList) {
    return [...new Set(inputList)];
  }
  
  module.exports = removeDuplicates;
  

 
const { removeDuplicates } = require('./remove_duplicates');

const inputList = [1, 2, 2, 3, 4, 4, 5];
const uniqueList = removeDuplicates(inputList);

console.log(uniqueList);
