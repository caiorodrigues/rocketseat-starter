//Minha solução
/*function experiencia(anos) {
  var xp = "";
  switch (anos) {
    case 1:
      xp = "Iniciante";
      break;
    case 2:
    case 3:
      xp = "Intermediário";
      break;
    case 4:
    case 5:
    case 6:
      xp = "Avançado";
      break;
    default:
      xp = "Jedi Master";
      break;
  }

  console.log(xp);
}
*/

//Correção c/ a Rocketseat
function experiencia(anos) {
  if (anos <= 1) {
    return "Iniciante";
  } else if (anos <= 3) {
    return "Intermediário";
  } else if (anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
}

var anosEstudo = 7;

experiencia(anosEstudo);
