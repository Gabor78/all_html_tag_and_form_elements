//2.1 feladat
//Első 10 négyzetszám: nincs input, tömb output
//1,4,9,25 stb...
function Negyzetszamok(): number[] {
    let negyzetszamok: number[] = [];
    for (let i: number = 1; i <= 10; i++) {
        negyzetszamok.push(i * i);
    }
    return negyzetszamok;
}


//2.2 feladat:
//Prím vizsgáló: szám input, logikai output
//Ha prím: true
//Ha nem prím: false
function PrimE(vizsgaltSzam: number): boolean {
    let osztokSzama: number = 0;
    for (let i: number = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
            osztokSzama++;
        }
    }
    if (osztokSzama == 2) {
        return true;
    }
    return false;
}


//2.3 feladat:
//Mértani sorozat generátor: 3 szám típus input, tömb output
//hossz: szám típus
//kezdőérték: szám típus
//hatvány: szám típus
//2,4,8
function MertaniSorozatGenerator(hossz: number, kezdoErtek: number, hatvany: number): number[] {
    let generaltTomb: number[] = [];
    for (let i: number = 0; i < hossz; i++) {
        generaltTomb.push(kezdoErtek);
        kezdoErtek *= hatvany;
    }
    return generaltTomb;
}

console.log(MertaniSorozatGenerator(10, 2, 2));