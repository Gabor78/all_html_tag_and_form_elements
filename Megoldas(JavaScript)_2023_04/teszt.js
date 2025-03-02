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
        FuggvenyVisszajelzoSor("Kocka térfogat", 2, 8, KockaTerfogat(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 2, 8);
    }
}
function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 3, 27, KockaTerfogat(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 3, 27);
    }
}
function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 5, 125, KockaTerfogat(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 5, 125);
    }
}
function Teszt13() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 10, 1000, KockaTerfogat(10));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 10, 1000);
    }
}
function Teszt18() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 15, 3375, KockaTerfogat(15));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 15, 3375);
    }
}



function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozásT", "Tsázomargorp a meterezS", SzovegVisszafele("Szeretem a programozásT"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozásT", "Tsázomargorp a meterezS");
    }
}
function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG", SzovegVisszafele("Géza kék az ég"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG");
    }
}
function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR", SzovegVisszafele("Répa, retek, mogyoró"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR");
    }
}
function Teszt16() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Indul a görög aludni", "indula görög a ludnI", SzovegVisszafele("Indul a görög aludni"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Indul a görög aludni", "indula görög a ludnI");
    }
}
function Teszt19() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Keresik a tavat a kis erek", "kere sik a tavat a kisereK", SzovegVisszafele("Keresik a tavat a kis erek"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Keresik a tavat a kis erek", "kere sik a tavat a kisereK");
    }
}


function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34, CegAtlagEletkor(Dolgozok));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34);
    }
}
function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Cég átlagfizetés", "Objektum", 485714, CegAtlagFizetes(Dolgozok));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Cég átlagfizetés", "Objektum", 485714);
    }
}
function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Cég összköltség", "Objektum", 3400000, CegOsszKoltseg(Dolgozok));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Cég összköltség", "Objektum", 3400000);
    }
}
function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("A cégnél ki keresi a legtöbbet", "Objektum", "Zsíros B. Ödön", Dolgozok[KiKeresiALegtobbet(Dolgozok)].nev);
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("A cégnél ki keresi a legtöbbet", "Objektum", "Zsíros B. Ödön");
    }
}
function Teszt14() {
    try {
        FuggvenyVisszajelzoSor("A cégnél mennyi a legmagasabb fizetés", "Objektum", 1200000, Dolgozok[KiKeresiALegtobbet(Dolgozok)].fizetes);
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("A cégnél mennyi a legmagasabb fizetés", "Objektum", 1200000);
    }
}
function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("A cégnél ki a legfiatalabb", "Objektum", "Fejet Lenke", Dolgozok[KiALegfiatalabb(Dolgozok)].nev);
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("A cégnél ki a legfiatalabb", "Objektum", "Fejet Lenke");
    }
}
function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("A cégnél a legfiatalabb dolgozó életkora", "Objektum", 22, Dolgozok[KiALegfiatalabb(Dolgozok)].kor);
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("A cégnél a legfiatalabb dolgozó életkora", "Objektum", 22);
    }
}
function Teszt20() {
    try {
        FuggvenyVisszajelzoSor("A cégnél a legfiatalabb dolgozó fizetése", "Objektum", 220000, Dolgozok[KiALegfiatalabb(Dolgozok)].fizetes);
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("A cégnél a legfiatalabb dolgozó fizetése", "Objektum", 220000);
    }
}
function Teszt15() {
    try {
        FuggvenyVisszajelzoSor("A cégnél ki a legidősebb", "Objektum", "Békés Csaba", Dolgozok[KiALegidosebb(Dolgozok)].nev);
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("A cégnél ki a legidősebb", "Objektum", "Békés Csaba");
    }
}
function Teszt17() {
    try {
        FuggvenyVisszajelzoSor("A cégnél a legidősebb dolgozó életkora", "Objektum", 63, Dolgozok[KiALegidosebb(Dolgozok)].kor);
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("A cégnél a legidősebb dolgozó életkora", "Objektum", 63);
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt13();
    Teszt18();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt16();
    Teszt19();
    Teszt09();
    Teszt08();
    Teszt07();
    Teszt10();
    Teszt14();
    Teszt15();
    Teszt17();
    Teszt11();
    Teszt12();
    Teszt20();
	let tbl = document.getElementById("testTable");
	let rows = tbl.getElementsByTagName("tr");
	rows[6].style.color = "#aca";
	rows[7].style.color = "#aca";
	rows[8].style.color = "#aca";
	rows[9].style.color = "#aca";
	rows[10].style.color = "#aca";
	rows[16].style.color = "#aca";
	rows[17].style.color = "#aca";
	rows[18].style.color = "#aca";
	rows[19].style.color = "#aca";
	rows[20].style.color = "#aca";
}
TesztFuttato();