import * as readlineSync from "readline-sync";

function while1(): void {
  let nombre = Number(readlineSync.question("Entrez un nombre compris entre 0 et 20 "));

  while (nombre < 0 || nombre > 20) {
    nombre = Number(readlineSync.question("Entrez vraiment un nombre compris entre 0 et 20 "));
  }
  /*
Utiliser le "while" lorsqu'on ne connait pas le nombre d'itérations

*/
}

function dowhile(): void {
  let nombre: number;

  do {
    nombre = Number(readlineSync.question("Entrez vraiment un nombre compris entre 0 et 20 "));
  } while (nombre < 0 || nombre > 20);
}

dowhile();
