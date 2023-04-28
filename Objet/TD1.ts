// class Point {
//   x: number;
//   y: number;
// }

// let pt = new Point();

// pt.x = 125;
// pt.y = 130;

// class Cercle {
//   centre = new Point();
//   rayon: number;
// }

// let p = new Cercle();

// p.centre.x = 150;
// p.centre.y = 100;
// p.rayon = 75;

// function pointDansCercle(cercle: Cercle, point: Point): boolean {
//   if (point.x < cercle.centre.x && point.x > cercle.centre.x - cercle.rayon) return true;
//   else if (point.y < cercle.centre.y && point.y > cercle.centre.y - cercle.rayon) return true;
//   else if (point.x > cercle.centre.x && point.x < cercle.centre.x + cercle.rayon) return true;
//   else if (point.y > cercle.centre.y && point.y < cercle.centre.y + cercle.rayon) return true;
//   else return false;
// }

// class Rectangle {
//   a = new Point();
//   b = new Point();
//   c = new Point();
//   d = new Point();
// }

// let rec = new Rectangle();

// rec.a.y = rec.b.y = 110;
// rec.a.x = rec.b.x = 130;
// rec.c.y = rec.d.y = 90;
// rec.b.x = rec.d.x = 170;

// function rectangleDansCercle(cercle: Cercle, rectangle: Rectangle): boolean {
//   if (
//     pointDansCercle(cercle, rectangle.a) &&
//     pointDansCercle(cercle, rectangle.b) &&
//     pointDansCercle(cercle, rectangle.c) &&
//     pointDansCercle(cercle, rectangle.d)
//   )
//     return true;
//   else return false;
// }

// function chevauchement(cercle: Cercle, rectangle: Rectangle): boolean {
//   if (
//     pointDansCercle(cercle, rectangle.a) ||
//     pointDansCercle(cercle, rectangle.b) ||
//     pointDansCercle(cercle, rectangle.c) ||
//     pointDansCercle(cercle, rectangle.d)
//   )
//     return true;
//   else return false;
// }

// class Temps {
//   heure: number;
//   minute: number;
//   second: number;
// }

// let Temps1 = new Temps();

// Temps1.heure = 4;
// Temps1.minute = 45;
// Temps1.second = 59;

// function temps2Number(temps: Temps): number {
//   let nombreSeconde = temps.heure * 3600 + temps.minute * 60 + temps.second;
//   return nombreSeconde;
// }

// function number2temps(sec: number): Temps {
//   let t = new Temps();
//   let g = new Temps();
//   t.heure = Math.floor(sec / 3600);
//   t.minute = Math.floor((sec % 3600) / 60);
//   t.second = (sec % 3600) % 60;
//   g.heure = t.heure;
//   g.minute = t.minute;
//   g.second = t.second;
//   return g;
// }

// function multiplieTemps(temps: Temps, n: number): Temps {
//   let t = new Temps();
//   let g = new Temps();
//   t.second = (temps.second * n) % 60;
//   t.minute = (temps.minute * n + Math.floor((temps.second * n) / 60)) % 60;
//   t.heure =
//     temps.heure * n + Math.floor((temps.minute * n + Math.floor((temps.second * n) / 60)) / 60);
//   g.heure = t.heure;
//   g.minute = t.minute;
//   g.second = t.second;
//   return g;
// }

// function vitesse(temps: Temps, d: number): Temps {
//   let calcul = number2temps(temps2Number(temps) / d);

//   return calcul;
// }

// console.log(vitesse(Temps1, 23));
