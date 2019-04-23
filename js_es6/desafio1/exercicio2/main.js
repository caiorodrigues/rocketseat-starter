const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

//2.1
const map = usuarios.map(usuario => usuario.idade);
console.log(map);

//2.2
const filter = usuarios.filter(
  usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
);
console.log(filter);

//2.3
const find = usuarios.find(usuario => usuario.empresa === "Google");
console.log(find);

//2.4
const op = usuarios
  //.map(usuario => usuario.idade * 2)
  .filter(usuario => usuario.idade <= 50);
console.log(op);

//Correcao 2.4
const op = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);
console.log(op);
