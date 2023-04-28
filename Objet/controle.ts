class Hanoi {
  //   private tour1: Array<number>;
  //   private tour2: Array<number>;
  //   private tour3: Array<number>;
  private m: number;
  private n: number;

  constructor(
    m: number,
    n: number
    // tour1: Array<number>,
    // tour2: Array<number>,
    // tour3: Array<number>
  ) {
    this.m = m;
    this.n = n;
    // this.tour1 = tour1;
    // this.tour2 = tour2;
    // this.tour3 = tour3;
  }

  tourVide(): Array<number> {
    let t = new Array<number>();

    return t;
  }

  testDisk(k: number, t: Array<number>): boolean {
    return k < t[t.length];
  }

  ajouterDisk(k: number, t: Array<number>): Array<number> {
    if (this.testDisk(k, t)) t.push(k);
    return t;
  }

  tailleDisqueHaut(t: Array<number>): number {
    return t[t.length];
  }

  retirerDisqueHaut(t: Array<number>): Array<number> {
    t.pop();
    return t;
  }

  // verificationTour(t: Array<number>): boolean {
  //   if (t == []) return true;
  //   else return false;
  // }

  nombreDisque(t: Array<number>): number {
    return t.length;
  }

  tourGauche(): Array<number> {
    let t = new Array<number>();
    for (let i = this.n; i > 0; i--) {
      t.push(i);
    }
    return t;
  }

  creerJeu(): Array<Array<number>> {
    let jeu = new Array<Array<number>>();
    jeu.push(this.tourGauche());
    for (let i = 1; i < this.m; i++) {
      jeu.push(this.tourVide());
    }
    return jeu;
  }
}

let hanoi = new Hanoi(3, 5);

console.log(hanoi.creerJeu());
