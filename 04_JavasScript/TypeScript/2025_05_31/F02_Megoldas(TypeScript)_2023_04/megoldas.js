function PhErtek(vizsgaltErtek) {
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
function PrimekSzama(vizsgaltTomb) {
    var primekszama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var osztokSzama = 0;
        for (var j = 1; j <= vizsgaltTomb[i]; j++) {
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
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganhangzok = "aáeéiíoóöőuúüű";
    var maganhangzokSzama = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < maganhangzok.length; j++) {
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
