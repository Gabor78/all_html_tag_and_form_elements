function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 9, "lugos", PhErtek(9));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 9, "lugos");
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 7, "semleges", PhErtek(7));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 7, "semleges");
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 5.5, "savas", PhErtek(5.5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 5.5, "savas");
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [13, 7, 12, 15], 2, PrimekSzama([13, 7, 12, 15]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [13, 7, 12, 15], 2);
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [1, 5, 17, 29], 3, PrimekSzama([1, 5, 17, 29]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [1, 5, 17, 29], 3);
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [2, 3, 7, 11], 4, PrimekSzama([2, 3, 7, 11]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [2, 3, 7, 11], 4);
    }
}

function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [1, 2, 3, 14], 2, PrimekSzama([1, 2, 3, 14]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [1, 2, 3, 14], 2);
    }
}

/*
MaganHangzokSzamaTeszt("Szeretem a programozást", 8);
        MaganHangzokSzamaTeszt("Géza kék az ég", 5);
        MaganHangzokSzamaTeszt("Répa, retek, mogyoró", 7);

*/
function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Szeretem a programozást", 8, MaganHangzokSzama("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Szeretem a programozást", 8);
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Géza kék az ég", 5, MaganHangzokSzama("Géza kék az ég"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Géza kék az ég", 5);
    }
}

function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Répa, retek, mogyoró", 7, MaganHangzokSzama("Répa, retek, mogyoró"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Répa, retek, mogyoró", 7);
    }
}

function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 2, 8, KockaTerfogat(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 2, 8);
    }
}

function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 3, 27, KockaTerfogat(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 3, 27);
    }
}

function Teszt13() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 5, 125, KockaTerfogat(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 5, 125);
    }
}

function Teszt14() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozás", "sázomargorp a meterezS", SzovegVisszafele("Szeretem a programozás"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozás", "sázomargorp a meterezS");
    }
}

function Teszt15() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG", SzovegVisszafele("Géza kék az ég"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG");
    }
}

function Teszt16() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR", SzovegVisszafele("Répa, retek, mogyoró"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR");
    }
}

//Céges átlagéletkor feladat tesztje
//Vizsgált objektum:
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];

function Teszt17() {
    try {
        FuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34, CegAtlagEletkor(Dolgozok));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34);
    }
}

//Európai unió csatlakozói feladat tesztje

//Vizsgált objektum:
const europaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
];

function Teszt18() {
    try {
        FuggvenyVisszajelzoSor("EU csatlakozás", "Objektum", 10, Csatlakozott2004(europaiUnio));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("EU csatlakozás", "Objektum", 10);
    }
}

function Teszt19() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", -20, "szilard", VizHalmazallapot(-20));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", -20, "szilard");
    }
}
function Teszt20() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", 42, "folyekony", VizHalmazallapot(42));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", 42, "folyekony");
    }
}
function Teszt21() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", 120, "legnemu", VizHalmazallapot(120));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", 120, "legnemu");
    }
}

function Teszt22() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "3 és 5", 16, TeglalapKerulet(3, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "3 és 5", 16);
    }
}

function Teszt23() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "10 és 12", 44, TeglalapKerulet(10, 12));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "10 és 12", 44);
    }
}

function Teszt24() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "2 és 5", 14, TeglalapKerulet(2, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "2 és 5", 14);
    }
}

function Teszt25() {
    try {
        FuggvenyVisszajelzoSor("Osztók száma feladat", 4, 3, OsztokSzama(4));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Osztók száma feladat", 4, 3);
    }
}

function Teszt26() {
    try {
        FuggvenyVisszajelzoSor("Osztók száma feladat", 6, 4, OsztokSzama(6));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Osztók száma feladat", 6, 4);
    }
}

function Teszt27() {
    try {
        FuggvenyVisszajelzoSor("Osztók száma feladat", 12, 6, OsztokSzama(12));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Osztók száma feladat", 12, 6);
    }
}

function Teszt28() {
    try {
        FuggvenyVisszajelzoSor("Páratlanok listája", [4, 6, 3, 5], "3,5", ParatlanLista([4, 6, 3, 5]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páratlanok listája", [4, 6, 3, 5], "3,5");
    }
}

function Teszt29() {
    try {
        FuggvenyVisszajelzoSor("Páratlanok listája", [1, 2, 3, 4, 5], "1,3,5", ParatlanLista([1, 2, 3, 4, 5]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páratlanok listája", [1, 2, 3, 4, 5], "1,3,5");
    }
}

function Teszt30() {
    try {
        FuggvenyVisszajelzoSor("Páratlanok listája", [42, 21, 69, 33, 66], "21,69,33", ParatlanLista([42, 21, 69, 33, 66]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páratlanok listája", [42, 21, 69, 33, 66], "21,69,33");
    }
}

function Teszt31() {
    try {
        FuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Meg Győző", 100, VizsgaEredmeny("Meg Győző"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Meg Győző", 100);
    }
}

function Teszt32() {
    try {
        FuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Akciós Áron", 60, VizsgaEredmeny("Akciós Áron"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Akciós Áron", 60);
    }
}

function Teszt33() {
    try {
        FuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Eszet Lenke", 30, VizsgaEredmeny("Eszet Lenke"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Eszet Lenke", 30);
    }
}

function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
    Teszt10();
    Teszt11();
    Teszt12();
    Teszt13();
    Teszt14();
    Teszt15();
    Teszt16();
    Teszt17();
    Teszt18();
    Teszt19();
    Teszt20();
    Teszt21();
    Teszt22();
    Teszt23();
    Teszt24();
    Teszt25();
    Teszt26();
    Teszt27();
    Teszt28();
    Teszt29();
    Teszt30();
    Teszt31();
    Teszt32();
    Teszt33();
}
TesztFuttato();
