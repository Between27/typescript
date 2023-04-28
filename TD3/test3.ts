import * as readlineSync from "readline-sync";
//conditions

//if est une condition

let a = Number(readlineSync.question("Entrez un 1er nombre "));
let b = Number(readlineSync.question("Entrez un 2e nombre "));
if (b !== 0) {
  //alors
  console.log(a / b);
}
//sinon
else {
  console.log("calcul impossible");
}

//booléen

let unbooléen = true;

console.log(unbooléen);
