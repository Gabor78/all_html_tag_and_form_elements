//Feladatok: console.log-gal elég az eredmény!
//Feladat: a változók létrehozásakor vagy beolvasásakor, mindennek legyen típusa!


//Téglalap kerület-terület
var aOldal: number = Number(prompt("Adja meg az A oldal értékét:"));
var bOldal: number = Number(prompt("Adja meg az B oldal értékét:"));

var kerulet: number = 2 * (aOldal + bOldal);
var terulet: number = aOldal * bOldal;

console.log("A téglalap kerülete: " + kerulet)
console.log("A téglalap területe: " + terulet)


//Páros páratlat: Döntse el egy számról, hogy páros vagy páratlan, esetleg NULLA
var szam: number = Number(prompt("Adja meg vizsgálandó számot: "));
if (szam == 0) {
    console.log("A " + szam + " értéke pontosan NULLA");
}
else if (szam % 2 == 0) {
    console.log("A " + szam + " páros");
}
else {
    console.log("A " + szam + " páratlan");
}



//Érdemjegy: Jeles(5), Jó(4), Közepes(3), Elégséges(2), Elégtelen(1)

var jegy: number = Number(prompt("Adja meg a jegyet: "));
if (jegy == 1) {
    console.log("Elégtelen");
}
else if (jegy == 2) {
    console.log("Elégséges");
}
else if (jegy == 3) {
    console.log("Közepes");
}
else if (jegy == 4) {
    console.log("Jó")
}
else if (jegy == 5) {
    console.log("Jeles");
}
else {
    console.log("Hibás adat!");
}