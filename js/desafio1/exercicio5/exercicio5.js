function usuarioHabilidades(usuarios) {
  for (usr of usuarios) {
    console.log(
      "O " + usr.nome + " possui as habilidades: " + usr.habilidades.join(", ")
    );
  }
}

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJs", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["Vue.JS", "Ruby on Rails", "Elixir"]
  }
];

usuarioHabilidades(usuarios);
