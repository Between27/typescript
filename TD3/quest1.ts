function bisext(année: number): boolean {
  return (année % 4 === 0 && année % 100 !== 0) || année % 400 === 0;
}

function nummois(mois: number, année: number): number {
  if (mois === 1 && !bisext(année)) return 4;
  else if (mois === 1 && bisext(année)) return 3;
  else if (mois === 2 && !bisext(année)) return 0;
  else if (mois === 2 && bisext(année)) return 6;
  else if (mois === 3) return 0;
  else if (mois === 4) return 3;
  else if (mois === 5) return 5;
  else if (mois === 6) return 1;
  else if (mois === 7) return 3;
  else if (mois === 8) return 6;
  else if (mois === 9) return 2;
  else if (mois === 10) return 4;
  else if (mois === 11) return 0;
  else if (mois === 12) return 2;
  else return -1;
}

function calcjour(jour: number, mois: number, année: number): number {
  let cd = Math.floor(année / 100);
  let ab = année % 100;
  let k = Math.floor(cd / 4);
  let q = Math.floor(ab / 4);
  let M = nummois(mois, année);
  let j = jour;

  return (k + q + cd + M + j + 2 + 5 * ab) % 7;
}

function numverjour(numjour: number): string {
  if (numjour === 0) return "Dimanche";
  else if (numjour === 2) return "Mardi";
  else if (numjour === 3) return "Mercredi";
  else if (numjour === 4) return "Jeudi";
  else if (numjour === 5) return "Vendredi";
  else if (numjour === 6) return "Samedi";
  else return "error";
}
