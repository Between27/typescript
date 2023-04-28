function supprpos(chaine: string, indice: number): string {
  let res = "";

  for (let i = 0; i < chaine.length; i++) {
    if (i === indice) {
      res += "";
    } else {
      res += chaine[i];
    }
  }

  return res;
}

function insérerCaractère(chaine: string, indice: number, caractère: string): string {
  let res = "";

  for (let i = 0; i < chaine.length; i++) {
    if (i === indice) {
      res += caractère + chaine[i];
    } else res += chaine[i];
  }
  return res;
}

console.log(insérerCaractère("Timléon", 3, "o"));
