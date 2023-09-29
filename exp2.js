function gerarNumeroAleatorio(min, max) {
    return new Promise((resolve, reject) => {
      if (typeof min !== 'number' || typeof max !== 'number') {
        reject(new Error('Os valores mínimos e máximos devem ser números.'));
        return;
      }
  
      const numeroAleatorio = Math.random() * (max - min) + min;
      resolve(numeroAleatorio);
    });
  }
  
 
  function gerarNumeroAleatorioPadrao() {
    return gerarNumeroAleatorio(0, 10);
  }
  
  const min = 5;
  const max = 15;
  
  gerarNumeroAleatorio(min, max)
    .then((numero) => {
      console.log(`Número aleatório entre ${min} e ${max}: ${numero}`);
    })
    .catch((error) => {
      console.error(error.message);
    });
  