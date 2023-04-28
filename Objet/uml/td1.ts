class Timer {
  periode_: number;
  etat_: boolean;

  constructor(periode: number) {
    periode = this.periode_;
    this.etat_ = false;
  }

  get periode(): number {
    return this.periode_;
  }

  set periode(periode: number) {
    this.periode_ = periode;
  }

  activer() {
    this.etat_ = true;
  }

  desactiver() {
    this.etat_ = false;
  }

  utiliser() {}

  toString(): string {}
}
