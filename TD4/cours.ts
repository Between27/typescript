// bloc

import { cp } from "fs";

{
  let i = 0;
  //console.log(i);
}
// les variables déclarées dans le bloc sont locales au bloc

// Structure de controle
function estBissextile(année: number): boolean {
  return (année % 4 === 0 && année % 100 !== 0) || année % 400 === 0;
}

function prochaineAnnéeBissextile(année: number): number {
  // 1. Ajouter 1 à une année
  // 2. Si année est bissextile on s'arrete
  // 3. sinon on ajoute 1 à année
  // 4. on retourne à l'étape
  année++;
  while (!estBissextile(année)) {
    console.log(année, "n'est pas bissextile");
    année++;
  }

  return année;
}
function prochaine(année: number): void {
  do {
    console.log(année++);
  } while (!estBissextile(année));
}

function doo(d: number): void {
  let a: number;
  for (a = 0; a < d; a++) console.log("ol", a); // for([déclaration ou assignation d'un nombre à une variable];[tant que];[ce que ça doit faire]) console.log
}

console.log(prochaineAnnéeBissextile(4));
