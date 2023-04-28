import * as readlineSync from "readline-sync";
// Void = fonocction qui ne fait rien
function salutation(numéro: number): void {
  let prénom = readlineSync.question("entrez votre prénom ");
  let nom = readlineSync.question("Entrez votre nom ");

  console.log("Bonjour", nom, prénom);
  console.log("vous etes le numero", numéro);
}
let numéro = 45;
salutation(numéro);
//salutation(numéro+1)
//salutation(Number(readlineSync.question("entrez votre numéro d'utilisateur")));
//salutation(4)
