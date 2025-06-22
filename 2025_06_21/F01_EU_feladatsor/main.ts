interface EUTag {
    orszag: string;
    csatlakozas: string
}

const EuropaiUnio: EUTag[] = [{
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
function TagokSzama(vizsgaltTomb: EUTag[]): number {
    return vizsgaltTomb.length;
}

//Adat kiíró
function TagokSzamaKiir(tagSzam: number): void {
    const tagokSzamaP = document.querySelector("#tagokSzama") as HTMLParagraphElement;
    tagokSzamaP.innerHTML = "Az EU tagországok száma: " + tagSzam;
}

TagokSzamaKiir(TagokSzama(EuropaiUnio));

//2. Hány ország csatlakozott 2007-ben?
//Adat feldolgozó
function hanyOrszagCsatlakozott(orszagok: EUTag[]): number {
    let orszagokSzama: number = 0;
    let keresettEv: string = "2007";
    for (var i: number = 0; i < orszagok.length; i++) {
        let csatlakozasEve: string = orszagok[i].csatlakozas.slice(0, 4);
        if (csatlakozasEve == "2007") {
            orszagokSzama++;
        }
    }
    return orszagokSzama;
}

//Adat kiíró
function hanyOrszagCsatlakozottKiir(csatlakozokSzama: number): void {
    const csatlakozottOrszagP = document.querySelector("#csatlakozottOrszag") as HTMLParagraphElement;
    csatlakozottOrszagP.innerHTML = "2007-ben " + csatlakozokSzama + " ország csatlakozott az EU-hoz.";
}

hanyOrszagCsatlakozottKiir(hanyOrszagCsatlakozott(EuropaiUnio));

//3. Csatlakozott-e Magyarország az európai unióhoz?
//Adat feldolgozó
function csatlakozottEMO(orszagok: EUTag[]): boolean {
    let csatlakozottEMOBool: boolean = false;
    for (var i: number = 0; i < orszagok.length; i++) {
        let csatlakozottOrszag: string = orszagok[i].orszag;
        if (csatlakozottOrszag == "Magyarország") {
            csatlakozottEMOBool = true;;
        }
    }
    return csatlakozottEMOBool;
}

//Adat kiíró
function csatlakozottEMOKiir(csatlakozottE: boolean): void {
    const csatlakozottEMOP = document.querySelector("#csatlakozottEMO") as HTMLParagraphElement;
    if (csatlakozottE) {
        csatlakozottEMOP.innerHTML = "Igen, Magyarország csatlakozott az EU-hoz.";
    } else {
        csatlakozottEMOP.innerHTML = "Nem, Magyarország nem csatlakozott az EU-hoz.";
    }
}

csatlakozottEMOKiir(csatlakozottEMO(EuropaiUnio));

//4. Volt-e májusban csatlakozás?
//Adat feldolgozó
function voltEXHonapbanCsatlakozas(orszagok: EUTag[]): boolean {
    let voltEXHonapbanCsatlakozasBoolean: boolean = false;
    let keresettHonap: string = "05";
    for (var i: number = 0; i < orszagok.length; i++) {
        let csatlakozasHonapja: string = orszagok[i].csatlakozas.slice(5, 7);
        if (csatlakozasHonapja == keresettHonap) {
            voltEXHonapbanCsatlakozasBoolean = true;
        }
    }
    return voltEXHonapbanCsatlakozasBoolean;
}

//Adat kiíró
function voltEXHonapbanCsatlakozasKiir(csatlakozottE: boolean): void {
    const csatlakozottEMOP = document.querySelector("#majusiCsatlakozok") as HTMLParagraphElement;
    if (csatlakozottE) {
        csatlakozottEMOP.innerHTML = "Igen, volt csatlakozás májusban.";
    } else {
        csatlakozottEMOP.innerHTML = "Nem, nem volt csatlakozás májusban.";
    }
}

voltEXHonapbanCsatlakozasKiir(voltEXHonapbanCsatlakozas(EuropaiUnio));

//5. Melyik ország csatlakozott utoljára?
//Adat feldolgozó
function utolsoCsatlakozo(orszagok: EUTag[]): string {
    let utolsoCsatlakozoOrszag: string = "";
    let utolsoCsatlakozasEve: number = Number(orszagok[0].csatlakozas.slice(0, 4));
    for (var i: number = 0; i < orszagok.length; i++) {
        let csatlakozasEve: number = Number(orszagok[i].csatlakozas.slice(0, 4));
        if (csatlakozasEve > utolsoCsatlakozasEve) {
            utolsoCsatlakozasEve = Number(orszagok[i].csatlakozas.slice(0, 4));
            utolsoCsatlakozoOrszag = orszagok[i].orszag;
        }
    }
    return utolsoCsatlakozoOrszag;
}

//Adat kiíró
function utolsoCsatlakozoKiir(csatlakozottOrszag: string): void {
    const utolsoCsatlakozoP = document.querySelector("#utolsoCsatlakozo") as HTMLParagraphElement;
    utolsoCsatlakozoP.innerHTML = csatlakozottOrszag + " csatlakozott utoljára az EU-hoz.";
}

utolsoCsatlakozoKiir(utolsoCsatlakozo(EuropaiUnio));

//6. Ország Statisztika, melyik évben hány ország csatlakozott?
//Adat feldolgozó
function csatlakozokSzamaEvenkent(orszagok: EUTag[]): [number, number][] {
    let csatlakozokSzamaEvenkentTomb: [number, number][] = [];
    for (var i: number = 0; i < orszagok.length; i++) {
        let szerepeleE: boolean = false;
        let csatlakozasEve: number = Number(orszagok[i].csatlakozas.slice(0, 4));
        for (var j: number = 0; j < csatlakozokSzamaEvenkentTomb.length; j++) {
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
function csatlakozokSzamaEvenkentKiir(csatlakozokSzamaEvenkentTomb: [number, number][]): void {
    const orszagStatisztikaP = document.querySelector("#orszagStatisztika") as HTMLParagraphElement;
    orszagStatisztikaP.innerHTML = "<table id='statTabla' border='1'><tr><th>Évszám</th><th>Darabszám</th></tr></table>";
    for (var i: number = 0; i < csatlakozokSzamaEvenkentTomb.length; i++) {
        var statTabla = document.querySelector("#statTabla") as HTMLTableElement;
        var ujEvSor = statTabla.insertRow(statTabla.rows.length);
        var evMezo = ujEvSor.insertCell(0);
        var darabszamMezo = ujEvSor.insertCell(1);
        evMezo.innerHTML = csatlakozokSzamaEvenkentTomb[i][0].toString();
        darabszamMezo.innerHTML = csatlakozokSzamaEvenkentTomb[i][1].toString();
    }
}

csatlakozokSzamaEvenkentKiir(csatlakozokSzamaEvenkent(EuropaiUnio));