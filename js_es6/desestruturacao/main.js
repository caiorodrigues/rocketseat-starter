const usuario = {
  nome: "Caio",
  idade: 34,
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

console.log(usuario);

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostrarNome(usuario);
