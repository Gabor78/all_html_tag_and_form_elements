function FuggvenyVisszajelzoSor(
    sorszam: number, 
    tesztNeve: string, 
    adatBe: number | string | any[] | object[], 
    elvartEredmeny: number | string | boolean | any[] | object[], 
    fuggvenyhivas: number | string | boolean | any[] | object[]
) {
    //Tábla elemek létrehozása
    var testTableBody: HTMLTableElement = document.querySelector("#testTableBody");
    var adatSor: HTMLTableRowElement = testTableBody.insertRow(-1);
    var tesztSorszamMezo: HTMLTableCellElement = adatSor.insertCell(0);
    var tesztNeveMezo: HTMLTableCellElement = adatSor.insertCell(1);
    var bemenetMezo: HTMLTableCellElement = adatSor.insertCell(2);
    var elvartEredmenyMezo: HTMLTableCellElement = adatSor.insertCell(3);
    var fuggvenyEredmenyMezo: HTMLTableCellElement = adatSor.insertCell(4);
    var visszajelzesMezo: HTMLTableCellElement = adatSor.insertCell(5);
    visszajelzesMezo.style.fontWeight = "bold";

    //Teszt paraméterek megadása és megjelenítése
    tesztSorszamMezo.innerHTML = `${sorszam}.`;
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`;
    if (Array.isArray(elvartEredmeny) && Array.isArray(fuggvenyhivas) 
        && TombOsszehasonlito(elvartEredmeny, fuggvenyhivas) || elvartEredmeny === fuggvenyhivas
    ) {
        visszajelzesMezo.innerHTML = "Success";
        visszajelzesMezo.style.backgroundColor = "lightgreen";
        visszajelzesMezo.classList.add("bg-success");
    }
    else {
        visszajelzesMezo.innerHTML = "Fail";
        visszajelzesMezo.classList.add("bg-danger");
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(
    sorszam: number, 
    tesztNeve: string, 
    adatBe: number | string | any[] | object[], 
    elvartEredmeny: number | string | any[] | object[] | boolean
) {
    var testTableBody: HTMLTableElement = document.querySelector("#testTableBody");
    var adatSor: HTMLTableRowElement = testTableBody.insertRow(-1);
    var tesztSorszamMezo: HTMLTableCellElement = adatSor.insertCell(0);
    var tesztNeveMezo: HTMLTableCellElement = adatSor.insertCell(1);
    var bemenetMezo: HTMLTableCellElement = adatSor.insertCell(2);
    var elvartEredmenyMezo: HTMLTableCellElement = adatSor.insertCell(3);
    var fuggvenyEredmenyMezo: HTMLTableCellElement = adatSor.insertCell(4);
    var visszajelzesMezo: HTMLTableCellElement = adatSor.insertCell(5);

    tesztSorszamMezo.innerHTML = `${sorszam}.`;
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
    visszajelzesMezo.style.backgroundColor = "lightcoral";
}

import { SzovegesErtekeles, MelyikANagyobb, SzamtaniSorozatE, Halmazallapotok, SzerkeszthetoHaromszog, 
    SiknegyedMeghatarozas, OsszegzesTetele, AtlagszamitasTetele, MinimumKeresesTetele, MaximumKeresesTetele, 
    HalmazokUnioja, HalmazokMetszete, HalmazokKulonbsege, Karaktermennyiseg, SzovegVisszafele, MaganhangzokSzama, 
    DecimalisBinaris, DecimalisOktalis, DecimalisHexadecimalis, DecimalisDuodecimalis, RGBColorToHEXAConverter } 
    from './gyakorlas';

type teszt = {
    tesztNeve:      string;
    adatBe:         number | string | any[] | object[];
    elvartEredmeny: number | string | boolean | any[] | object[];
    fuggvenyhivas: (...args: any[]) => any;
}

const tesztek = [
    {
        tesztNeve: "Szöveges értékelés",
        adatBe: 5,
        elvartEredmeny: "Jeles",
        fuggvenyhivas: SzovegesErtekeles
    },
    {
        tesztNeve: "Szöveges értékelés",
        adatBe: 1,
        elvartEredmeny: "Elégtelen",
        fuggvenyhivas: SzovegesErtekeles
    },
    {
        tesztNeve: "Szöveges értékelés",
        adatBe: 6,
        elvartEredmeny: "Nincs ilyen osztályzat!",
        fuggvenyhivas: SzovegesErtekeles
    },
    {
        tesztNeve: "Melyik a nagyobb?",
        adatBe: [1,2],
        elvartEredmeny: "A második szám (2) nagyobb, mint az első (1).",
        fuggvenyhivas: MelyikANagyobb
    },
    {
        tesztNeve: "Melyik a nagyobb?",
        adatBe: [2,1],
        elvartEredmeny: "Az első szám (2) nagyobb, mint a második (1).",
        fuggvenyhivas: MelyikANagyobb
    },
    {
        tesztNeve: "Melyik a nagyobb?",
        adatBe: [1,1],
        elvartEredmeny: "A két szám (1,1) egyenlő.",
        fuggvenyhivas: MelyikANagyobb
    },
    {
        tesztNeve: "Számtani sorozat-e?",
        adatBe: [123, 456, 789],
        elvartEredmeny: "A(z) 123,456,789 számok számtani sorozatot alkotnak.",
        fuggvenyhivas: SzamtaniSorozatE
    },
    {
        tesztNeve: "Számtani sorozat-e?",
        adatBe: [12, 14, 17],
        elvartEredmeny: "A(z) 12,14,17 számok NEM alkotnak számtani sorozatot.",
        fuggvenyhivas: SzamtaniSorozatE
    },
    {
        tesztNeve: "Halmazállapotok",
        adatBe: 110,
        elvartEredmeny: "Gáz (Gőz)",
        fuggvenyhivas: Halmazallapotok
    },
    {
        tesztNeve: "Halmazállapotok",
        adatBe: 10,
        elvartEredmeny: "Folyékony (Víz)",
        fuggvenyhivas: Halmazallapotok
    },
    {
        tesztNeve: "Halmazállapotok",
        adatBe: -10,
        elvartEredmeny: "Szilárd (Jég)",
        fuggvenyhivas: Halmazallapotok
    },
    {
        tesztNeve: "Szerkeszthető háromszög",
        adatBe: [10,12,8],
        elvartEredmeny: "A(z) 10,12,8 hosszúságú oldalakkal lehetséges háromszöget alkotni.",
        fuggvenyhivas: SzerkeszthetoHaromszog
    },
    {
        tesztNeve: "Szerkeszthető háromszög",
        adatBe: [10,22,8],
        elvartEredmeny: "A(z) 10,22,8 hosszúságú oldalakkal NEM lehetséges háromszöget alkotni.",
        fuggvenyhivas: SzerkeszthetoHaromszog
    },
    {
        tesztNeve: "Síknegyed meghatározása",
        adatBe: [10,10],
        elvartEredmeny: "(10,10) pont: az 1. síknegyedben található, az origótól jobbra fent.",
        fuggvenyhivas: SiknegyedMeghatarozas
    },
    {
        tesztNeve: "Síknegyed meghatározása",
        adatBe: [-10,10],
        elvartEredmeny: "(-10,10) pont: a 2. síknegyedben található, az origótól balra fent.",
        fuggvenyhivas: SiknegyedMeghatarozas
    },
    {
        tesztNeve: "Síknegyed meghatározása",
        adatBe: [-10,-10],
        elvartEredmeny: "(-10,-10) pont: a 3. síknegyedben található, az origótól balra lent.",
        fuggvenyhivas: SiknegyedMeghatarozas
    },
    {
        tesztNeve: "Síknegyed meghatározása",
        adatBe: [10,-10],
        elvartEredmeny: "(10,-10) pont: a 4. síknegyedben található, az origótól jobbra lent.",
        fuggvenyhivas: SiknegyedMeghatarozas
    },
    {
        tesztNeve: "Összegzés tétele",
        adatBe: [10,20],
        elvartEredmeny: 30,
        fuggvenyhivas: OsszegzesTetele
    },
    {
        tesztNeve: "Átlagszámítás tétele",
        adatBe: [10,20],
        elvartEredmeny: 15,
        fuggvenyhivas: AtlagszamitasTetele
    },
    {
        tesztNeve: "Minimum keresés tétele",
        adatBe: [10,20],
        elvartEredmeny: 10,
        fuggvenyhivas: MinimumKeresesTetele
    },
    {
        tesztNeve: "Maximum keresés tétele",
        adatBe: [10,20],
        elvartEredmeny: 20,
        fuggvenyhivas: MaximumKeresesTetele
    },
    {
        tesztNeve: "Halmazok uniója",
        adatBe: [[1,2,3,4], [2,3,4,5]],
        elvartEredmeny: [1,2,3,4,2,3,4,5],
        fuggvenyhivas: HalmazokUnioja
    },
    {
        tesztNeve: "Halmazok metszete",
        adatBe: [[1,2,3,4], [2,3,4,5]],
        elvartEredmeny: [2,3,4],
        fuggvenyhivas: HalmazokMetszete
    },
    {
        tesztNeve: "Halmazok különbsége",
        adatBe: [[1,2,3,4], [2,3,4,5]],
        elvartEredmeny: [1],
        fuggvenyhivas: HalmazokKulonbsege
    },
    {
        tesztNeve: "Karaktermennyiség adott karakterből",
        adatBe: ["Talpra magyar, hí' a haza", "a"],
        elvartEredmeny: 7,
        fuggvenyhivas: Karaktermennyiseg
    },
    {
        tesztNeve: "Nem minden success, ami fénylik",
        adatBe: ["Direkt hibás sor", "a"],
        elvartEredmeny: "Hibás sor példának",
        fuggvenyhivas: Karaktermennyiseg
    },
    {
        tesztNeve: "Szöveg visszafelé",
        adatBe: "Az a hideg nem engedi haza",
        elvartEredmeny: "azah idegne men gedih a zA",
        fuggvenyhivas: SzovegVisszafele
    },
    {
        tesztNeve: "Szöveg visszafelé",
        adatBe: "Keresik a tavat a kis erek",
        elvartEredmeny: "kere sik a tavat a kisereK",
        fuggvenyhivas: SzovegVisszafele
    },
    {
        tesztNeve: "Magánhangzók száma",
        adatBe: "Macskafogó",
        elvartEredmeny: 4,
        fuggvenyhivas: MaganhangzokSzama
    },
    {
        tesztNeve: "Decimális -> Bináris",
        adatBe: 10,
        elvartEredmeny: "1010",
        fuggvenyhivas: DecimalisBinaris
    },
    {
        tesztNeve: "Decimális -> Oktális",
        adatBe: 33,
        elvartEredmeny: "100001",
        fuggvenyhivas: DecimalisOktalis
    },
    {
        tesztNeve: "Decimális -> Hexadecimális",
        adatBe: 255,
        elvartEredmeny: "FF",
        fuggvenyhivas: DecimalisHexadecimalis
    },
    {
        tesztNeve: "Decimális -> Duodecimális",
        adatBe: 25,
        elvartEredmeny: "21",
        fuggvenyhivas: DecimalisDuodecimalis
    },
    {
        tesztNeve: "RGB -> HEXA",
        adatBe: [255,255,255],
        elvartEredmeny: "#FFFFFF",
        fuggvenyhivas: RGBColorToHEXAConverter
    },
    {
        tesztNeve: "RGB -> HEXA",
        adatBe: [0,15,1],
        elvartEredmeny: "#000F01",
        fuggvenyhivas: RGBColorToHEXAConverter
    }
];

function TombOsszehasonlito(aTomb: any[], bTomb: any[]): boolean {
    return Array.isArray(aTomb) && Array.isArray(bTomb) && aTomb.length === bTomb.length && aTomb.every((v, i) => v === bTomb[i]);
}

function TesztFuttato() {
    for (var i: number = 0; i < tesztek.length; i++) {
        const teszt: teszt = tesztek[i];
        try {
            let eredmeny: any;
            if (Array.isArray(teszt.adatBe) 
                && typeof teszt.fuggvenyhivas === 'function' 
                && teszt.fuggvenyhivas.length > 1 
            ) {
                eredmeny = teszt.fuggvenyhivas(...teszt.adatBe);
            } else {
                eredmeny = teszt.fuggvenyhivas(teszt.adatBe);
            }
            FuggvenyVisszajelzoSor(i, teszt.tesztNeve, JSON.stringify(teszt.adatBe), teszt.elvartEredmeny, eredmeny);
        } catch {
            HibasFuggvenyFuggvenyVisszajelzoSor(i, teszt.tesztNeve, JSON.stringify(teszt.adatBe), teszt.elvartEredmeny);
        }

    }
}

TesztFuttato();