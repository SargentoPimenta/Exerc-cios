// calculaMedia.js
function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;
  
    return media;
  }
  
  function verificarAprovacao(media, mediaMinima = 7.0) {
    if (media >= mediaMinima) {
      return 'Aprovado';
    } else {
      return 'Reprovado';
    }
  }
  
  module.exports = { calcularMedia, verificarAprovacao };

  
  // app.js
const { calcularMedia, verificarAprovacao } = require('./calculaMedia');

const notasAluno = [5, 10, 6];
const mediaAluno = calcularMedia(notasAluno);
const resultadoAprovacao = verificarAprovacao(mediaAluno);

console.log(`Notas do aluno: ${notasAluno}`);
console.log(`Média do aluno: ${mediaAluno}`);
console.log(`Resultado: ${resultadoAprovacao}`);
