import { cp } from "fs";

class Caractère {
  private car: string;

  constructor(car = " ") {
    this.car = car;
  }
  estVoyelle(): boolean {
    return (
      this.car.toLowerCase() ==
      //tolowercase transforme l'entrée en minuscule
      ("a" || "e" || "i" || "o" || "u" || "y" || "A" || "E" || "O" || "I" || "U" || "Y")
    );
  }
}

let carac = new Caractère(" ");

class Rectangle {
  private longueur: number;
  private largeur: number;

  constructor(longueur = 1, largeur = 1) {
    this.longueur = longueur;
    this.largeur = largeur;
  }

  perimètre(): number {
    let calcul = (this.longueur + this.largeur) * 2;

    return calcul;
  }
  surface(): number {
    let calcul = this.longueur * this.largeur;
    return calcul;
  }
  agrandir(multiplicateur: number): Rectangle {
    let rectangleAgrandi = new Rectangle(
      this.longueur * multiplicateur,
      this.largeur * multiplicateur
    );
    return rectangleAgrandi;
  }
}
let rectangle = new Rectangle();

class Reservoir {
  private capacité: number;

  constructor(capacité: number) {
    this.capacité = capacité;
  }

  verse(n: number): number {
    let restant: number = n - this.capacité;
    if (n > this.capacité) return restant;
    else return n;
  }
  puise(n: number): number {
    if (n < this.capacité) return this.capacité - n;
    else return n;
  }
  jauge(): void {
    console.log("Il y a ", this.capacité, " dans le reservoir");
  }
}

let reservoir = new Reservoir(1000);

class Point {
  private abs_ = 0;
  private ord_ = 0;
  constructor(abs = 0, ord = 0) {
    this.abs_ = abs;
    this.ord_ = ord;
  }
  get abs(): number {
    return this.abs_;
  }
  set abs(valeur) {
    this.abs_ = valeur;
  }
  get ord(): number {
    return this.ord_;
  }
  set ord(valeur) {
    this.ord_ = valeur;
  }
  toString(): string {
    return "(" + this.abs_ + ", " + this.ord_ + ")";
  }
  déplace(dabs: number, dord: number): void {
    this.abs_ += dabs;
    this.ord_ += dord;
  }
  somme(x: Point): Point {
    this.abs += x.abs;
    this.ord += x.ord;

    return x;
  }

  test(x: Point): void {
    if (this.abs === x.abs && this.ord === x.ord) console.log("ok");
    else console.log("erreur");
  }

  somme2(x: Point, y: Point): void {
    this.abs = x.abs + y.abs;
    this.ord = x.ord + y.ord;

    console.log(this);
  }
}

// let pt0 = new Point();

// let prpoint = new Point();
// prpoint.abs = 5;
// prpoint.ord = 2;

// let depoint = new Point();
// depoint.abs = 4;
// depoint.ord = 3;

// prpoint.test(depoint);

// pt0.somme2(prpoint, depoint);

class Segment {
  private a = new Point();
  private b = new Point();

  constructor(x1 = 1, y1 = 2, x2 = 2, y2 = 1) {
    this.a.abs = x1;
    this.a.ord = y1;
    this.b.abs = x2;
    this.b.ord = y2;
  }

  get x1(): number {
    return this.a.abs;
  }

  set x1(valeur) {
    this.a.abs = valeur;
  }
  get y1(): number {
    return this.a.ord;
  }

  set y1(valeur) {
    this.a.ord = valeur;
  }

  get x2(): number {
    return this.b.abs;
  }

  set x2(valeur) {
    this.b.abs = valeur;
  }

  get y2(): number {
    return this.b.ord;
  }

  set y2(valeur) {
    this.b.ord = valeur;
  }

  inversion(): Segment {
    let g = new Segment();

    this.x1 = g.x2;
    this.y1 = g.y2;

    this.x2 = g.x1;
    this.y2 = g.y1;

    return g;
  }

  longueur(): void {
    let d = (this.x1 - this.x2) ** 2 + (this.y1 - this.y2) ** 2;
    console.log(d);
  }
}

// let seg = new Segment();

class Elève {
  private nom_: string;
  private prénom_: string;
  private age_: number;
  public constructor(nom: string, prénom: string, age: number) {
    this.nom_ = nom;
    this.prénom_ = prénom;
    this.age_ = age;
  }

  get nom(): string {
    return this.nom_;
  }

  set nom(valeur) {
    this.nom_ = valeur;
  }

  get prénom(): string {
    return this.prénom_;
  }
  set prénom(valeur) {
    this.prénom_ = valeur;
  }

  get age(): number {
    return this.age_;
  }

  set age(valeur) {
    this.age = valeur;
  }

  affichage(): void {
    console.log("Nom : ", this.nom);
    console.log("Prénom : ", this.prénom);
    console.log("Age : ", this.age);
  }
  est(nom: string, prénom: string): boolean {
    return (
      this.nom.toLowerCase() === nom.toLowerCase() &&
      this.prénom.toLowerCase() == prénom.toLowerCase()
    );
  }
}

let abou = new Elève("MAMANE IBRAHIM", "Aboubacar", 23);

class Classe {
  private nombreMaximumÉlèves_: number;
  private élèves_: Array<Elève>;

  // Constructeur : On suppose qu'au départ la classe est vide
  constructor(nombreMaximumÉlèves: number) {
    this.nombreMaximumÉlèves_ = nombreMaximumÉlèves;
    this.élèves_ = new Array<Elève>();
  }

  get nombreMaximumElèves(): number {
    return this.nombreMaximumÉlèves_;
  }

  set nombreMaximumElèves(valeur) {
    this.nombreMaximumÉlèves_ = valeur;
  }
  // Méthodes pour accéder aux informations sur la classe
  tailleMaximum(): number {
    return this.nombreMaximumElèves;
  } // retourne le nombre maximum d'élèves
  tailleCourante(): number {
    return this.élèves_.length;
  } // retourne le nombre d'élèves actuellement
  pleine(): boolean {
    return this.tailleCourante() == this.tailleMaximum();
  } // indique si la classe est pleine ou non
  // méthodes pour ajouter un élève
  // Si la classe est pleine, la méthode ne doit rien faire et renvoyer false
  // sinon l'élève est ajouter et on retourne true
  ajout(nom: string, prénom: string, age: number): boolean {
    if (this.pleine()) return false;
    else {
      let newElève = new Elève(nom, prénom, age);
      this.élèves_.push(newElève);
      return true;
    }
  }
  // Méthodes sur les élèves
  dansClasse(nom: string, prénom: string): boolean {
    for (let e of this.élèves_) {
      if (e.est(nom, prénom)) return true;
    }
    return false;
  }
  élève(nom: string, prénom: string): Elève | undefined {
    for (let e of this.élèves_) if (e.est(nom, prénom)) return e;

    return undefined;
  }
  public affiche(): void {
    for (let e of this.élèves_) e.affichage();
  } // affiche la liste des élèves de la classe
}

let classe = new Classe(5);

console.log(classe.ajout("Aboubacar", "MAMANE", 23));

classe.affiche();
