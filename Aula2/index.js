const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(`Mais barato => ${livros[maisBarato].titulo} - R$ ${livros[maisBarato].preco}`);

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco > livros[maisCaro].preco) {
    maisCaro = atual;
  }
}

console.log(`Mais caro => ${livros[maisCaro].titulo} - R$ ${livros[maisCaro].preco}`);

// const precosLivros = [25, 15, 30, 50, 45, 20];
// console.log(precosLivros.sort((a, b) => a > b));
