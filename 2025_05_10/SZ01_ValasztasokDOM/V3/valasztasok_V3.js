kepviselokSzamaButton.addEventListener("click", kepviselokSzamaKiir);

function kepviselokSzamaKiir() {
    kepviselokSzamaKijelzo.innerHTML = "A helyhatósági választáson " + szavazatok.length + " képviselőjelölt indult.";
}

function partokOsszegyujt() {
    let partok = [];
    for (let i = 0; i < szavazatok.length; i++) {
        if (!partok.includes(szavazatok[i].part)) {
            partok.push(szavazatok[i].part);
        }
    }
    return partok;
}

function partValasztoSelectFeltolt() {
    let partok = partokOsszegyujt();
    for(let i = 0; i < partok.length; i++) {
        var ujOption = document.createElement("option");
        let partNev = partok[i] === "-" ? "Független" : partok[i];
        ujOption.text = partNev;
        ujOption.value = partok[i];
        partValasztoSelect.add(ujOption);
    }
}

partValasztoSelectFeltolt();

partKepviselokSzamaButton.addEventListener("click", partKepviselokSzamaKiir);

function partKepviselokSzama(xPart) {
    let partKepviselokSzama = 0;
    for (let i = 0; i < szavazatok.length; i++) {
        if (szavazatok[i].part == xPart) {
            partKepviselokSzama++;
        }
    }
    return partKepviselokSzama;
}

function partKepviselokSzamaKiir() {
    let selectedPart = partValasztoSelect.value;
    let selectedPartKepviselokSzama = partKepviselokSzama(selectedPart);
    if (selectedPart == 0) {
        partKepviselokSzamaKijelzo.innerHTML = "Válasszon pártot!";
    }
    else if (selectedPart == "-") {
        partKepviselokSzamaKijelzo.innerHTML = "A helyhatósági választáson " + selectedPartKepviselokSzama + " független képviselőjelölt indult.";
    }
    else {
        partKepviselokSzamaKijelzo.innerHTML = "A helyhatósági választáson a " + selectedPart + " párt színeiben " + selectedPartKepviselokSzama + " képviselőjelölt indult.";
    }
}

kepviseloInfoButton.addEventListener("click", kepviseloInfoKiir);

function kepviseloInfoKiir() {
    let keresettVezeteknev = kepviselojeloltVezeteknev.value;
    let keresettUtonev = kepviselojeloltUtonev.value;
    let keresettNev = keresettVezeteknev + " " + keresettUtonev;
    let nincsIlyenNev = true;
    for (let i = 0; i < szavazatok.length; i++) {
        if (szavazatok[i].nev.trim().toLowerCase() === keresettNev.trim().toLowerCase()) {
            kepviseloInfoKijelzo.innerHTML = "A választáson " + szavazatok[i].nev + " képviselőjeleölt " + szavazatok[i].szavazat  + " szavazatot kapott.";
            nincsIlyenNev = false;
        }
    }
    if (nincsIlyenNev) {
        kepviseloInfoKijelzo.innerHTML = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
    }
}

szavazatokAranyaButton.addEventListener("click", szavazatokAranyaKiir);

function szavazatokAranyaKiir() {
    let allampolgarokSzama = 12345;
    let szavazatokOsszege = 0;
    for (var i = 0; i < szavazatok.length; i++) {
        szavazatokOsszege += szavazatok[i].szavazat;
    }
    let szazalekosArany = (szavazatokOsszege / allampolgarokSzama) * 100;
    szavazatokAranyaKijelzo.innerHTML = "A választáson " + szavazatokOsszege + " állampolgár, a jogosultak " + szazalekosArany.toFixed(2) + "%-a vett részt.";
}

szavazatokMennyisegeButton.addEventListener("click", szavazatokMennyisegeKiir);

function szavazatokPartokkent() {
    let szavazatokPartokkent = [];
    for (var i = 0; i < szavazatok.length; i++) {
        let vanEIlyenPart = false;
        for (j = 0; j < szavazatokPartokkent.length; j++) {
            if (szavazatokPartokkent[j].part === szavazatok[i].part) {
                szavazatokPartokkent[j].szavazat += szavazatok[i].szavazat;
            vanEIlyenPart = true;
            }
        }
        if (!vanEIlyenPart) {
            let ujPartSzavazatok = {};
            ujPartSzavazatok.part = szavazatok[i].part;
            ujPartSzavazatok.szavazat = szavazatok[i].szavazat;
            szavazatokPartokkent.push(ujPartSzavazatok);
        }
    }
    return szavazatokPartokkent;
}

function szavazatokMennyisegeKiir() {
    let szavazatokMennyisegePartokkent = szavazatokPartokkent();
    szavazatokMennyisegeKijelzo.innerHTML = "";
    let szavazatokTabla = document.createElement("table");
    szavazatokTabla.id = "szavazatokTabla";
    szavazatokTabla.className = "table table-dark table-bordered table-striped mt-2";
    szavazatokMennyisegeKijelzo.appendChild(szavazatokTabla);

    let fejlecSor = document.createElement("tr");
    szavazatokTabla.appendChild(fejlecSor);

    let partNeveFejlec = document.createElement("th");
    fejlecSor.appendChild(partNeveFejlec);
    partNeveFejlec.innerHTML = "Párt";

    let szavazatFejlec = document.createElement("th");
    fejlecSor.appendChild(szavazatFejlec);
    szavazatFejlec.innerHTML = "Szavazat";

    for (var i = 0; i < szavazatokMennyisegePartokkent.length; i++) {
        let ujSor = document.createElement("tr");
        szavazatokTabla.appendChild(ujSor);

        let partNeveCella = document.createElement("td");
        ujSor.appendChild(partNeveCella);
        let partNev = szavazatokMennyisegePartokkent[i].part === "-" ? "Független" : szavazatokMennyisegePartokkent[i].part;
        partNeveCella.innerHTML = partNev;

        let szavazatCella = document.createElement("td");
        ujSor.appendChild(szavazatCella);
        szavazatCella.innerHTML = szavazatokMennyisegePartokkent[i].szavazat;
    }
}

legtobbSzavazatButton.addEventListener("click", legtobbSzavazatKiir);

function legtobbSzavazatKeres() {
    let legtobbSzavazat = 0;
    for (var i = 0; i < szavazatok.length; i++) {
        if (szavazatok[i].szavazat > legtobbSzavazat) {
            legtobbSzavazat = szavazatok[i].szavazat;
        }
    }
    return legtobbSzavazat;
}

function legtobbSzavazatKiir() {
    legtobbSzavazat = legtobbSzavazatKeres();
    legtobbSzavazatKijelzo.innerHTML += "<h3>Legtöbb szavazatot kapó jelöltek:</h3><br>"
    for (var i = 0; i < szavazatok.length; i++) {
        if (szavazatok[i].szavazat == legtobbSzavazat) {
            legtobbSzavazatKijelzo.innerHTML += szavazatok[i].nev + " - " + szavazatok[i].part + " párt: " + legtobbSzavazat + " szavazat<br>";
        }
    }
}

nyertesekButton.addEventListener("click", nyertesekKiir);

function nyertesekOsszegyujt() {
    let nyertesek = [];
    for (var i = 0; i < szavazatok.length; i++) {
        let vanEIlyenKorzet = false;
        for (j = 0; j < nyertesek.length; j++) {
            if (nyertesek[j].korzet === szavazatok[i].korzet) {
                vanEIlyenKorzet = true;
                if (szavazatok[i].szavazat > nyertesek[j].szavazat) {
                    nyertesek[j].korzet = szavazatok[i].korzet;
                    nyertesek[j].szavazat = szavazatok[i].szavazat;
                    nyertesek[j].nev = szavazatok[i].nev;
                    nyertesek[j].part = szavazatok[i].part;
                }
            }
        }
        if (!vanEIlyenKorzet) {
            let ujKorzetSzavazatok = {};
            ujKorzetSzavazatok.korzet = szavazatok[i].korzet;
            ujKorzetSzavazatok.szavazat = szavazatok[i].szavazat;
            ujKorzetSzavazatok.nev = szavazatok[i].nev;
            ujKorzetSzavazatok.part = szavazatok[i].part;
            nyertesek.push(ujKorzetSzavazatok);
        }
    }
    return nyertesek;
}

function nyertesekKiir() {
    let nyertesekKorzetenkent = nyertesekOsszegyujt();
    nyertesekKijelzo.innerHTML = "";
    let nyertesekTabla = document.createElement("table");
    nyertesekTabla.id = "nyertesekTabla";
    nyertesekTabla.className = "table table-dark table-bordered table-striped mt-2";
    nyertesekKijelzo.appendChild(nyertesekTabla);

    let fejlecSor = document.createElement("tr");
    nyertesekTabla.appendChild(fejlecSor);

    let fejlecMezo0 = document.createElement("th");
    fejlecSor.appendChild(fejlecMezo0);
    fejlecMezo0.innerHTML = "Körzet";
    
    let fejlecMezo1 = document.createElement("th");
    fejlecSor.appendChild(fejlecMezo1);
    fejlecMezo1.innerHTML = "Képviselőjelölt neve";

    let fejlecMezo2 = document.createElement("th");
    fejlecSor.appendChild(fejlecMezo2);
    fejlecMezo2.innerHTML = "Párt";

    let fejlecMezo3 = document.createElement("th");
    fejlecSor.appendChild(fejlecMezo3);
    fejlecMezo3.innerHTML = "Szavazatok száma";

    for (var i = 0; i < nyertesekKorzetenkent.length; i++) {
        let ujSor = document.createElement("tr");
        nyertesekTabla.appendChild(ujSor);

        let korzetMezo = document.createElement("td");
        ujSor.appendChild(korzetMezo);
        korzetMezo.innerHTML = nyertesekKorzetenkent[i].korzet;

        let kepviseloMezo = document.createElement("td");
        ujSor.appendChild(kepviseloMezo);
        kepviseloMezo.innerHTML = nyertesekKorzetenkent[i].nev;

        let partMezo = document.createElement("td");
        ujSor.appendChild(partMezo);
        let partNev = nyertesekKorzetenkent[i].part === "-" ? "Független" : nyertesekKorzetenkent[i].part;
        partMezo.innerHTML = partNev;

        let szavazatMezo = document.createElement("td");
        ujSor.appendChild(szavazatMezo);
        szavazatMezo.innerHTML = nyertesekKorzetenkent[i].szavazat;

//        nyertesekKijelzo.innerHTML += szavazatok[i].korzet + " - " + szavazatok[i].nev + " - " + szavazatok[i].part + "<br>";
    }
}