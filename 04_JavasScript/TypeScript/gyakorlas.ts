//tuple, enum, interface, class 

//tuple
var ValtozoTuple: [string, number] = ["SzoveG", 78];

let ValtozoTupleTomb: [number, number][] = [[3, 7], [4, 1], [-3, -2]];


//enum
enum ValtozoEnum {a = 1, b = "Ketto", c = false};

var ValtozoPeldanyEnum: ValtozoEnum = ValtozoEnum.c; 


//interface
interface ValamiAdat {
	adat1: string;
	adat2: number;
	adat3: boolean;
}

let ValamiObjektum: ValamiAdat = {
	adat1: "Valami String",
	adat2: 8,
	adat3: true;
}


//class
class ValamiClass {
	adat1: string = "Valami Szoveg";
	adat2: number = 0;
	
	fuggveny1(): void {
		console.log("ValamiClass fuggveny1");
	}
	
	constructor(_adat1: string, _adat2: number) {
		this.adat1 = _adat1;
		this.adat2 = _adat2;
	}
}

const ValamiObjektumValamiClassbol = new ValamiClass("ValamiObjektumValamiClassbol", 78);

ValamiObjektumValamiClassbol.fuggveny1();

//Állatkert
enum AllatFajtak {Emlős, Madár, Hüllő, Hal, Kétéltű};

interface Allat {nev: string; kor: number; tipus: AllatFajtak;}

type Koordinatak = [number, number];


class AllatkertiAllat {
	nev: string; 
	kor: number; 
	tipus: AllatFajtak;
	koordinatak: Koordinatak;
	
	constructor(_nev: string, _kor: number, _tipus: AllatFajtak, _koordinatak: Koordinatak) {
		this.nev = _nev;
		this.kor = _kor;
		this.tipus = _tipus;
		this.koordinatak = _koordinatak;
	}
	
	getInfo(): void {
        return this.nev + " (" + AllatTipus[this.tipus] + "), Kora: " + this.kor + " Koordinátái a térképen: (" + this.koordinatai[0] + "," + this.koordinatai[1] + ").";
	}
}


//Ph érték
function PhErtek(vizsgaltErtek: number): string {
	let phErtek: string = "Semleges";
	if (vizsgaltErtek < 7) {
		PhErtek = "Savas";
	}
	else if (vizsgaltErtek > 7) {
		phErtek = "Lugos";
	}
	return phErtek;
}

function PrimE(szam: number): boolean {
	let osztokSzama = 0;
	for (var i: number = 1; i <= szam; i++) {
		if (szam % i == 0) {
			osztokSzama++;
		}
	}
	return osztokSzama === 2;
}

function PrimekSzama(vizsgaltTomb: number[]): number {
	let primekSzama: number = 0;
	for (var i: number = 0; i < vizsgaltTomb.length; i++) {
		if (PrimE(vizsgaltTomb[i])) {
			primekSzama++;
		}
	}
	return primekSzama;
}

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
	let maganHangzok: string[] = ['a','á','e','é','i','í','o','ó','ö','ő','u','ú','ü','ű'];
	let maganHangzokSzama: number = 0;
	for (var i:number = 0; i < vizsgaltSzoveg.length; i++) {
		if (maganHangzok.includes(vizsgaltSzoveg[i].toLowerCase())) {
			maganHangzokSzama++;
		}
	}
	return maganHangzokSzama;
}

//Összegzés tétele
function OsszegzesTetele(vizsgaltTomb: number[]): number {
	let osszeg: number = 0;
	for (var i: number = 0; i < vizsgaltTomb.length; i++) {
		osszeg += vizsgaltTomb[i];
	}
	return osszeg;
}

//Minimum kiválasztás tétele
function MinimumKivalasztasTetele(vizsgaltTomb: number[]): number {
	let minimum: number = vizsgaltTomb[0];
	for (var i: number = 0; i < vizsgaltTomb.length; i++) {
		if (vizsgaltTomb[i] < minimum) {
			minimum = vizsgaltTomb[i];
		}
	}
	return minimum;
}