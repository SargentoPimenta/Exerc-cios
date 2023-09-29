function verificarFrutasQueComecamComM(frutas) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(frutas)) {
        reject(new Error('A entrada não é uma lista válida.'));
        return;
      }
  
      const frutaComM = frutas.find((fruta) => fruta.toLowerCase().startsWith('m'));
  
      if (frutaComM) {
        resolve('A lista contém pelo menos uma fruta que começa com "m".');
      } else {
        resolve('A lista não contém frutas que começam com a letra "m".');
      }
    });
  }
  
 
  const listaDeFrutas1 = ['Maçã', 'Banana', 'Laranja', 'Pêra'];
  const listaDeFrutas2 = ['Banana', 'Laranja', 'Uva', 'Abacaxi'];
  
  verificarFrutasQueComecamComM(listaDeFrutas1)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  verificarFrutasQueComecamComM(listaDeFrutas2)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((error) => {
      console.error(error.message);
    });
  