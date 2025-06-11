//Szöveges értékelés
function SzovegesErtekeles(jegy: number): string {
    if (jegy == 5) {
        return "Jeles";
    }
    else if (jegy == 4) {
        return "Jó"
    }
    else if (jegy == 3) {
        return "Közepes"
    }
    else if (jegy == 2) {
        return "Elégséges"
    }
    else if (jegy == 1) {
        return "Elégtelen"
    }
    else {
        return "Nincs ilyen osztályzat!"
    }
}

//Melyik a nagyobb?
function MelyikANagyobb(szam1: number, szam2: number): string {
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
function TeglaTestFelszin(aOldal: number, bOldal: number, cOldal: number): number {
    return (aOldal * bOldal + bOldal * cOldal + aOldal * cOldal) * 2;
}

//Számtani sorozat-e?
function SzamtaniSorozatE(szam1: number, szam2: number, szam3: number): string {
    if (szam1 - szam2 == szam2 - szam3) {
        return "A(z) " + szam1 + "," + szam2 + "," + szam3 + " számok számtani sorozatot alkotnak.";
    }
    else {
        return "A(z) " + szam1 + "," + szam2 + "," + szam3 + " számok NEM alkotnak számtani sorozatot.";
    }
}

//Halmazállapotok
function Halmazallapotok(homerseklet: number): string {
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
    return "Ismeretlen érték"
}

//Szerkeszthető háromszög
function SzerkeszthetoHaromszog(aOldal: number, bOldal: number, cOldal: number): string {
    if (aOldal <= 0 || bOldal <= 0 || cOldal <= 0) {
        return "Érvénytelen adat"
    }
    if (aOldal + bOldal > cOldal && aOldal + cOldal > bOldal && bOldal + cOldal > aOldal) {
        return "A(z) " + aOldal + "," + bOldal + "," + cOldal + " hosszúságú oldalakkal lehetséges háromszöget alkotni.";
    }
    else {
        return "A(z) " + aOldal + "," + bOldal + "," + cOldal + " hosszúságú oldalakkal NEM lehetséges háromszöget alkotni.";
    }
}

//Síknegyed meghatározása koordináta rendszerben
function SiknegyedMeghatarozas(xErtek: number, yErtek: number): string {
	if (xErtek == 0 && yErtek == 0) {
		return "A 0,0 pont az Origo, a koordináta rendszer középpontja."
	}
	else if (xErtek == 0) {
		return "(" + xErtek + "," + yErtek + ") pont: az Y tengelyen helyezkedik el, " + yErtek + " egységnyire az origótól."
	}
	else if (yErtek == 0) {
		return "(" + xErtek + "," + yErtek + ") pont: az X tenfelyen helyezkedik el, " + xErtek + " egységnyire az origótól."
	}
	else if (xErtek > 0 && yErtek > 0) {
		return "(" + xErtek + "," + yErtek + ") pont: az 1. síknegyedben található, az origótól jobbra fent."
	}
	else if (xErtek < 0 && yErtek > 0) {
		return "(" + xErtek + "," + yErtek + ") pont: a 2. síknegyedben található, az origótól balra fent."
	}
	else if (xErtek < 0 && yErtek < 0) {
		return "(" + xErtek + "," + yErtek + ") pont: a 3. síknegyedben található, az origótól balra lent."
	}
	else if (xErtek > 0 && yErtek < 0) {
		return "(" + xErtek + "," + yErtek + ") pont: a 4. síknegyedben található, az origótól jobbra lent."
	}
}

//Tömb feltöltő
function TombFeltolto(n: number): number[] {
    let feltoltottTomb: number[] = [];
    for (var i: number = 0; i < n; i++) {
        let randomSzam = Math.round(Math.random() * 100);
        feltoltottTomb.push(randomSzam);
    }
    return feltoltottTomb;
}
let ujTomb: number[] = TombFeltolto(10);

//Összegzés tétele
function OsszegzesTetele(tomb: number[]): number {
    let summ: number = 0;
    for (var i: number = 0; i < tomb.length; i++) {
        summ += tomb[i];
    }
    return summ;
}
let ujSumm: number = OsszegzesTetele(ujTomb);

//Átlagszámítás tétele
function AtlagszamitasTetele(tomb: number[]): number {
    let summ: number = OsszegzesTetele(tomb);
    return summ / tomb.length;
}

//Minimum keresés tétele
function MinimumKeresesTetele(tomb: number[]): number {
    let minimum: number = tomb[0];
    for (var i: number = 0; i < tomb.length; i++) {
        if (tomb[i] < minimum) {
            minimum = tomb[i];
        }
    }
    return minimum;
}

//Maximum keresés tétele
function MaximumKeresesTetele(tomb: number[]): number {
    let maximum: number = tomb[0];
    for (var i: number = 0; i < tomb.length; i++) {
        if (tomb[i] > maximum) {
            maximum = tomb[i];
        }
    }
    return maximum;
}

//Halmazok uniója
function HalmazokUnioja(aHalmaz: number[], bHalmaz: number[]): number[] {
    let unioHalmaz: number[] = [];
    for (var i:number = 0; i < aHalmaz.length; i++) {
        unioHalmaz.push(aHalmaz[i]);
    }
    for (var i:number = 0; i < bHalmaz.length; i++) {
        unioHalmaz.push(bHalmaz[i]);
    }
    return unioHalmaz;
}

//Halmazok metszete
function HalmazokMetszete(aHalmaz: number[], bHalmaz: number[]): number[] {
    let metszetHalmaz: number[] = [];
    for (var i: number = 0; i < aHalmaz.length; i++) {
        for (var j: number = 0; j < bHalmaz.length; j++) {
            if (aHalmaz[i] == bHalmaz[j]) {
                metszetHalmaz.push(aHalmaz[i]);
            }
        }
    }
    return metszetHalmaz;
}

//Halmaz tartalmazza-e
function TartalmazzaE(aHalmaz: number[], szam: number): boolean {
    let tartalmazzE: boolean = false;
    for (var i: number = 0; i < aHalmaz.length; i++) {
        if (aHalmaz[i] == szam) {
            tartalmazzE = true;
        }
    }
    return tartalmazzE;
}

//Halmazok különbsége
function HalmazokKulonbsege(aHalmaz: number[], bHalmaz: number[]): number[] {
    let kulonbsegHalmaz: number[] = [];
    for (var i: number = 0; i < aHalmaz.length; i++) {
        if (!TartalmazzaE(bHalmaz, aHalmaz[i])) {
            kulonbsegHalmaz.push(aHalmaz[i]);
        }
    }
    return kulonbsegHalmaz;
}

//Karaktermennyiség adott karakterből
function Karaktermennyiseg(szoveg: string, karakter: string): number {
    let karaktermennyiseg: number = 0;
    for (var i: number = 0; i < szoveg.length; i++) {
        if (szoveg[i] == karakter) {
            karaktermennyiseg++;
        }
    }
    return karaktermennyiseg;
}

//Szöveg visszafelé
function SzovegVisszafele(szoveg: string): string {
    let szovegVisszafele: string = "";
    for (var i: number = szoveg.length - 1; i >= 0; i--) {
        szovegVisszafele += szoveg[i];
    }
    return szovegVisszafele;
}

//Magánhangzók száma
function MaganhangzokSzama(szoveg: string): number {
	let mgnhangzok = ["a","á","e","é","i","í","o","ó","ö","ő","u","ú","ü","ű"];
    let mgnhangzokSzama: number = 0;
    for (var i: number = 0; i < szoveg.length; i++) {
        for (var j: number = 0; j < mgnhangzok.length; j++) {
            if (szoveg[i].toLowerCase() == mgnhangzok[j]) {
                mgnhangzokSzama++;
            }
        }
    }
    return mgnhangzokSzama;
}

//Decimális -> Bináris számkonvertáló
function DecimalisBinaris(decimalisSzam: number): string {
    const binarisKarakterek: string = "01";
    let binarisSzam: string = "";
    let absDecimaliSzam = Math.abs(decimalisSzam);
    while (absDecimaliSzam > 0) {
        let aktualisKarakter: number = absDecimaliSzam % 2;
        binarisSzam = binarisKarakterek[aktualisKarakter] + binarisSzam;
        absDecimaliSzam = Math.floor(absDecimaliSzam / 2);
    }
    if (decimalisSzam < 0) {
        binarisSzam = "-" + binarisSzam;
    }
    return binarisSzam;
}

//Decimális -> Oktális számkonvertáló
function DecimalisOktalis(decimalisSzam: number): string {
    const oktalisKarakterek: string = "01234567";
    let oktalisSzam: string = "";
    let absDecimaliSzam = Math.abs(decimalisSzam);
    while (absDecimaliSzam > 0) {
        let aktualisKarakter: number = absDecimaliSzam % 2;
        oktalisSzam = oktalisKarakterek[aktualisKarakter] + oktalisSzam;
        absDecimaliSzam = Math.floor(absDecimaliSzam / 2);
    }
    if (decimalisSzam < 0) {
        oktalisSzam = "-" + oktalisSzam;
    }
    return oktalisSzam;
}

//Decimális -> Hexadecimális számkonvertáló
function DecimalisHexadecimalis(decimalisSzam: number): string {
    if (decimalisSzam === 0) {
        return "00";
    }
    const hexaKarakterek: string = "0123456789ABCDEF";
    let hexadecimalisSzam: string = "";
    let absDecimalisSzam = Math.abs(decimalisSzam);
    while (absDecimalisSzam > 0) {
        let aktualisKarakter: number = absDecimalisSzam % 16;
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
function DecimalisDuodecimalis(decimalisSzam: number): string {
    const duodeciKarakterek: string = "0123456789AB";
    let duodecimalisSzam: string = "";
    let absDecimalisSzam = Math.abs(decimalisSzam);
    while (absDecimalisSzam > 0) {
        let aktualisKarakter: number = absDecimalisSzam % 12;
        duodecimalisSzam = duodeciKarakterek[aktualisKarakter] + duodecimalisSzam;
        absDecimalisSzam = Math.floor(absDecimalisSzam / 12);
    }
    if (decimalisSzam < 0) {
        duodecimalisSzam = "-" + duodecimalisSzam;
    }
    return duodecimalisSzam;
}

//RGB -> HEXA konverter
function RGBColorToHEXAConverter(r: number, g: number, b: number): string | boolean {
	if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
		return false;
	}
	const redInHexa: string = DecimalisHexadecimalis(r);
	const greenInHexa: string = DecimalisHexadecimalis(g);
	const blueInHexa: string = DecimalisHexadecimalis(b);
	const hexaColor: string = "#" + redInHexa + greenInHexa + blueInHexa;
	return hexaColor;
}

//Kocka térfogata
function KockaTerfogat(oldalHosszusag: number): number {
    return oldalHosszusag ** 3;
}

//Téglalap kerület
function TeglalapKerulet(aOldal: number, bOldal: number): number {
    let teglalapKerulet: number = 0;
    teglalapKerulet = aOldal * 2 + bOldal * 2;
    return teglalapKerulet;
}

//Téglalap terület
function TeglalapTerulet(aOldal: number, bOldal: number): number {
    let teglalapTerulet: number = 0;
    teglalapTerulet = aOldal * bOldal;
    return teglalapTerulet;
}

//Palindrom ellenőrzés
function PalindromEllenorzes(szoveg: string): boolean {
    let forditottSzoveg: string = "";
    let kisbetusSzoveg: string = szoveg.toLowerCase();
    let csakBetukSzoveg: string = "";
    for (var i:number = 0; i < kisbetusSzoveg.length; i++) {
        if (kisbetusSzoveg[i] != " " && kisbetusSzoveg[i] != "." && kisbetusSzoveg[i] != "," && kisbetusSzoveg[i] != "!" && kisbetusSzoveg[i] != "?") {
            csakBetukSzoveg += kisbetusSzoveg[i];
        }
    }
    for (var i:number = csakBetukSzoveg.length - 1; i >= 0; i--) {
        forditottSzoveg += csakBetukSzoveg[i];
    }
    return csakBetukSzoveg == forditottSzoveg;
}
