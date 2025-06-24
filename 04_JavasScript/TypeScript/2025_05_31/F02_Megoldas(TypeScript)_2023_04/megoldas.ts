function PhErtek(vizsgaltErtek: number): string {
    if (vizsgaltErtek == 7) {
        return "semleges";
    }
    else if (vizsgaltErtek < 7) {
        return "savas";
    }
    else {
        return "lugos";
    }
}

function PrimekSzama(vizsgaltTomb: number[]): number {
    let primekszama: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j: number = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekszama++;
        }
    }
    return primekszama;
}


function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    let maganhangzok: string = "aáeéiíoóöőuúüű";
    let maganhangzokSzama: number = 0;
    for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
        let szerepelE: boolean = false;
        for (let j: number = 0; j < maganhangzok.length; j++) {
            if (maganhangzok[j] == vizsgaltSzoveg[i]) {
                szerepelE = true;
            }
        }
        if (szerepelE == true) {
            maganhangzokSzama++;
        }
    }
    return maganhangzokSzama;
}