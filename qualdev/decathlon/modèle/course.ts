import { Epreuve } from "./epreuve";
import { TabScore } from "./tabscore";

export class Course extends Epreuve {
  private type: Typecourse;

  calculePoints(): number {
    let tab = this.points
    for (let i=0; i<tab.length; i++) {
      if (this.type.nom_ == "100m") {
      let score = TabScore.perf   [0][i];
      }
    
  }
  return 0;
  }

}

export class Typecourse {
   nom_: string;

}
