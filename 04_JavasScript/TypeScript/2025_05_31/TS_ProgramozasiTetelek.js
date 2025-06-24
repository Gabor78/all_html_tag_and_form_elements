function TombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        var generaltRandomszam = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
        generaltTomb.push(generaltRandomszam);
    }
    return generaltTomb;
}
var tomb = TombGenerator(20, 1, 10);
console.log(tomb);
//Összegzés tétele
function OsszegzesTetele_Fuggveny(vizsgalt_tomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i]; //osszeg+=vizsgalt_tomb[i];
    }
    return osszeg;
}
function AtlagSzamitasTetele_Fuggveny(vizsgalt_tomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i]; //osszeg+=vizsgalt_tomb[i];
    }
    return osszeg / vizsgalt_tomb.length; //Ettőlt áltagszámítás az átlagszámítás
}
//Összegzés és Átlagszámítás tétele 2in1
function OsszegzesEsAtlagszamitasTetele(vizsgalt_tomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i]; //osszeg+=vizsgalt_tomb[i];
    }
    return [osszeg, osszeg / vizsgalt_tomb.length];
}
var OsszegEsAtlag = OsszegzesEsAtlagszamitasTetele(tomb);
console.log("A generált tömb elemeinek összege:", OsszegEsAtlag[0]);
console.log("A generált tömb elemeinek átlaga:", OsszegEsAtlag[1]);
function MinimumKivatasztasERTEK_Tetele_Fuggveny(vizsgalt_tomb) {
    var minErtek = vizsgalt_tomb[0];
    for (var i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < minErtek) {
            minErtek = vizsgalt_tomb[i];
        }
    }
    return minErtek;
}
function MinimumKivatasztasINDEX_Tetele_Fuggveny(vizsgalt_tomb) {
    var minIndex = 0;
    for (var i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < vizsgalt_tomb[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
function MaximumKivatasztasERTEK_Tetele_Fuggveny(vizsgalt_tomb) {
    var maxErtek = vizsgalt_tomb[0];
    for (var i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > maxErtek) {
            maxErtek = vizsgalt_tomb[i];
        }
    }
    return maxErtek;
}
function MaximumKivatasztasINDEX_Tetele_Fuggveny(vizsgalt_tomb) {
    var maxIndex = 0;
    for (var i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > vizsgalt_tomb[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
function MinimumErtekOsszesInfo_Fuggveny(vizsgalt_tomb) {
    var minIndex = 0;
    var minErtekHelyek = [];
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < vizsgalt_tomb[minIndex]) {
            minIndex = i;
            minErtekHelyek = [i];
        }
        else if (vizsgalt_tomb[i] == vizsgalt_tomb[minIndex]) {
            minErtekHelyek.push(i);
        }
        else { }
    }
    return [vizsgalt_tomb[minIndex], minErtekHelyek]; //[Legkisebb elem értékje, legkisebb értékű elemek helye]
}
var minAdatok = MinimumErtekOsszesInfo_Fuggveny(tomb);
console.log("A legkisebb elem értéke a generált tömbben:" + minAdatok[0]);
console.log("A legkisebb elem előfordulásának indexei a tömbben:" + minAdatok[1]);
function MaximumErtekOsszesInfo_Fuggveny(vizsgalt_tomb) {
    var maxIndex = 0;
    var maxErtekHelyek = [];
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > vizsgalt_tomb[maxIndex]) {
            maxIndex = i;
            maxErtekHelyek = [i];
        }
        else if (vizsgalt_tomb[i] == vizsgalt_tomb[maxIndex]) {
            maxErtekHelyek.push(i);
        }
        else { }
    }
    return [vizsgalt_tomb[maxIndex], maxErtekHelyek]; //[Legkisebb elem értékje, legkisebb értékű elemek helye]
}
var maxAdatok = MaximumErtekOsszesInfo_Fuggveny(tomb);
console.log("A legkisebb elem értéke a generált tömbben:" + maxAdatok[0]);
console.log("A legkisebb elem előfordulásának indexei a tömbben:" + maxAdatok[1]);
function MegszamlalasTetele_Fuggveny(vizsgalt_tomb) {
    var darab = 0;
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            darab++; //darab=darab+1; vagy darab+=1;
        }
    }
    return darab;
}
function KivalogatasTetele_Fuggveny(vizsgalt_tomb) {
    var kivalogatottak = [];
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            kivalogatottak.push(vizsgalt_tomb[i]);
        }
    }
    return kivalogatottak;
}
function MegszamlalasEsKivalogatasTetele_Fuggveny(vizsgalt_tomb) {
    var kivalogatottak = [];
    for (var i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            kivalogatottak.push(vizsgalt_tomb[i]);
        }
    }
    return [kivalogatottak.length, kivalogatottak];
}
var parosakListaja = MegszamlalasEsKivalogatasTetele_Fuggveny(tomb);
console.log("A páros elemek száma a tömbben:" + parosakListaja[0]);
console.log("A páros elemek listája a tömbben:" + parosakListaja[1]);
//EXTRA:
//Prím számok megszámlálása és kiválogatása(TUPLE)
function PrimE(vizsgaltSzam) {
    var oszto = 0;
    for (var i = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        return true;
    }
    return false;
}
function SzerepelE(vizsgaltTomb, vizsgaltSzam) {
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] == vizsgaltSzam) {
            return true;
        }
    }
    return false;
}
function MegszamlalasEsKivalogatasTetele_PRIM_Fuggveny(vizsgaltTomb) {
    var primekTombje = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (PrimE(vizsgaltTomb[i]) == true && SzerepelE(primekTombje, vizsgaltTomb[i]) == false) {
            primekTombje.push(vizsgaltTomb[i]);
        }
    }
    return [primekTombje.length, primekTombje];
}
var primekListaja = MegszamlalasEsKivalogatasTetele_PRIM_Fuggveny(tomb);
console.log("A prímek száma a generált tömbben:" + primekListaja[0]);
console.log("A prímek listája a generált tömbben:" + primekListaja[1]);
