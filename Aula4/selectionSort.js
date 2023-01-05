const livros = require('./listaLivros');
const menorValor = require('./menorValor');
// const livros2 = require('./listaLivros');

// Algoritmo Selection Sort
for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);

// livros2.forEach((livro2, indice) => {
//   let menor = menorValor(livros2, indice);

//   let livroAtual = livros2[indice];
//   let livroMenorPreco = livros2[menor];

//   livros2[indice] = livroMenorPreco;
//   livros2[menor] = livroAtual;
// });

// console.log(livros2);