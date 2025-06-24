//Függvény(eljárás) visszatérési érték és paraméter nélküli: ÚJ KULCSSZÓ: VOID
function ILoveTypeScript() {
    console.log("Szeretem a TypeScriptet");
    //Nincs return
}
//Függvény(eljárás) visszatérési érték nélkül, de paraméteresen, kulcsszó ismét a: VOID
function NegyzetKerulet(aOldal) {
    console.log("A(z) ".concat(aOldal, " oldal\u00FA n\u00E9gyzet ker\u00FClete: ").concat(aOldal * 4));
    //console.log("A(z) " + aOldal + " oldalú négyzet kerülete: " + (aOldal * 4));
}
ILoveTypeScript();
NegyzetKerulet(4);
//Függvény visszatérési értékkel, de paraméter nélkül
function SzamGenerator() {
    return Math.round(Math.random() * 100);
}
console.log(SzamGenerator());
function NegyzetTerulet(aOldal) {
    return aOldal * aOldal;
}
var eredmeny = NegyzetTerulet(3);
console.log(eredmeny);
//HIBA LEHETŐSÉG!
//1 nem megfelelő a típusa a paraméter(ek)nek Meghívásnál
//NegyzetTerulet("3");
//2 nem megfelelő a paraméterek mennyisége a függvénynél! Meghívásnál!
//NegyzetKerulet(3,4);
//3 Visszatérési érték hiányzik! Függvény írásakor szól már erről!
