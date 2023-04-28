function init(nbreLignes: number, nbreColonnes: number): Array<Array<boolean>> {
  let labyrinthe = new Array<Array<boolean>>();

  for (let i = 0; i < nbreLignes; i++) {
    let ligne = new Array<boolean>();

    for (let j = 0; j < nbreColonnes; j++) ligne.push(true);

    labyrinthe.push(ligne);
  }
  for (let i = 0; i < nbreLignes; i++) {
    labyrinthe[i][0] = false;
    labyrinthe[i][labyrinthe[i].length - 1] = false;
  }

  for (let j = 0; j < nbreColonnes; j++) {
    labyrinthe[0][j] = false;
    labyrinthe[labyrinthe.length - 1][j] = false;
  }

  return labyrinthe;
}

function estVide(labyrinthe: Array<Array<boolean>>, i: number, j: number): boolean {
  return labyrinthe[i][j];
}

function estMur(labyrinthe: Array<Array<boolean>>, i: number, j: number): boolean {
  return !estVide(labyrinthe, i, j);
}

function affichage(labyrinthe: Array<Array<boolean>>): void {
  for (let i = 0; i < labyrinthe.length; i++) {
    let chaine = "";
    for (let j = 0; j < labyrinthe[i].length; j++) {
      if (estVide(labyrinthe, i, j)) chaine += " ";
      else if (estMur(labyrinthe, i, j)) chaine += "#";
    }
    console.log(chaine);
  }
}

affichage(init(4, 6));
