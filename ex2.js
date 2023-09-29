
function filterStates(states) {
    return states.filter((estado) => estado.startsWith('S') || estado.startsWith('s'));
  }
  
  module.exports = filterStates;


const filterStates = require('./filterStates');

const estados = [
  'São Paulo',
  'Rio de Janeiro',
  'Santa Catarina',
  'Paraná',
  'Bahia',
  'Sergipe',
  'Sul',
];
s
const etadosFiltrados = filterStates(estados);

console.log(estadosFiltrados);


