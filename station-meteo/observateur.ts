export interface Observateur {
  actualise(temperature: number, humidité: number): void;
}
