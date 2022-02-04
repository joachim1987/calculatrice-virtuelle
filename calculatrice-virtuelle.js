//fonction pour additionner
function addition(nombreA, nombreB) {
  return nombreA + nombreB
}

//fonction pour multiplier
function multiplication(nombreA, nombreB) {
  return nombreA * nombreB
}

//fonction pour diviser
function division(nombreA, nombreB) {
  if (nombreB == 0) {
    throw new Error('Impossible de diviser par 0.')
  }
  return nombreA / nombreB
}

//fonction pour soustraire
function soustraction(nombreA, nombreB) {
  return nombreA - nombreB
}

let restart = false

do {
  // demande un choix
  do {
    var choix = Number(
      prompt(
        'Quelle opération souhaitez-vous réaliser ?\n\n 1-Addition\n 2-Multiplication\n 3-Soustraction\n 4-Division\n',
      ),
    )
  } while (choix != 1 && choix != 2 && choix != 3 && choix != 4)
  // demande deux nombres
  do {
    var premierNombre = Number(prompt('Entrez un premier nombre :'))
    var deuxièmeNombre = Number(prompt('Entrez un deuxième nombre :'))
  } while (isNaN(premierNombre) || isNaN(deuxièmeNombre))

  //Appelle la fonction choisie
  try {
    switch (choix) {
      case 1:
        var resultat = addition(premierNombre, deuxièmeNombre)
        break
      case 2:
        var resultat = multiplication(premierNombre, deuxièmeNombre)
        break
      case 3:
        var resultat = soustraction(premierNombre, deuxièmeNombre)
        break
      case 4:
        var resultat = division(premierNombre, deuxièmeNombre)
        break
      default:
        throw new Error('Une erreur est survenue.')
    }
    alert('Voici le résultat : ' + resultat + '.')
  } catch (error) {
    alert(error) //affiche l'erreur si une erreur est survenue
  }

  restart = confirm('Souhaitez-vous recommencer un calcul ?')
  // grace à la boite de dialogue confirm(), on demande à l'utilisateur s'il veut recommencer un calcul
} while (restart)
