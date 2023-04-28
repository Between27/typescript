function creeInitiales(nom: string, prenom: string): string {
  if (nom.length == 0 && prenom.length > 0) {
    throw new NomvideError("La chaine nom ne doit pas etre vide");
  } else if (prenom.length == 0 && nom.length > 0) {
    throw new PrenomVideError("La chaine prénom ne doit pas etre vide");
  } else if (nom.length == 0 && prenom.length == 0) {
    throw new NomEtPrenomVideError("Les chaînes ne doivent pas être vides");
  }
  return nom[0].toUpperCase() + prenom[0].toUpperCase();
}

class NomvideError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Error";
  }
}

class PrenomVideError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Error";
  }
}

class NomEtPrenomVideError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Error";
  }
}

try {
  creeInitiales("", "");
} catch (e) {
  if (e instanceof NomEtPrenomVideError) {
    console.log(e.message);
  }
}
