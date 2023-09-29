// achar_max.js
function findMax(numbers) {
    if (numbers.length < 2) {
      throw new Error('A lista deve conter pelo menos dois números.');
    }
  
    let firstMax = -Infinity;
    let secondMax = -Infinity;
  
    for (const number of numbers) {
      if (number > firstMax) {
        secondMax = firstMax;
        firstMax = number;
      } else if (number > secondMax && number !== firstMax) {
        secondMax = number;
      }
    }
  
    return { firstMax, secondMax };
  }
  
  module.exports = findMax;

  
  // app.js
const findMax = require('./findMax');

const numbers = [10, 5, 20, 15, 30, 25];

try {
  const { firstMax, secondMax } = findMax(numbers);
  console.log(`Primeiro Maior Valor: ${firstMax}`);
  console.log(`Segundo Maior Valor: ${secondMax}`);
} catch (error) {
  console.error(error.message);
}
