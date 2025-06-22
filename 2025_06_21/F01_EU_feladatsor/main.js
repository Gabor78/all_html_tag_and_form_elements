var EuropaiUnio = [{
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
        orszag: "Egyesült Királyság",
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
//1. Hány tagja van az EU-nak?
//Adat feldolgozó
function TagokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}
//Adat kiíró
function TagokSzamaKiir(tagSzam) {
    var tagokSzamaP = document.querySelector("#tagokSzama");
    tagokSzamaP.innerHTML = "Az EU tagországok száma: " + tagSzam;
}
TagokSzamaKiir(TagokSzama(EuropaiUnio));
//2. Hány ország csatlakozott 2007-ben?
//Adat feldolgozó
function hanyOrszagCsatlakozott(orszagok) {
    var orszagokSzama = 0;
    var keresettEv = "2007";
    for (var i = 0; i < orszagok.length; i++) {
        var csatlakozasEve = orszagok[i].csatlakozas.slice(0, 4);
        if (csatlakozasEve == "2007") {
            orszagokSzama++;
        }
    }
    return orszagokSzama;
}
//Adat kiíró
function hanyOrszagCsatlakozottKiir(csatlakozokSzama) {
    var csatlakozottOrszagP = document.querySelector("#csatlakozottOrszag");
    csatlakozottOrszagP.innerHTML = "2007-ben " + csatlakozokSzama + " ország csatlakozott az EU-hoz.";
}
hanyOrszagCsatlakozottKiir(hanyOrszagCsatlakozott(EuropaiUnio));
//3. Csatlakozott-e Magyarország az európai unióhoz?
//Adat feldolgozó
function csatlakozottEMO(orszagok) {
    var csatlakozottEMOBool = false;
    for (var i = 0; i < orszagok.length; i++) {
        var csatlakozottOrszag = orszagok[i].orszag;
        if (csatlakozottOrszag == "Magyarország") {
            csatlakozottEMOBool = true;
            ;
        }
    }
    return csatlakozottEMOBool;
}
//Adat kiíró
function csatlakozottEMOKiir(csatlakozottE) {
    var csatlakozottEMOP = document.querySelector("#csatlakozottEMO");
    if (csatlakozottE) {
        csatlakozottEMOP.innerHTML = "Igen, Magyarország csatlakozott az EU-hoz.";
    }
    else {
        csatlakozottEMOP.innerHTML = "Nem, Magyarország nem csatlakozott az EU-hoz.";
    }
}
csatlakozottEMOKiir(csatlakozottEMO(EuropaiUnio));
//4. Volt-e májusban csatlakozás?
//Adat feldolgozó
function voltEXHonapbanCsatlakozas(orszagok) {
    var voltEXHonapbanCsatlakozasBoolean = false;
    var keresettHonap = "05";
    for (var i = 0; i < orszagok.length; i++) {
        var csatlakozasHonapja = orszagok[i].csatlakozas.slice(5, 7);
        if (csatlakozasHonapja == keresettHonap) {
            voltEXHonapbanCsatlakozasBoolean = true;
        }
    }
    return voltEXHonapbanCsatlakozasBoolean;
}
//Adat kiíró
function voltEXHonapbanCsatlakozasKiir(csatlakozottE) {
    var csatlakozottEMOP = document.querySelector("#majusiCsatlakozok");
    if (csatlakozottE) {
        csatlakozottEMOP.innerHTML = "Igen, volt csatlakozás májusban.";
    }
    else {
        csatlakozottEMOP.innerHTML = "Nem, nem volt csatlakozás májusban.";
    }
}
voltEXHonapbanCsatlakozasKiir(voltEXHonapbanCsatlakozas(EuropaiUnio));
//5. Melyik ország csatlakozott utoljára?
//Adat feldolgozó
function utolsoCsatlakozo(orszagok) {
    var utolsoCsatlakozoOrszag = "";
    var utolsoCsatlakozasEve = Number(orszagok[0].csatlakozas.slice(0, 4));
    for (var i = 0; i < orszagok.length; i++) {
        var csatlakozasEve = Number(orszagok[i].csatlakozas.slice(0, 4));
        if (csatlakozasEve > utolsoCsatlakozasEve) {
            utolsoCsatlakozasEve = Number(orszagok[i].csatlakozas.slice(0, 4));
            utolsoCsatlakozoOrszag = orszagok[i].orszag;
        }
    }
    return utolsoCsatlakozoOrszag;
}
//Adat kiíró
function utolsoCsatlakozoKiir(csatlakozottOrszag) {
    var utolsoCsatlakozoP = document.querySelector("#utolsoCsatlakozo");
    utolsoCsatlakozoP.innerHTML = csatlakozottOrszag + " csatlakozott utoljára az EU-hoz.";
}
utolsoCsatlakozoKiir(utolsoCsatlakozo(EuropaiUnio));
//6. Ország Statisztika, melyik évben hány ország csatlakozott?
//Adat feldolgozó
function csatlakozokSzamaEvenkent(orszagok) {
    var csatlakozokSzamaEvenkentTomb = [];
    for (var i = 0; i < orszagok.length; i++) {
        var szerepeleE = false;
        var csatlakozasEve = Number(orszagok[i].csatlakozas.slice(0, 4));
        for (var j = 0; j < csatlakozokSzamaEvenkentTomb.length; j++) {
            if (csatlakozasEve == csatlakozokSzamaEvenkentTomb[j][0]) {
                szerepeleE = true;
                csatlakozokSzamaEvenkentTomb[j][1]++;
            }
        }
        if (szerepeleE == false) {
            csatlakozokSzamaEvenkentTomb.push([csatlakozasEve, 1]);
        }
    }
    return csatlakozokSzamaEvenkentTomb;
}
//Adat kiíró
function csatlakozokSzamaEvenkentKiir(csatlakozokSzamaEvenkentTomb) {
    var orszagStatisztikaP = document.querySelector("#orszagStatisztika");
    orszagStatisztikaP.innerHTML = "<table id='statTabla' border='1'><tr><th>Évszám</th><th>Darabszám</th></tr></table>";
    for (var i = 0; i < csatlakozokSzamaEvenkentTomb.length; i++) {
        var statTabla = document.querySelector("#statTabla");
        var ujEvSor = statTabla.insertRow(statTabla.rows.length);
        var evMezo = ujEvSor.insertCell(0);
        var darabszamMezo = ujEvSor.insertCell(1);
        evMezo.innerHTML = csatlakozokSzamaEvenkentTomb[i][0].toString();
        darabszamMezo.innerHTML = csatlakozokSzamaEvenkentTomb[i][1].toString();
    }
}
csatlakozokSzamaEvenkentKiir(csatlakozokSzamaEvenkent(EuropaiUnio));
