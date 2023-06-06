export class Journalisatio {
  private static _instance: Journalisatio;
  private _operations = new Array<string>();
  private _ecart = new Array<number>();

  private constructor() {
    this._operations = [];
  }

  static get instance(): Journalisatio {
    if (!this._instance) {
      this._instance = new Journalisatio();
    }
    return this._instance;
  }

  journaliser(num: number, t: number, h: number): void {
    let chaine = "[ " + num + " ] Temperature : " + t + "°C / Humidité : " + h + " %";
    this._operations.push(chaine.toString());
  }

  afficherEcart(): void {
    for (let c of this._ecart) {
      console.log(c);
    }
  }

  afficher(): void {
    for (let c of this._operations) {
      console.log(c);
    }
  }

  afficherMesure(num: number): void {
    console.log(this._operations[num - 1]);
  }
}
