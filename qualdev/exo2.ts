export class Client {
  private nom_: string;
  private prenom_: string;
  private chiffre_: number;
  private type_: string;

  constructor(nom: string, prenom: string, chifrre: number, type = "") {
    this.nom_ = nom;
    this.prenom_ = prenom;
    this.chiffre_ = chifrre;
    this.type_ = type;
  }

  get nom(): string {
    return this.nom_;
  }

  set nom(valeur: string) {
    this.nom_ = valeur;
  }
  get prenom(): string {
    return this.nom_;
  }

  set prenom(valeur: string) {
    this.prenom_ = valeur;
  }

  get chiffre(): number {
    return this.chiffre_;
  }

  set chiffre(valeur: number) {
    this.chiffre_ = valeur;
  }

  get type(): string {
    return this.type_;
  }

  set type(valeur: string) {
    this.type_ = valeur;
  }

  toString(): string {
    let chaine = "";

    return chaine;
  }
}

export class Clientèle extends Client {
  liste_: Array<Client>;

  constructor(nom: string, prenom: string, chiffre) {
    super();
    this.liste_ = liste;
  }
}
