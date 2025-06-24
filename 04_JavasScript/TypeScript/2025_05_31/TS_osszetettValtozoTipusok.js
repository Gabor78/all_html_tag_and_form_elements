var tupleMinta;
tupleMinta = ["Békés Csaba", 65];
//Tömbként is funkcionál, de az elemei meghatárott típusúak
tupleMinta[0] = "Minta Márton";
tupleMinta[1] = 27;
console.log(tupleMinta[0]);
console.log(tupleMinta[1]);
function NegyzetKeruletTerulet(aOldal) {
    var kerulet = aOldal * 4;
    var terulet = aOldal * aOldal;
    return [kerulet, terulet];
}
var tupleTomb = [[3, 7], [4, 1], [-3, -2]];
//ENUM: Saját objektum létrehozása értékekkel
var fizetesTipusok;
(function (fizetesTipusok) {
    fizetesTipusok[fizetesTipusok["juniorFrontEnd"] = 600000] = "juniorFrontEnd";
    fizetesTipusok[fizetesTipusok["juniorBackEnd"] = 700000] = "juniorBackEnd";
    fizetesTipusok[fizetesTipusok["juniorFullstack"] = 800000] = "juniorFullstack";
    fizetesTipusok[fizetesTipusok["seniorFrontEnd"] = 1600000] = "seniorFrontEnd";
    fizetesTipusok[fizetesTipusok["seniorBackEnd"] = 1700000] = "seniorBackEnd";
    fizetesTipusok[fizetesTipusok["seniorFullstack"] = 1800000] = "seniorFullstack";
})(fizetesTipusok || (fizetesTipusok = {}));
var jozsiFizetes = fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);
var oldalSzine;
(function (oldalSzine) {
    oldalSzine["menuSzin"] = "#aaaaaa";
    oldalSzine["navBarSzin"] = "#bbbbbb";
    oldalSzine["footerSzin"] = "black";
})(oldalSzine || (oldalSzine = {}));
var ujSzin = oldalSzine.menuSzin;
console.log(ujSzin);
document.body.style.backgroundColor = oldalSzine.menuSzin;
var interfaceObjektum = {
    nev: "Fejet Lenke",
    eletkor: 21,
    aktiv: true
};
var csapatAdat = [
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
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltAdatok = feltoltendoElem[i].split(";");
        var ujCsapat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        };
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}
var adatok = ObjektumFeltolto(csapatAdat);
console.log(adatok);
