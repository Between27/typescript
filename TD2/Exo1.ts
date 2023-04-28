const nbreSecJour = 86400;
const nbreSecAnnée = nbreSecJour * 365.2425;
const nbreSecmois = nbreSecAnnée / 12;

function nbreSecDepuis(jour: number, mois: number, année: number, annéeRéférence: number): number {
  return jour * nbreSecJour + mois * nbreSecmois + (année - annéeRéférence);
}

function nbreSecDepuis1900(jour: number, mois: number, année: number): number {
  return (jour - 1) * nbreSecJour + (mois - 1) * nbreSecmois + (année - 1900);
}

function afficher(): void {
  console.log(nbreSecDepuis1900(2, 1, 1900));
}

afficher();
