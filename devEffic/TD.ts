class MaillonDC {
  private donnée_: number;
  private suivant_: MaillonDC | null;
  private precedent_: MaillonDC | null;

  //azerty
  constructor(donnée: number) {
    this.donnée_ = donnée;
    this.suivant_ = null;
    this.precedent_ = null;
  }

  get donnée(): number {
    return this.donnée_;
  }
  set donnée(valeur: number) {
    this.donnée_ = valeur;
  }
  get suivant(): MaillonDC | null {
    return this.suivant_;
  }
  set suivant(valeur: MaillonDC | null) {
    this.suivant_ = valeur;
  }
  get precedent(): MaillonDC | null {
    return this.precedent_;
  }
  set precedent(valeur: MaillonDC | null) {
    this.precedent_ = valeur;
  }
}

class ListeDoublementChaînée {}
