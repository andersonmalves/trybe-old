/*

  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

*/

let valor_n = 5;
let linha = '';

if (valor_n > 1) {

  for (let pos = 1; pos <= valor_n; pos += 1) {
    linha = linha + '*';
  }

  for (let pos = 1; pos <= valor_n; pos += 1) {
    console.log(linha)
  }

} else {

  console.log('Valor igual ou menor que 1')

}

