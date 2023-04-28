export class Devise {
  private montant_: number;
  private nom_: string;

  constructor(montant = 0, nom = "Euro") {
    this.montant_ = montant;
    this.nom_ = nom;
  }
  get montant(): number {
    return this.montant_;
  }
  set montant(valeur) {
    this.montant_ = valeur;
  }

  get nom(): string {
    return this.nom_;
  }
  set nom(valeur) {
    if (this.nom.length > 0) this.nom_ = valeur;
    else throw new Error("Le nom doit avoir au moins un caractère ! ");
  }
}

export class Portefeuille {
  private portefeuille_: Array<Devise>;

  constructor() {
    this.portefeuille_ = [];
  }

  get portefeuille(): Array<Devise> {
    return this.portefeuille_;
  }

  set portefeuille(valeur) {
    this.portefeuille_ = valeur;
  }

  ajouter(devise: Devise): void {
    for (let i = 0; i < this.portefeuille.length; i++) {
      if (this.portefeuille[i] != devise) this.portefeuille.push(devise);
      else throw new Error("La devise y est deja");
    }
  }

  retirer(devise: Devise): void {
    for (let i = 0; i < this.portefeuille.length; i++) {
      if (this.portefeuille[i] == devise) {
        this.portefeuille.splice(i, 1);
      }
    }
  }
}
