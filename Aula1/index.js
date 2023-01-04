const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(`Mais barato => R$ ${livros[maisBarato]}`);

// const precosLivros = [25, 15, 30, 50, 45, 20];
// console.log(precosLivros.sort((a, b) => a > b));
