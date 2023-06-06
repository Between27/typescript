class CompteBancaire {
  private _numero: number;
  private _solde: number;

  constructor(numero: number, solde = 0) {
    this._numero = numero;
    this._solde = solde;
  }

  get numero(): number {
    return this._numero;
  }

  get solde(): number {
    return this._solde;
  }

  debiter(montant: number): void {
    if (this._solde < montant) {
      Journalisation.instance.journaliser("Solde insuffisant");
      return;
    }
    this._solde -= montant;
  }

  crediter(montant: number): void {
    Journalisation.instance.journaliser(
      "Compte " + this._numero + " : Crédit de " + montant + " €"
    );
    Multiton;
    this._solde += montant;
  }
}

class Journalisation {
  private static _instance: Journalisation;
  private operations = new Array<string>();

  private constructor() {
    this.operations = [];
  }

  static get instance(): Journalisation {
    if (!this._instance) {
      this._instance = new Journalisation();
    }
    return this._instance;
  }

  journaliser(operation: string): void {
    let d = new Date().toLocaleDateString();
    let chaine = "[ " + d + " ] " + operation;
    this.operations.push(chaine.toString());
    //this.operations.push(`${d} ${operation}`);
  }

  afficher(): void {
    for (let c of this.operations) {
      console.log(c);
    }
  }
}

class Multiton {
  private static _instaces: Map<string, Multiton>;
  private _operations: string[];

  private constructor() {
    this._operations = [];
  }

  static getInstance(key: string): void {
    if (!Multiton._instaces.has(key)) Multiton._instaces.set(key, new Multiton());
  }
}

function main(): void {
  const cb1 = new CompteBancaire(1234, 10000);
  cb1.crediter(1000);
  Journalisation.instance.afficher();
}

main();
