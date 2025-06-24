//EGYSZERŰ VÁLTOZÓ TÍPUSOK
//Implicit típuskonverzió
var programozasiNyelv1 = "JavaScript"; //A böngésző dönti el a tartalma alapján, hogy milyen típus...
//Explicit típuskonverzió
var programozasiNyelv2 = "TypeScript"; //Mi döntjük el, a változó tartalam mi lehet! A gép (TS) ellenőrzi!
var szoveg = "Szeretem a programozást!"; //szöveg típusú változó
var szoveg = "22"; //Újradeklarálni lehet, de UGYNAZ a típus kell maradjon a változó! Különben figyelmeztet a TS!
/*
var szoveg:number=22;
Az alábbi kód TS-ben folyamatosan FIGYELMEZTET minket a hiba előfordulásának lehetőségére
*/
//Let esetén csak azért szól, mert azt "blokk szinten" {} között szoktuk használni!
var szam = 21; //Szám típusú változó
var logikai = true; //Logikai típusú változó
var logikai = false; //Logikai típusú változó
//VAR-t lehet használni a TS-en belül, mert a hozzá kapcsolatos MINDEN függést ellenőrzi a TS!
//Új egyszerű (elemi) típusok:
//any: "bármi" hasonló mint anno a JS változók voltak
var barmi = true;
barmi = "Pisztácia";
barmi = 42;
//unknown: Használat előtt mindenképp meg kell határozni a típusát(ritkábban használjuk)
var ismeretlen = false;
ismeretlen = "Csokoládé";
ismeretlen = 21;
//let-re és const-ra vonatkozó szabályok ugyanúgy elleőrizve vannak!
//Egyedi változó típusok: következő alkalommal: tuple, enum, object, interface
//tömb(array):
var szovegesTomb = ["alma", "körte", "barack", "szilva"];
var szovegesTomb2 = ["rpg", "fps", "tps", "szimulátor", "rts", "4x", "mmo"];
var szovegesTomb3 = [22, 42, 33, 13]; //NE HASZNÁLD MERT NEM TISZTA KÓD, bár helyes kódolásilag
var szamosTomb = ["huszonkettő", "negyvenkettő", "harminchárom", "tizenhárom"]; //NE HASZNÁLD MERT NEM TISZTA KÓD, bár helyes kódolásilag
//A NYELVTANI hibákat, kiszűri a TypeScript, viszont a logikai sosem fogja...
var szamTomb = [21, 13, 42, 3, 69, 33, 81, 66];
//új elem feltöltés:
//szamTomb.push("7");//HIBÁS: A tömbünk számot vár, de mi szöveget akartunk feltölteni
szamTomb.push(7);
var szemetesKuka = ["almacsutka", 13, false];
szemetesKuka.push("Pelenka"); //Any típusú tömbbe bármit bele lehet helyezni... Mint JS esetén
//Viszont ilyenkor ügyelni kell arra, melyik indexen, milyen típusú érték van!
//Mert műveletet viszont nem tudunk végrehajtani minden típusú változóval!!!
