var tupleMinta: [string, number];
tupleMinta = ["Békés Csaba", 65];

//Tömbként is funkcionál, de az elemei meghatárott típusúak
tupleMinta[0] = "Minta Márton";
tupleMinta[1] = 27;

console.log(tupleMinta[0]);
console.log(tupleMinta[1]);

function NegyzetKeruletTerulet(aOldal: number): [number, number] {
    let kerulet = aOldal * 4;
    let terulet = aOldal * aOldal;
    return [kerulet, terulet]
}

let tupleTomb: [number, number][] = [[3, 7], [4, 1], [-3, -2]];

//ENUM: Saját objektum létrehozása értékekkel
enum fizetesTipusok {
    juniorFrontEnd = 600000,
    juniorBackEnd = 700000,
    juniorFullstack = 800000,
    seniorFrontEnd = 1600000,
    seniorBackEnd = 1700000,
    seniorFullstack = 1800000,
}
var jozsiFizetes: fizetesTipusok = fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);


enum oldalSzine {
    menuSzin = "#aaaaaa",
    navBarSzin = "#bbbbbb",
    footerSzin = "black"
}
let ujSzin: oldalSzine = oldalSzine.menuSzin;
console.log(ujSzin);
document.body.style.backgroundColor = oldalSzine.menuSzin;

//INTERFACE: Saját objektum adatszerkezet szabályának létrehozása
interface Dolgozo {
    nev: string;
    eletkor: number;
    aktiv: boolean;
}

let interfaceObjektum: Dolgozo = {
    nev: "Fejet Lenke",
    eletkor: 21,
    aktiv: true
}

//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

interface FifaAdat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number;
}

const csapatAdat: string[] = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];


function ObjektumFeltolto(feltoltendoElem: string[]): FifaAdat[] {
    let beolvasottAdatok: FifaAdat[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok = feltoltendoElem[i].split(";");
        let ujCsapat: FifaAdat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        }
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}

var adatok = ObjektumFeltolto(csapatAdat);
console.log(adatok);