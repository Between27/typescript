import * as asciichart from "asciichart";
import { Observateur } from "./observateur";
export class AfficheurGraphique implements Observateur {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
  }

  public actualise(temperature: number, humidité: number): void {
    this.tabTemperature.push(temperature);
    this.tabHumidité.push(humidité);
    this.affiche();
  }

  private affiche(): void {
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidité]));
  }
}
