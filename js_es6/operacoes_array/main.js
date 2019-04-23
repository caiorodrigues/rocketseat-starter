const arr = [1, 3, 4, 5, 8, 9];

//MAP:
//Percorre todo o array e executa o que for definido
//Ex. 1
/*
const newArr = arr.map(function(item) {
  return item * 2;
});
*/

//Ex. 2
const newArr = arr.map(function(item, index) {
  return item * index;
});

console.log(newArr);

//REDUCE:
//Consome todo o array retornando um único valor/variável
//Ex. 1
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

//FILTER:
//Gera um novo array apenas com valores que atendam a validação TRUE ou FALSE
//de acordo com a checagem.
//Ex. 1
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

//FIND
//Usado para verificar a existência do valor de acordo com a checagem
//Ex. 1
const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);
