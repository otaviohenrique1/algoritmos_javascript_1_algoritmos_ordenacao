const precosLivros = [25, 15, 30, 50, 45, 20];

// let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
  if (precosLivros[atual] < precosLivros[maisBarato]) {
    maisBarato = atual;
  }
}

console.log(`Mais barato => R$ ${precosLivros[maisBarato]}`);

// console.log(precosLivros.sort((a, b) => a > b));
