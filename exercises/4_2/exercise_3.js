/*

  Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;


for (let pos = 0; pos < numbers.length; pos += 1) {
  total += parseInt(numbers[pos])
}

let media = total / numbers.length;

console.log(media);
