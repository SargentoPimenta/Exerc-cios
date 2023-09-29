// soma.js
function somar(a, b) {
    return a + b;
  }
  
  module.exports = somar;

  // app.js
const somar = require('./soma');

const valor1 = 5;
const valor2 = 10;

const resultado = somar(valor1, valor2);

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
