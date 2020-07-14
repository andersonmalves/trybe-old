/*
  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let totalImpar = 0;

for (let pos = 0; pos < numbers.length; pos += 1) {
  if (numbers[pos] % 2 !== 0) {
    totalImpar += 1;
  }
}

if (totalImpar != 0) {
  console.log('Números ímpares: ' + totalImpar);
} else {
  console.log('nenhum valor ímpar encontrado');
}

