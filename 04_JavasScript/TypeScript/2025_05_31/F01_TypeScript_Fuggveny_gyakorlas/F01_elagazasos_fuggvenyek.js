//1.1 feladat
//Időjárás: szám input, szöveg output
//0 alatt: fagyos
//0-15: hűvös
//15-25: kellemes
//25 felett: meleg
function Idojaras(homerseklet) {
    if (homerseklet < 0) {
        return "fagyos";
    }
    else if (homerseklet < 15) {
        return "hűvös";
    }
    else if (homerseklet < 25) {
        return "kellemes";
    }
    else {
        return "meleg";
    }
}
//1.2 feladat
//PáratlanE feladat: szám input, logikai output
//Ha osztható 2-vel: false
//Ha nem osztható kettővel: true
function ParatlanE(vizsgaltSzam) {
    if (vizsgaltSzam % 2 == 1) {
        return true;
    }
    return false;
}
//1.3 feladat
//Szöveges értékelés szorgalom: szám input, szöveg output
//2 - hanyag
//3 - változó
//4 - jó
//5 - példás
//Egyéb - hibás adat
function Szorgalom(jegy) {
    if (jegy == 2) {
        return "hanyag";
    }
    else if (jegy == 3) {
        return "változó";
    }
    else if (jegy == 4) {
        return "jó";
    }
    else if (jegy = 5) {
        return "példás";
    }
    else {
        return "hibás adat";
    }
}
