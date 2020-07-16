/*

  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  string.length

*/

meuArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let objNome = {
  nome: "",
  tamanho: 0,
};

function MaiorValor(arrayAtual){
  for (var index = 0; index < arrayAtual.length; index += 1) {
    if ( arrayAtual[index] > objNome.valor ) {

      
      objNome.valor = arrayAtual[index];
      objNome.tamanho = index;

    }
  }
return objNome.pos;
}


console.log(MaiorValor(meuArray));