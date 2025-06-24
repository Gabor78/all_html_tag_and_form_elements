//3.1 feladat
//Páratlanok száma: tömb input, szám output
//Számolja meg, hány páratlan szám van a tömbben
function ParatlanokSzama(vizsgaltTomb) {
    var paratlanokSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 1) {
            paratlanokSzama++;
        }
    }
    return paratlanokSzama;
}
console.log(ParatlanokSzama([21, 12, 13, 42]));
//3.2 feladat
//Számjegyek száma: szám input, szám output (titokban string kezelés :) )
//Adja vissza, hány jegyű egy adott szám
function SzamjegyekSzama(vizsgaltSzam) {
    return vizsgaltSzam.toString().length;
}
console.log(SzamjegyekSzama(2025));
//3.3 feladat
//Legkisebb páros: tömb input, (szám vagy szöveg visszatérési érték)
//Adja vissza, a tömbben a legkisebb páros számot, ha nincs ilyen akkor térjen vissza "nincs ilyen" hibaüzenettel
function LegkisebbParos(vizsgaltTomb) {
    var legkisebbParos = null;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 0 && legkisebbParos == null) {
            legkisebbParos = vizsgaltTomb[i];
        }
        else if (vizsgaltTomb[i] < legkisebbParos && vizsgaltTomb[i] % 2 == 0) {
            legkisebbParos = vizsgaltTomb[i];
        }
    }
    if (legkisebbParos == null) {
        return "nincs ilyen";
    }
    else {
        return legkisebbParos;
    }
}
console.log(LegkisebbParos([21, 12, 13, 42]));
console.log(LegkisebbParos([21, 11, 13, 69]));
