/*
  Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let pos;

for (pos = 0; pos < numbers.length; pos += 1) {
  console.log('Valor ' + pos + ': ' + numbers[pos]);
}