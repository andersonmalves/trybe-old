/*

  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

*/

meuArray = [2, 4, 6, 7, 10, 0, -3];

let menor = {
  pos: 0,
  valor: 0,
};

function MenorValor(arrayAtual){
  for (var index = 0; index < arrayAtual.length; index += 1) {
    if ( arrayAtual[index] < menor.valor ) {
      menor.valor = arrayAtual[index];
      menor.pos = index;
    }
  }
return menor.pos;
}


console.log(MenorValor(meuArray));