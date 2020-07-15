/*

  Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

*/

let valor_n = 5;
let linha = '';

if (valor_n > 1) {

  for (let pos = 1; pos <= valor_n; pos += 1) {
    linha = linha + '*';
    console.log(linha);
  }

} else {

  console.log('Valor igual ou menor que 1')

}