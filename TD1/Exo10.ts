import * as readlineSync from "readline-sync";

let argcli = Number(readlineSync.question("Entrez la somme donnée par le client "));
let montant = Number(readlineSync.question("entrez le montant de l'achat "));
let monnaie: number = argcli - montant;

let quo10 = Math.floor(monnaie / 10);
let rest10 = monnaie % 10;
let quo5 = Math.floor(rest10 / 5);
let rest5 = rest10 % 5;
let quo2 = Math.floor(rest5 / 2);
let rest2 = rest5 % 2;

console.log(
  "Votre monnaie est",
  monnaie,
  "en",
  quo10,
  "pièces de 10;",
  quo5,
  "pièces de 5",
  quo2,
  "pièces de 2 et",
  rest2,
  "pièces de 1"
);
