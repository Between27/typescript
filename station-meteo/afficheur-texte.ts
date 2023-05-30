import { Observateur } from "./observateur";

export class AfficheurTexte implements Observateur {
  public actualise(temperature: number, humidité: number): void {
    this.affiche(temperature, humidité);
  }
  private affiche(temperature: number, humidité: number): void {
    console.log(temperature + "°C\n" + humidité + "%");
  }
}
