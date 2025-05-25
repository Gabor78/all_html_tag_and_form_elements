function PhErtek(ph) {
    if (ph > 7)
        return "lugos";
    if (ph < 7)
        return "savas";
    return "semleges";
}
function primSzamE(szam) {
    if (szam < 2)
        return false;
    var osztokSzama = 0;
    for (let i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztokSzama++;
        }
    }
    return osztokSzama === 2;
}
function PrimekSzama(vizsgaltTomb) {
    var primSzamokSzama = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (primSzamE(vizsgaltTomb[i])) {
            primSzamokSzama++;
        }
    }
    return primSzamokSzama;
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    var maganHangzokSzama = 0;
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        if (maganHangzok.includes(vizsgaltSzoveg[i].toLowerCase())) {
            maganHangzokSzama++;
        }
    }
    return maganHangzokSzama;
}
function KockaTerfogat(a) {
    return Math.pow(a, 3);
}
function SzovegVisszafele(szoveg) {
    var szovegVissza = "";
    for (let i = szoveg.length - 1; i >= 0; i--) {
        szovegVissza += szoveg[i];
    }
    return szovegVissza;
}
function CegAtlagEletkor(vizsgaltObjektum) {
    var atlagEletkor = 0;
    var osszEletkor = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        osszEletkor += vizsgaltObjektum[i].kor;
    }
    return Math.round(osszEletkor / vizsgaltObjektum.length);
}
function TeglalapKerulet(aOldal, bOldal) {
    return 2 * (aOldal + bOldal);
}
function VizHalmazallapot(fok) {
    if (fok < 0)
        return "szilard";
    if (fok > 100)
        return "legnemu";
    return "folyekony";
}
function Csatlakozott2004(vizsgaltObjektum) {
    var uniohozCsatlakozok = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        var ev = Number(vizsgaltObjektum[i].csatlakozas.split(".")[0]);
        if (ev == 2004) {
            uniohozCsatlakozok++;
        }
    }
    return uniohozCsatlakozok;
}
function OsztokSzama(vizsgaltSzam) {
    var osztokSzama = 0;
    for (let i = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
            osztokSzama++;
        }
    }
    return osztokSzama;
}
function ParatlanLista(vizsgaltTomb) {
    var paratlnaSzamokTomb = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 1) {
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
function VizsgaEredmeny(nev) {
    let osszPontszam = 0;
    for (let i = 0; i < vizsgazokAdatai.length; i++) {
        if (vizsgazokAdatai[i].nev == nev) {
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
