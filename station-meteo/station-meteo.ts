import { Observateur } from "./observateur";

export class StationMétéo {
  private _temperature: number;
  private _humidité: number;
  private observateurs : Array<Observateur>

  constructor(temperature = 0, humidité = 15) {
    this._temperature = temperature;
    this._humidité = humidité;
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
  }

  public ajoutObservateur(observateur: Observateur): void {
    this.observateurs.push(observateur);
  }

  public toString(): string {
    return this._temperature + "°C\n" + this._humidité + "%";
  }
}
