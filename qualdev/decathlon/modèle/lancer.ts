import { Epreuve } from "./epreuve";

export class Lancer extends Epreuve {
  private type: Typelancer;

  calculePoints(): number {
    return 0;
  }
}

export class Typelancer {
  private nom_: string;
}
