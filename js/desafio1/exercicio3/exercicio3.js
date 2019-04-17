//Minha solução
/*function temHabilidade(skills) {
  for (var i = 0; i < skills.length; i++) {
    console.log(skills[i] == "Javascript" ? true : false);
  }
}*/

//Correção na Rocketseat
function temHabilidade(skills) {
  return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade(skills);
