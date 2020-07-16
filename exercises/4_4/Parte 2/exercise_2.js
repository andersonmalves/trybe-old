/*

  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

*/

meuArray = [2, 3, 6, 7, 10, 1];

let maior = {
  pos: 0,
  valor: 0,
};

function MaiorValor(arrayAtual){
  for (var index = 0; index < arrayAtual.length; index += 1) {
    if ( arrayAtual[index] > maior.valor ) {
      maior.valor = arrayAtual[index];
      maior.pos = index;
    }
  }
return maior.pos;
}


console.log(MaiorValor(meuArray));