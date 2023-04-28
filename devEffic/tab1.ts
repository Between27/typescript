function comptage(chaîne: string): Map<string, number> {
  let m = new Map<string, number>();
  for (let c of chaîne)
    if (m.has(c)) m.set(c, m.get(c)! + 1);
    else m.set(c, 1);
  return m;
}
// let m = comptage("brontosaurus");
// console.log(m);

// exo1
function comptageMot(chaine: string): Map<string, number> {
  let m = new Map<string, number>();
  let t = chaine.split(" "); // retourne lese mots en tableaux
  for (let mot of t) {
    if (m.has(mot)) m.set(mot, m.get(mot)! + 1);
    else m.set(mot, 1);
  }
  return m;
}

//exo2

function comptageNombre(t: Array<number>): boolean {
  let m = new Map<number, number>();
  for (let nombre of t) {
    if (m.has(nombre)) return true;
    else m.set(nombre, 1);
  }

  return false;
}

//exo3

let memoire = new Map<number, number>();
memoire.set(0, 0);
memoire.set(1, 1);
// function fibonacci(n: number, memoire: Map<number, number>): number {
//   // Tester ici si on connaît déjà le résultat pour n, si oui le retourner
//   if (memoire.has(n)) return memoire.get(n)!;
//   else {
//     // Sinon, faire l'appel récursif
//     let resultat = fibonacci(n - 1, memoire) + fibonacci(n - 2, memoire);
//     // Stocker le résultat dans mémoire
//     memoire.set(n, resultat);
//     // Retourner le résultat
//     return resultat;
//   }
// }

function fibTab(n: number): void {
  let t = [0, 1];
  for (let i = 2; i < n; i++) {
    t.push(t[i - 1] + t[i - 2]);
  }

  console.log(t);
}

fibTab(6);
