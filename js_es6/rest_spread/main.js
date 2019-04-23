//REST
//Obtem o "resto" das propriedade
//Ex. 1
const usuario = {
  nome: "Caio",
  idade: 34,
  empresa: "Xpto"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

//Ex. 2
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//Ex. 3
function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

//SPREAD
//Repassa/Propaga as informações para outra estrutua de dados
//Ex. 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//Ex. 2
const usuario1 = {
  nome: "Caio",
  idade: 34,
  empresa: "Xpto"
};

const usuario2 = { ...usuario1, nome: "Rodrigues" };

console.log(usuario2);
