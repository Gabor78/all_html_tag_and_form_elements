kepviselokSzamaButton.addEventListener("click", kepviselokSzamaKiir);

function kepviselokSzamaKiir() {
    eredmenyKijelzo.innerHTML = "A helyhatósági választáson " + szavazatok.length + " képviselőjelölt indult.";
}

function partokOsszegyujt() {
    let partok = [];
    for (let i = 0; i < szavazatok.length; i++) {
        let partNev = szavazatok[i].part === "-" ? "Független" : szavazatok[i].part;
        if (!partok.includes(partNev)) {
            partok.push(partNev);
        }
    }
    return partok;
}

const partokTomb = partokOsszegyujt();

function partValasztoSelectFeltolt() {
    let partValasztoSelect = document.getElementById("partValasztoSelect");
    for (let i = 0; i < partokTomb.length; i++) {
        let option = document.createElement("option");
        option.text = partokTomb[i];
        option.value = partokTomb[i] === "Független" ? "-" : partokTomb[i];
        partValasztoSelect.add(option);    
    }
}

partValasztoSelectFeltolt();

partKepviselokSzamaButton.addEventListener("click", partKepviselokSzamaKiir);

function xPartKepviseloinekSzamaOsszegyujt(xPart) {
    let xPartKepviseloinekSzama = 0;
    for (let i = 0; i < szavazatok.length; i++) {
        if (szavazatok[i].part == xPart) {
            xPartKepviseloinekSzama++;
        }
    }
    return xPartKepviseloinekSzama;
}

function partKepviselokSzamaKiir() {
    let selectedPart = document.getElementById("partValasztoSelect").value;
    let selectedPartKepviselokSzama = xPartKepviseloinekSzamaOsszegyujt(selectedPart);
    if (selectedPart == "0") {
        eredmenyKijelzo.innerHTML  = "Válasszon pártot!";
    }
    else if (selectedPart == "-") {
        eredmenyKijelzo.innerHTML  = "A helyhatósági választáson " + selectedPartKepviselokSzama + " független képviselőjelölt indult.";
    }
    else {
        eredmenyKijelzo.innerHTML  = "A helyhatósági választáson a " + selectedPart + " párt színeiben " + selectedPartKepviselokSzama + " képviselőjelölt indult.";
    }
}

kepviseloInfoButton.addEventListener("click", kepviseloInfoKiir);

function kepviseloInfoKiir() {
    let kepviselojeloltVezeteknev = document.getElementById("kepviselojeloltVezeteknev").value;
    let kepviselojeloltUtonev = document.getElementById("kepviselojeloltUtonev").value;
    let keresettNev = kepviselojeloltVezeteknev + " " + kepviselojeloltUtonev;
    let vanEIlyenNevu = false;
    for (let i = 0; i < szavazatok.length; i++) {
        if (szavazatok[i].nev.trim().toLowerCase() == keresettNev.toLowerCase()) {
            eredmenyKijelzo.innerHTML = "A helyhatósági választáson " + szavazatok[i].nev.trim() + " képviselőjelölt " + szavazatok[i].szavazat + " szavazatot kapott.";
            vanEIlyenNevu = true;
        }
    }
    if (!vanEIlyenNevu) {
        eredmenyKijelzo.innerHTML = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
    }
}

szavazatokAranyaButton.addEventListener("click", szavazatokAranya);

function szavazatokAranya() {
    const szavazasraJogosultAllampolgarokSzama = 12345;
    let leadottSzavazatok = 0;
    for (let i = 0; i < szavazatok.length; i++) {
        leadottSzavazatok += szavazatok[i].szavazat;
    }
    let szavazatokSzazalek = (leadottSzavazatok / szavazasraJogosultAllampolgarokSzama) * 100;
    eredmenyKijelzo.innerHTML = "A választáson " + leadottSzavazatok + " állampolgár, a jogosultak " + szavazatokSzazalek.toFixed(2) + "%-a vett részt."
}

szavazatokMennyisegeButton.addEventListener("click", szavazatokMennyisegeTablaKirajzol);

function szavazatokMennyisegeOsszegyujt() {
    const szavazatokMennyisege = [];
    for (let i = 0; i < szavazatok.length; i++) {
        let partNev = szavazatok[i].part === "-" ? "Független" : szavazatok[i].part;
        if (szavazatokMennyisege[partNev]) {
            szavazatokMennyisege[partNev] += szavazatok[i].szavazat;
        }
        else {
            szavazatokMennyisege[partNev] = szavazatok[i].szavazat;
        }
    }
    return  szavazatokMennyisege;
}

const szavazatokMennyisegeTomb = szavazatokMennyisegeOsszegyujt();

function szavazatokMennyisegeTablaKirajzol() {
    let szavazatokMennyisegeTabla = document.createElement("table");
    szavazatokMennyisegeTabla.className = "table table-dark table-bordered table-striped mt-2";
    eredmenyKijelzo.innerHTML = "";
    eredmenyKijelzo.appendChild(szavazatokMennyisegeTabla);

    let fejlecSor = document.createElement("tr");
    szavazatokMennyisegeTabla.appendChild(fejlecSor);

    let fejlecMezo0 = document.createElement("th");
    fejlecSor.appendChild(fejlecMezo0);
    fejlecMezo0.innerHTML = "Párt";
    
    let fejlecMezo1 = document.createElement("th");
    fejlecSor.appendChild(fejlecMezo1);
    fejlecMezo1.innerHTML = "Szavazatok száma";

    for (let i = 0; i < partokTomb.length; i++) {
        let ujSor = document.createElement("tr");
        szavazatokMennyisegeTabla.appendChild(ujSor);

        let partMezo = document.createElement("td");
        ujSor.appendChild(partMezo);
        partMezo.innerHTML = partokTomb[i];

        let szavazatMezo = document.createElement("td");
        ujSor.appendChild(szavazatMezo);
        szavazatMezo.innerHTML = szavazatokMennyisegeTomb[partokTomb[i]];
    }
}

legtobbSzavazatButton.addEventListener("click", legtobbSzavazatKiir);

function maxSzavazatKeres(forrasTomb) {
    let maxSzavazat = 0;
    for (let i = 0; i < forrasTomb.length; i++) {
        if (forrasTomb[i].szavazat > maxSzavazat) {
            maxSzavazat = forrasTomb[i].szavazat;
        }
    }
    return maxSzavazat;
}

function legtobbSzavazatKiir() {
    let legtobbSzavazat = maxSzavazatKeres(szavazatok);
    eredmenyKijelzo.innerHTML = "<h3>Legtöbb (" + legtobbSzavazat + " darab) szavazatot kapott képviselőjelölt(ek): </h3>"
    for (let i = 0; i < szavazatok.length; i++) {
        if (szavazatok[i].szavazat == legtobbSzavazat) {
            let partNev = szavazatok[i].part === "-" ? "Független" : szavazatok[i].part + " párt";
            eredmenyKijelzo.innerHTML += szavazatok[i].nev.trim() + " - " + partNev + ": " + szavazatok[i].szavazat + " szavazat<br>";
        }
    }
}

nyertesekButton.addEventListener("click", nyertesekKorzetenkentTablaKirajzol);

function nyertesekKorzetenkentOsszegyujt() {
    const nyertesekKorzetenkent = [];
    for (let i = 0; i < szavazatok.length; i++) {
        let korzet = szavazatok[i].korzet;
        if (!nyertesekKorzetenkent[korzet] || nyertesekKorzetenkent[korzet].szavazat < szavazatok[i].szavazat) {
            nyertesekKorzetenkent[korzet] = {
                korzet: korzet,
                nev: szavazatok[i].nev.trim(),
                part: szavazatok[i].part,
                szavazat: szavazatok[i].szavazat
            };
        }
    }
    return nyertesekKorzetenkent;
}

const nyertesekKorzetenkentTomb = nyertesekKorzetenkentOsszegyujt();

function nyertesekKorzetenkentTablaKirajzol() {
    let nyertesekKorzetenkentTabla = document.createElement("table");
    nyertesekKorzetenkentTabla.className = "table table-dark table-bordered table-striped mt-2";
    eredmenyKijelzo.innerHTML = "";
    eredmenyKijelzo.appendChild(nyertesekKorzetenkentTabla);

    let fejlecSor = document.createElement("tr");
    nyertesekKorzetenkentTabla.appendChild(fejlecSor);

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

    for (let i = 1; i < nyertesekKorzetenkentTomb.length; i++) {
        let ujSor = document.createElement("tr");
        nyertesekKorzetenkentTabla.appendChild(ujSor);

        let korzetMezo = document.createElement("td");
        ujSor.appendChild(korzetMezo);
        korzetMezo.innerHTML = i;

        let kepviseloMezo = document.createElement("td");
        ujSor.appendChild(kepviseloMezo);
        kepviseloMezo.innerHTML = nyertesekKorzetenkentTomb[i].nev;

        let partMezo = document.createElement("td");
        ujSor.appendChild(partMezo);
        let partNev = nyertesekKorzetenkentTomb[i].part === "-" ? "Független" : nyertesekKorzetenkentTomb[i].part;
        partMezo.innerHTML = partNev;

        let szavazatMezo = document.createElement("td");
        ujSor.appendChild(szavazatMezo);
        szavazatMezo.innerHTML = nyertesekKorzetenkentTomb[i].szavazat;
    }
}