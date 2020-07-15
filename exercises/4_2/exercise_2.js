/*
  Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let pos, total = 0;

// let total = numbers.reduce((total, currentElement) => total + currentElement)

for (pos = 0; pos < numbers.length; pos += 1) {
  total += parseInt(numbers[pos])
}

console.log(total);
