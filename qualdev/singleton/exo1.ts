class CompteBancaire {
  private _numero: number;
  private _solde: number;

  constructor(numero: number, solde: number) {
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
    if (this._solde < montant) throw new Error("Solde insuffisant");
    this._solde -= montant;
  }

  crediter(montant: number): void {
    this._solde += montant;
  }
}

class Journalisation {
  private static _instance: Journalisation;
  private operations = new Array<string>();

  private constructor() {}

  static get instance(): Journalisation {
    if (!Journalisation._instance) {
      Journalisation._instance = new Journalisation();
    }
    return Journalisation._instance;
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

function main(): void {
  const journal = Journalisation.instance;
  journal.journaliser("Creation du compte bancaire");
  journal.journaliser("Débit de 1000€");
  journal.journaliser("Crédit de 2000€");
  journal.journaliser("Débit de 500€");

  const journal2 = Journalisation.instance;
  journal2.journaliser("Creation du compte bancaire");

  console.log("Affichage de journale");
  journal.afficher();
}

main();
