import * as readlineSync from "readline-sync";
function randint(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf + 1) + inf);
}

function comptage(n: number): void {
  let nbrePositif = 0,
    nbreNégatif = 0;
  for (let i = 0; i < n; i++) {
    let nbre = randint(-10, 10);

    process.stdin.write(nbre + " ");

    if (nbre >= 0) nbrePositif++;
    else nbreNégatif++;
  }
  console.log();
  console.log("Nbre Positif =", nbrePositif);
  console.log("Nbre Négatif =", nbreNégatif);
}

function accuumulation(n: number): number {
  let somme = 0;
  for (let i = 0; i < n; i++) {
    let nbre = randint(-10, 10);
    somme = randint(-10, 10);
    somme += nbre;
  }

  return somme;
}

function accumulationSelective(n: number): number {
  let produit = 1;
  for (let i = 0; i < n; i++) {
    let nbre = randint(-10, 10);
    if (nbre > 0) produit *= nbre;
  }
  return produit;
}

function minMax(n: number, a: number, b: number): void {
  if (n === 0) return;
  let nbre = randint(a, b);
  let maximum = nbre;
  let minimum = nbre;
  for (let i = 0; i < n; i++) {
    let nbre = randint(a, b);

    if (maximum < nbre) maximum = nbre;
    if (minimum > nbre) minimum = nbre;
  }
  console.log("maximum est ", maximum);
  console.log("minimim est ", minimum);
}

function affichageCarré(n: number): void {
  for (let i = 0; i < n; i++) {
    //afficher une ligne

    for (let j = 0; j < n; j++) process.stdout.write("b");
    console.log();
  }
}

function afficheDiagonale(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++)
      if (i === j) process.stdout.write("x");
      else process.stdout.write("o");
    console.log();
  }
}

function afficheTriangle(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) process.stdout.write("o");
    console.log();
  }
}

function SommeCarré(n: number): void {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++)
      for (let k = 1; k <= n; k++)
        if (j <= i && i < k && i ** 2 + j ** 2 === k ** 2) console.log(i, j, k);
  }
}

function devinerNombre(nbreEssai: number, inf: number, sup: number): void {
  let nbreMystere = randint(inf, sup);
  let gagné = false;
  while (nbreEssai > 0 && !gagné) {
    console.log("Il reste", nbreEssai, "essai");
    nbreEssai--;

    let reponse = Number(
      readlineSync.question("Entrez un nombre entre" + inf + " et " + sup + " : ")
    );

    if (reponse < nbreMystere) console.log("Le nombre mystère est plus grand");
    else if (reponse > nbreMystere) console.log("le nombre mystère est plus petit");
  }
}

function main(): void {
  console.log(SommeCarré(27));
}

main();
