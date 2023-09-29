function verificarItemNaLista(item, listaDeCompras) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(listaDeCompras)) {
        reject(new Error('A lista de compras não é um array válido.'));
        return;
      }
  
      if (listaDeCompras.includes(item)) {
        resolve(`O item "${item}" foi encontrado na lista de compras.`);
      } else {
        resolve(`O item "${item}" não foi encontrado na lista de compras.`);
      }
    });
  }
  
  
  const listaDeCompras = ['Maçã', 'Banana', 'Laranja', 'Pão', 'Leite'];
  
  const item1 = 'Banana';
  const item2 = 'Café';
  
  verificarItemNaLista(item1, listaDeCompras)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  verificarItemNaLista(item2, listaDeCompras)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((error) => {
      console.error(error.message);
    });
  