let date = new Date();
const nbreSecJour = 86400;
const nbreSecAnnée = nbreSecJour * 365.2425;
const nbreSecmois = nbreSecAnnée / 12;

//EXO 6

function age1(
  jour: number,
  mois: number,
  année: number,
  jourauj: number,
  moisauj: number,
  annéeauj: number
): number {
  return (
    (jourauj - jour) * nbreSecJour +
    (moisauj - mois) * nbreSecmois +
    (annéeauj - année) * nbreSecAnnée
  );
}

function age1a(): void {
  console.log(age1(27, 6, 2000, 27, 9, 2022));
  console.log(age1(27, 6, 2000, 27, 9, 2022) / nbreSecAnnée);
}

age1a();

//EXO 7

let jouract = date.getDate();
let moisact = date.getMonth() + 1;
let annéeact = date.getFullYear();

function age(jour: number, mois: number, année: number): number {
  return (
    (jouract - jour) * nbreSecJour +
    (moisact - mois) * nbreSecmois +
    (annéeact - année) * nbreSecAnnée
  );
}

function afficher(): void {
  console.log(age(27, 6, 1999));
  console.log(age(27, 6, 1999) / nbreSecAnnée);
}
