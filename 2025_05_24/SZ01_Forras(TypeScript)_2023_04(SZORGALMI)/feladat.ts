function PhErtek(ph: number): string {
	if (ph > 7) return "lugos";
	if (ph < 7) return "savas";
	return "semleges";
}

function primSzamE(szam: number): boolean {
    if (szam < 2) return false;
    var osztokSzama: number = 0;
	for (let i = 1; i <= szam; i++) {
		if (szam % i == 0) {
			osztokSzama++;
		}
	}
	return osztokSzama === 2;
}

function PrimekSzama(vizsgaltTomb: number[]): number {
	var primSzamokSzama: number = 0;
	for (let i = 0; i < vizsgaltTomb.length; i++) {
		if (primSzamE(vizsgaltTomb[i])) {
			primSzamokSzama++;
		}
	}
	return primSzamokSzama;
}

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    var maganHangzok: string[] = ["a","á","e","é","i","í","o","ó","ö","ő","u","ú","ü","ű"];
	var maganHangzokSzama: number = 0;
	for (let i = 0; i < vizsgaltSzoveg.length; i++) {
		if (maganHangzok.includes(vizsgaltSzoveg[i].toLowerCase())) {
			maganHangzokSzama++;
		}
	}
	return maganHangzokSzama;
}

function KockaTerfogat(a: number): number {
	return a ** 3;
}

function SzovegVisszafele(szoveg: string): string {
	var szovegVissza = "";
	for (let i = szoveg.length - 1; i >= 0; i--) {
		szovegVissza += szoveg[i];
	}
	return szovegVissza;
}

type Dolgozo = {
	nev: string;
	kor: number;
    fizetes: number;
    beosztas: string;
};

function CegAtlagEletkor(vizsgaltObjektum: Dolgozo[]): number {
	var atlagEletkor: number = 0;
	var osszEletkor: number = 0;
	for (let i = 0; i < vizsgaltObjektum.length; i++) {
		osszEletkor += vizsgaltObjektum[i].kor;
	}
	return Math.round(osszEletkor / vizsgaltObjektum.length);
}

function TeglalapKerulet(aOldal: number, bOldal: number): number {
	return 2 * (aOldal + bOldal);
}

function VizHalmazallapot(fok: number): string {
	if (fok < 0) 	return "szilard";
	if (fok > 100) 	return "legnemu";
	return "folyekony";
}

type Orszag = {
    orszag: string,
    csatlakozas: string
}

function Csatlakozott2004(vizsgaltObjektum: Orszag[]): number {
	var uniohozCsatlakozok = 0;
	for(let i = 0; i < vizsgaltObjektum.length; i++) {
		var ev: number = Number(vizsgaltObjektum[i].csatlakozas.split(".")[0]);
		if(ev == 2004) {
			uniohozCsatlakozok++;
		}
	}
	return uniohozCsatlakozok;
}

function OsztokSzama(vizsgaltSzam: number): number {
	var osztokSzama = 0;
	for (let i = 1; i <= vizsgaltSzam; i++) {
		if (vizsgaltSzam % i == 0){
			osztokSzama++;
		}
	}
	return osztokSzama;
}

function ParatlanLista(vizsgaltTomb: number[]): number[] {
	var paratlnaSzamokTomb: number[] = [];
	for (let i = 0; i < vizsgaltTomb.length; i++){
		if (vizsgaltTomb[i] % 2 == 1){
			paratlnaSzamokTomb.push(vizsgaltTomb[i]);
		}
	}
	return paratlnaSzamokTomb;
}

const vizsgazokAdatai = [
	{
		nev: "Koaxk Ábel",
		htmlVizsgaresz: 15,
		bootstrapVizsgaresz: 15,
		javaScriptVizsgaresz: 20,
		typeScriptVizsgaresz: 15,
		angularVizsgaresz: 10,
		serverVizsgaresz: 15
	},
	{
		nev: "Meg Győző",
		htmlVizsgaresz: 15,
		bootstrapVizsgaresz: 15,
		javaScriptVizsgaresz: 20,
		typeScriptVizsgaresz: 20,
		angularVizsgaresz: 15,
		serverVizsgaresz: 15
	},
	{
		nev: "Fejet Lenke",
		htmlVizsgaresz: 15,
		bootstrapVizsgaresz: 15,
		javaScriptVizsgaresz: 5,
		typeScriptVizsgaresz: 5,
		angularVizsgaresz: 5,
		serverVizsgaresz: 5
	},
	{
		nev: "Vak Cina",
		htmlVizsgaresz: 15,
		bootstrapVizsgaresz: 15,
		javaScriptVizsgaresz: 20,
		typeScriptVizsgaresz: 20,
		angularVizsgaresz: 10,
		serverVizsgaresz: 10
	},
	{
		nev: "Akciós Áron",
		htmlVizsgaresz: 10,
		bootstrapVizsgaresz: 10,
		javaScriptVizsgaresz: 10,
		typeScriptVizsgaresz: 10,
		angularVizsgaresz: 10,
		serverVizsgaresz: 10
	},
	{
		nev: "Boro Zoltán",
		htmlVizsgaresz: 15,
		bootstrapVizsgaresz: 15,
		javaScriptVizsgaresz: 15,
		typeScriptVizsgaresz: 15,
		angularVizsgaresz: 10,
		serverVizsgaresz: 10
	},
	{
		nev: "Eszet Lenke",
		htmlVizsgaresz: 5,
		bootstrapVizsgaresz: 5,
		javaScriptVizsgaresz: 5,
		typeScriptVizsgaresz: 5,
		angularVizsgaresz: 5,
		serverVizsgaresz: 5
	},
	{
		nev: "Békés Csaba",
		htmlVizsgaresz: 15,
		bootstrapVizsgaresz: 15,
		javaScriptVizsgaresz: 20,
		typeScriptVizsgaresz: 20,
		angularVizsgaresz: 15,
		serverVizsgaresz: 15
	},
];

function VizsgaEredmeny(nev: string): number {
	let osszPontszam = 0;
	for (let i = 0; i < vizsgazokAdatai.length; i++){
		if (vizsgazokAdatai[i].nev == nev){
			osszPontszam += vizsgazokAdatai[i].htmlVizsgaresz;
			osszPontszam += vizsgazokAdatai[i].bootstrapVizsgaresz;
			osszPontszam += vizsgazokAdatai[i].javaScriptVizsgaresz;
			osszPontszam += vizsgazokAdatai[i].typeScriptVizsgaresz;
			osszPontszam += vizsgazokAdatai[i].angularVizsgaresz;
			osszPontszam += vizsgazokAdatai[i].serverVizsgaresz;
		}
	}
	return osszPontszam;
}