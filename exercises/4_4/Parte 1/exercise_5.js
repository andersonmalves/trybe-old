/*

  Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

*/

let infoMargarida = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
}

let infoPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

/*
let att_infoMargarida;

for (key in infoMargarida){
  for (key in infoPatinhas){
    att_infoMargarida = infoMargarida[key];
    console.log(att_infoMargarida + ' ' + infoPatinhas[key]);
  }
}
*/

console.log(infoMargarida.personagem + ' ' + infoPatinhas.personagem);
console.log(infoMargarida.origem + ' ' + infoPatinhas.origem);
console.log(infoMargarida.nota + ' ' + infoPatinhas.nota);

if (infoMargarida.recorrente === infoPatinhas.recorrente) {
  console.log('Ambos recorrentes');
} else {
  console.log(infoMargarida.recorrente + ' ' + infoPatinhas.recorrente);
}