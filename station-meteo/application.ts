import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
//import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
import { Journalisatio } from "./jounalisation";

function main(): void {
  //const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);
  const journal = Journalisatio.instance;
  stationMeteo.humidité++;

  for (let p = 1; p < 10; p++) {
    //console.log("Appuyez sur entrée pour le prochain affichage");
    // rs.question();
    //aff.actualise(stationMeteo.temperature, stationMeteo.humidité);

    aff2.actualise(stationMeteo.temperature, stationMeteo.humidité);
    journal.journaliser(p, stationMeteo.temperature, stationMeteo.humidité);
    stationMeteo.humidité--;
    stationMeteo.temperature += 2;
  }
  console.log("1. pour l'affichage du journal");
  console.log("2. pour l'affichage d'une mesure");
  console.log("3. pour l'affichage graphique");
  console.log("4. pour quitter");
  let b = false;
  while (!b) {
    let question = rs.question("Que voulez-vous faire ? ");
    if (question == "1") {
      journal.afficher();
      b = true;
    } else if (question == "2") {
      let t = false;
      while (!t) {
        let choix = Number(rs.questionInt("Quelle mesure voulez-vous afficher ? "));
        journal.afficherMesure(choix);
        t = true;
        b = true;
      }
    } else if (question == "3") {
      aff2.affiche();
      b = true;
    } else if (question == "4") {
      return;
    }
  }
  journal.afficherEcart();
}

main();
