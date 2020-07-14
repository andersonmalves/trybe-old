/*
  Utilizando for, descubra qual o menor valor contido no array e imprima-o; 
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = 0;

for (let pos = 0; pos < numbers.length; pos += 1) {
  
  valorAtual = numbers[pos];

  if (numbers[pos] < valorAtual) {
    menorValor = numbers[pos];
  }
}

console.log('Valor menor é: ' + menorValor);

