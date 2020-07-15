/*
  Utilizando for, descubra qual o maior valor contido no array e imprima-o; 
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valorMaior = 0;

for (let pos = 0; pos < numbers.length; pos += 1) {
  if (numbers[pos] > valorMaior) {
    valorMaior = numbers[pos];
  }
}

console.log('Valor maior é: ' + valorMaior);


