export class Maillon {
  private donnée_: number;
  private précédant_: Maillon | null;
  private suivant_: Maillon | null;

  constructor(donnée: number, précédant: Maillon | null = null, suivant: Maillon | null = null) {
    this.donnée_ = donnée;
    this.suivant_ = suivant;
    this.précédant_ = précédant;
  }

  get donnée(): number {
    return this.donnée_;
  }

  set donnée(valeur: number) {
    this.donnée_ = valeur;
  }

  get suivant(): Maillon | null {
    return this.suivant_;
  }

  set suivant(valeur: Maillon | null) {
    this.suivant_ = valeur;
  }

  get précédant(): Maillon | null {
    return this.précédant_;
  }

  set précédant(valeur: Maillon | null) {
    this.précédant_ = valeur;
  }
}

export class ListeDoublementChaînée {
  private tête_: Maillon | null = null;
  private fin_: Maillon | null = null;

  get tête(): Maillon | null {
    return this.tête_;
  }
  get fin(): Maillon | null {
    return this.fin_;
  }

  afficher(): void {
    let aux = this.tête_;

    while (aux) {
      console.log(aux.donnée);
      aux = aux.suivant;
    }
  }

  estVide(): boolean {
    return !this.tête_ && !this.fin_;
  }

  ajoutDebut(e: number): void {
    let aux = new Maillon(e, null, this.tête_);

    if (!this.tête_) this.fin_ = aux;
    else this.tête_.précédant = aux;

    this.tête_ = aux;
  }

  ajoutFin(e: number): void {
    let aux = new Maillon(e, this.fin_, null);

    if (!this.tête_) this.tête_ = aux;
    else this.fin_!.suivant = aux;

    this.fin_ = aux;
  }

  rechercheMin(): Maillon | null {
    let aux = this.tête;
    let min = aux;
    while (aux) {
      if (aux.donnée < min!.donnée) {
        min = aux;
      }
      aux = aux.suivant;
    }
    return min;
  }
  rechercheMax(): Maillon | null {
    let aux = this.tête;
    let max = aux;
    while (aux) {
      if (aux.donnée > max!.donnée) {
        max = aux;
      }
      aux = aux.suivant;
    }
    return max;
  }

  insererAvantMin(e: number): boolean {
    let min = this.rechercheMin();

    if (!min) return false;
    let aux = new Maillon(e, min.précédant, min);
    if (!min.précédant) this.tête_ = aux;
    else min.précédant.suivant = aux;
    min.précédant = aux;
    return true;
  }

  insererAprèsMax(e: number): boolean {
    let max = this.rechercheMax();
    if (!max) return false;
    let aux = new Maillon(e, max, max.suivant);
    if (!max.suivant) this.fin_ = aux;
    else max.suivant.précédant = aux;
    max.suivant = aux;
    return true;
  }
}
