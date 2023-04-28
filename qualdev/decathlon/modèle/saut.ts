import { Epreuve } from "./epreuve";

export class saut extends Epreuve {
  private type: Typesaut;

  calculePoints(): number {
    return 0;
  }
}

export class Typesaut {
  private nom_: string;
}
