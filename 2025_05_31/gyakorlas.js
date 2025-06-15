//Szöveges értékelés
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return "Jeles";
    }
    else if (jegy == 4) {
        return "Jó";
    }
    else if (jegy == 3) {
        return "Közepes";
    }
    else if (jegy == 2) {
        return "Elégséges";
    }
    else if (jegy == 1) {
        return "Elégtelen";
    }
    else {
        return "Nincs ilyen osztályzat!";
    }
}
//Melyik a nagyobb?
function MelyikANagyobb(szam1, szam2) {
    if (szam1 > szam2) {
        return "Az első szám (" + szam1 + ") nagyobb, mint a második (" + szam2 + ").";
    }
    else if (szam1 < szam2) {
        return "A második szám (" + szam2 + ") nagyobb, mint az első (" + szam1 + ").";
    }
    else if (szam1 = szam2) {
        return "A két szám (" + szam1 + "," + szam2 + ") egyenlő.";
    }
}
//Téglatest felszín
function TeglaTestFelszin(aOldal, bOldal, cOldal) {
    return (aOldal * bOldal + bOldal * cOldal + aOldal * cOldal) * 2;
}
//Számtani sorozat-e?
function SzamtaniSorozatE(szam1, szam2, szam3) {
    if (szam1 - szam2 == szam2 - szam3) {
        return "A(z) " + szam1 + "," + szam2 + "," + szam3 + " számok számtani sorozatot alkotnak.";
    }
    else {
        return "A(z) " + szam1 + "," + szam2 + "," + szam3 + " számok NEM alkotnak számtani sorozatot.";
    }
}
//Halmazállapotok
function Halmazallapotok(homerseklet) {
    if (homerseklet >= 5000) {
        return "Plazmaállapot";
    }
    if (homerseklet >= 374) {
        return "Szuperkritikus állapot (csak nagy nyomáson)";
    }
    if (homerseklet >= 100) {
        return "Gáz (Gőz)";
    }
    if (homerseklet >= 0) {
        return "Folyékony (Víz)";
    }
    if (homerseklet === -137) {
        return "Üvegállapot / amorf szilárd";
    }
    if (homerseklet === -273.15) {
        return "Bose-Einstein-kondenzátum";
    }
    if (homerseklet < 0) {
        return "Szilárd (Jég)";
    }
    return "Ismeretlen érték";
}
//Szerkeszthető háromszög
function SzerkeszthetoHaromszog(aOldal, bOldal, cOldal) {
    if (aOldal <= 0 || bOldal <= 0 || cOldal <= 0) {
        return "Érvénytelen adat";
    }
    if (aOldal + bOldal > cOldal && aOldal + cOldal > bOldal && bOldal + cOldal > aOldal) {
        return "A(z) " + aOldal + "," + bOldal + "," + cOldal + " hosszúságú oldalakkal lehetséges háromszöget alkotni.";
    }
    else {
        return "A(z) " + aOldal + "," + bOldal + "," + cOldal + " hosszúságú oldalakkal NEM lehetséges háromszöget alkotni.";
    }
}
//Síknegyed meghatározása koordináta rendszerben
function SiknegyedMeghatarozas(xErtek, yErtek) {
    if (xErtek == 0 && yErtek == 0) {
        return "A 0,0 pont az Origo, a koordináta rendszer középpontja.";
    }
    else if (xErtek == 0) {
        return "(" + xErtek + "," + yErtek + ") pont: az Y tengelyen helyezkedik el, " + yErtek + " egységnyire az origótól.";
    }
    else if (yErtek == 0) {
        return "(" + xErtek + "," + yErtek + ") pont: az X tenfelyen helyezkedik el, " + xErtek + " egységnyire az origótól.";
    }
    else if (xErtek > 0 && yErtek > 0) {
        return "(" + xErtek + "," + yErtek + ") pont: az 1. síknegyedben található, az origótól jobbra fent.";
    }
    else if (xErtek < 0 && yErtek > 0) {
        return "(" + xErtek + "," + yErtek + ") pont: a 2. síknegyedben található, az origótól balra fent.";
    }
    else if (xErtek < 0 && yErtek < 0) {
        return "(" + xErtek + "," + yErtek + ") pont: a 3. síknegyedben található, az origótól balra lent.";
    }
    else if (xErtek > 0 && yErtek < 0) {
        return "(" + xErtek + "," + yErtek + ") pont: a 4. síknegyedben található, az origótól jobbra lent.";
    }
}
//Tömb feltöltő
function TombFeltolto(n) {
    var feltoltottTomb = [];
    for (var i = 0; i < n; i++) {
        var randomSzam = Math.round(Math.random() * 100);
        feltoltottTomb.push(randomSzam);
    }
    return feltoltottTomb;
}
var ujTomb = TombFeltolto(10);
//Összegzés tétele
function OsszegzesTetele(tomb) {
    var summ = 0;
    for (var i = 0; i < tomb.length; i++) {
        summ += tomb[i];
    }
    return summ;
}
var ujSumm = OsszegzesTetele(ujTomb);
//Átlagszámítás tétele
function AtlagszamitasTetele(tomb) {
    var summ = OsszegzesTetele(tomb);
    return summ / tomb.length;
}
//Minimum keresés tétele
function MinimumKeresesTetele(tomb) {
    var minimum = tomb[0];
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] < minimum) {
            minimum = tomb[i];
        }
    }
    return minimum;
}
//Maximum keresés tétele
function MaximumKeresesTetele(tomb) {
    var maximum = tomb[0];
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] > maximum) {
            maximum = tomb[i];
        }
    }
    return maximum;
}
//Halmazok uniója
function HalmazokUnioja(aHalmaz, bHalmaz) {
    var unioHalmaz = [];
    for (var i = 0; i < aHalmaz.length; i++) {
        unioHalmaz.push(aHalmaz[i]);
    }
    for (var i = 0; i < bHalmaz.length; i++) {
        unioHalmaz.push(bHalmaz[i]);
    }
    return unioHalmaz;
}
//Halmazok metszete
function HalmazokMetszete(aHalmaz, bHalmaz) {
    var metszetHalmaz = [];
    for (var i = 0; i < aHalmaz.length; i++) {
        for (var j = 0; j < bHalmaz.length; j++) {
            if (aHalmaz[i] == bHalmaz[j]) {
                metszetHalmaz.push(aHalmaz[i]);
            }
        }
    }
    return metszetHalmaz;
}
//Halmaz tartalmazza-e
function TartalmazzaE(aHalmaz, szam) {
    var tartalmazzE = false;
    for (var i = 0; i < aHalmaz.length; i++) {
        if (aHalmaz[i] == szam) {
            tartalmazzE = true;
        }
    }
    return tartalmazzE;
}
//Halmazok különbsége
function HalmazokKulonbsege(aHalmaz, bHalmaz) {
    var kulonbsegHalmaz = [];
    for (var i = 0; i < aHalmaz.length; i++) {
        if (!TartalmazzaE(bHalmaz, aHalmaz[i])) {
            kulonbsegHalmaz.push(aHalmaz[i]);
        }
    }
    return kulonbsegHalmaz;
}
//Karaktermennyiség adott karakterből
function Karaktermennyiseg(szoveg, karakter) {
    var karaktermennyiseg = 0;
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] == karakter) {
            karaktermennyiseg++;
        }
    }
    return karaktermennyiseg;
}
//Szöveg visszafelé
function SzovegVisszafele(szoveg) {
    var szovegVisszafele = "";
    for (var i = szoveg.length - 1; i >= 0; i--) {
        szovegVisszafele += szoveg[i];
    }
    return szovegVisszafele;
}
//Magánhangzók száma
function MaganhangzokSzama(szoveg) {
    var mgnhangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    var mgnhangzokSzama = 0;
    for (var i = 0; i < szoveg.length; i++) {
        for (var j = 0; j < mgnhangzok.length; j++) {
            if (szoveg[i].toLowerCase() == mgnhangzok[j]) {
                mgnhangzokSzama++;
            }
        }
    }
    return mgnhangzokSzama;
}
//Decimális -> Bináris számkonvertáló
function DecimalisBinaris(decimalisSzam) {
    var binarisKarakterek = "01";
    var binarisSzam = "";
    var absDecimaliSzam = Math.abs(decimalisSzam);
    while (absDecimaliSzam > 0) {
        var aktualisKarakter = absDecimaliSzam % 2;
        binarisSzam = binarisKarakterek[aktualisKarakter] + binarisSzam;
        absDecimaliSzam = Math.floor(absDecimaliSzam / 2);
    }
    if (decimalisSzam < 0) {
        binarisSzam = "-" + binarisSzam;
    }
    return binarisSzam;
}
//Decimális -> Oktális számkonvertáló
function DecimalisOktalis(decimalisSzam) {
    var oktalisKarakterek = "01234567";
    var oktalisSzam = "";
    var absDecimaliSzam = Math.abs(decimalisSzam);
    while (absDecimaliSzam > 0) {
        var aktualisKarakter = absDecimaliSzam % 8;
        oktalisSzam = oktalisKarakterek[aktualisKarakter] + oktalisSzam;
        absDecimaliSzam = Math.floor(absDecimaliSzam / 8);
    }
    if (decimalisSzam < 0) {
        oktalisSzam = "-" + oktalisSzam;
    }
    return oktalisSzam;
}
//Decimális -> Hexadecimális számkonvertáló
function DecimalisHexadecimalis(decimalisSzam) {
    if (decimalisSzam === 0) {
        return "00";
    }
    var hexaKarakterek = "0123456789ABCDEF";
    var hexadecimalisSzam = "";
    var absDecimalisSzam = Math.abs(decimalisSzam);
    while (absDecimalisSzam > 0) {
        var aktualisKarakter = absDecimalisSzam % 16;
        hexadecimalisSzam = hexaKarakterek[aktualisKarakter] + hexadecimalisSzam;
        absDecimalisSzam = Math.floor(absDecimalisSzam / 16);
    }
    if (decimalisSzam < 16) {
        hexadecimalisSzam = "0" + hexadecimalisSzam;
    }
    if (decimalisSzam < 0) {
        hexadecimalisSzam = "-" + hexadecimalisSzam;
    }
    return hexadecimalisSzam;
}
//Decimális -> Duodecimális számkonvertáló
function DecimalisDuodecimalis(decimalisSzam) {
    var duodeciKarakterek = "0123456789AB";
    var duodecimalisSzam = "";
    var absDecimalisSzam = Math.abs(decimalisSzam);
    while (absDecimalisSzam > 0) {
        var aktualisKarakter = absDecimalisSzam % 12;
        duodecimalisSzam = duodeciKarakterek[aktualisKarakter] + duodecimalisSzam;
        absDecimalisSzam = Math.floor(absDecimalisSzam / 12);
    }
    if (decimalisSzam < 0) {
        duodecimalisSzam = "-" + duodecimalisSzam;
    }
    return duodecimalisSzam;
}
//RGB -> HEXA konverter
function RGBColorToHEXAConverter(r, g, b) {
    if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
        return false;
    }
    var redInHexa = DecimalisHexadecimalis(r);
    var greenInHexa = DecimalisHexadecimalis(g);
    var blueInHexa = DecimalisHexadecimalis(b);
    var hexaColor = "#" + redInHexa + greenInHexa + blueInHexa;
    return hexaColor;
}
//Kocka térfogata
function KockaTerfogat(oldalHosszusag) {
    return Math.pow(oldalHosszusag, 3);
}
//Téglalap kerület
function TeglalapKerulet(aOldal, bOldal) {
    var teglalapKerulet = 0;
    teglalapKerulet = aOldal * 2 + bOldal * 2;
    return teglalapKerulet;
}
//Téglalap terület
function TeglalapTerulet(aOldal, bOldal) {
    var teglalapTerulet = 0;
    teglalapTerulet = aOldal * bOldal;
    return teglalapTerulet;
}
//Palindrom ellenőrzés
function PalindromEllenorzes(szoveg) {
    var forditottSzoveg = "";
    var kisbetusSzoveg = szoveg.toLowerCase();
    var csakBetukSzoveg = "";
    for (var i = 0; i < kisbetusSzoveg.length; i++) {
        if (kisbetusSzoveg[i] != " " && kisbetusSzoveg[i] != "." && kisbetusSzoveg[i] != "," && kisbetusSzoveg[i] != "!" && kisbetusSzoveg[i] != "?") {
            csakBetukSzoveg += kisbetusSzoveg[i];
        }
    }
    for (var i = csakBetukSzoveg.length - 1; i >= 0; i--) {
        forditottSzoveg += csakBetukSzoveg[i];
    }
    return csakBetukSzoveg == forditottSzoveg;
}
