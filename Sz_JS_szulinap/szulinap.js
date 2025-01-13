<script>
/*
Bekérjük a szül. dátumot és abból kiírjuk, hogy:
- Hány éves
- A két dátum között hány év, hónap és nap telt el
- Hány hónap, hét, nap, óra, napóra, perc, mp telt el a születése óta
- Születésének napja a héten
- Születésének napja az adott évben, az év x. napja
- Napok a következő születésnapjáig
- Horoszkópja
- Generációja
- Garfield-sejtés, hétfők száma az életében
1978-04-08
*/
let szuliNap = new Date(prompt("Add meg a születési dátumodat (ÉÉÉÉ-HH-NN formátumban):"));

if (isNaN(szuliNap.getTime())) {
    alert("Érvénytelen dátumformátum! Kérlek, add meg a születési dátumodat ÉÉÉÉ-HH-NN formátumban.");
    throw new Error("Érvénytelen dátumformátum.");
}

let ev = szuliNap.getFullYear();
let ho = szuliNap.getMonth() + 1;
let nap = szuliNap.getDate();
let most = new Date();
let korMillisecben = most - szuliNap;

//életkor
let eves = Math.floor(korMillisecben / (1000 * 60 * 60 * 24 * 365.25));
document.write("<b>Jelenlegi életkorod:</b> " + eves + " év<br><br>");

//eltelt idő
function mennyiTeltEl(szuliNap, most) {
    let evek = most.getFullYear() - szuliNap.getFullYear();
    let honapok = most.getMonth() - szuliNap.getMonth();
    let napok = most.getDate() - szuliNap.getDate();
    if (honapok < 0) {
        evek--;
        honapok += 12;
    }
    if (napok < 0) {
        honapok--;
        const uccsoHo = new Date(most.getFullYear(), most.getMonth(), 0);
        napok += uccsoHo.getDate();
    }
    return evek + " év, " + honapok + " hónap és " + napok + " nap";
}
document.write("<b>Eltelt idő a születésed óta:</b> " + mennyiTeltEl(szuliNap, most) + "<br><br>");

//eltelt idő summ
let elteltMp = Math.floor(korMillisecben / 1000);
let elteltPercek = Math.floor(korMillisecben / (1000 * 60));
let eleteltOrak = Math.floor(korMillisecben / (1000 * 60 * 60));
let elteltNapok = Math.floor(korMillisecben / (1000 * 60 * 60 * 24));
let elteltHetek = Math.floor(elteltNapok / 7);
let elteltHonapok = eves * 12 + (most.getMonth() - szuliNap.getMonth());
if (most.getDate() < szuliNap.getDate()) elteltHonapok--;

document.write("<b>Ami összesen (aznap 0 órától):</b><br>");
document.write("<ul><li>" + elteltHonapok + " hónap</li>");
document.write("<li> " + elteltHetek + " hét</li>");
document.write("<li> " + elteltNapok + " nap</li>");
document.write("<li>" + eleteltOrak + " óra</li>");
document.write("<li>" + elteltPercek + " perc</li>");
document.write("<li>" + elteltMp + " másodperc</li></ul>");

//születése napja a héten
const napNevek = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
document.write("<b>Születésed napja a héten:</b> " + napNevek[szuliNap.getDay()] + "<br><br>");

//az év x. napja
document.write("<b>Születésed napja az adott évben:</b> " + Math.ceil((szuliNap - new Date(szuliNap.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)) + ". nap<br><br>");

//következő születésnapig
function kovszuliNapSzamitas(szuliNap) {
    let ideiszuliNap = new Date(szuliNap);
    ideiszuliNap.setFullYear(most.getFullYear());
    if (most > ideiszuliNap) ideiszuliNap.setFullYear(most.getFullYear() + 1);
    return Math.floor((ideiszuliNap - most) / (1000 * 60 * 60 * 24));
}
document.write("<b>Napok a következő születésnapodig:</b> " + kovszuliNapSzamitas(szuliNap) + " nap<br><br>");

//horoszkóp
function miAHoroszkopja(ho, nap) {
    if ((ho == 3 && nap >= 21) || (ho == 4 && nap <= 19)) return "Kos";
    if ((ho == 4 && nap >= 20) || (ho == 5 && nap <= 20)) return "Bika";
    if ((ho == 5 && nap >= 21) || (ho == 6 && nap <= 20)) return "Ikrek";
    if ((ho == 6 && nap >= 21) || (ho == 7 && nap <= 22)) return "Rák";
    if ((ho == 7 && nap >= 23) || (ho == 8 && nap <= 22)) return "Oroszlán";
    if ((ho == 8 && nap >= 23) || (ho == 9 && nap <= 22)) return "Szűz";
    if ((ho == 9 && nap >= 23) || (ho == 10 && nap <= 22)) return "Mérleg";
    if ((ho == 10 && nap >= 23) || (ho == 11 && nap <= 21)) return "Skorpió";
    if ((ho == 11 && nap >= 22) || (ho == 12 && nap <= 21)) return "Nyilas";
    if ((ho == 12 && nap >= 22) || (ho == 1 && nap <= 19)) return "Bak";
    if ((ho == 1 && nap >= 20) || (ho == 2 && nap <= 18)) return "Vízöntő";
    if ((ho == 2 && nap >= 19) || (ho == 3 && nap <= 20)) return "Halak";
}
document.write("<b>Horoszkópod:</b> " + miAHoroszkopja(ho, nap) + "<br><br>");

//generáció
function miAGeneracioja(ev) {
    if (ev >= 1946 && ev <= 1964) return "A \"Baby Boomer\"";
    if (ev >= 1965 && ev <= 1980) return "Az \"X\"";
    if (ev >= 1981 && ev <= 1996) return "A \"Millenniumi\" (\"Y\")";
    if (ev >= 1997 && ev <= 2012) return "A \"Z\"";
    if (ev >= 2013) return "Az \"Alfa\"";
    return "Egy \"Ismeretlen\"";
}
document.write("<b>Generációd:</b> " + miAGeneracioja(ev) + " generáció tagja vagy<br><br>");

//Hétfők száma
function hetfokSzama(szuliNap, most) {
    let hetfoSzam = 0;
    let iterDatum = new Date(szuliNap);
    while (iterDatum <= most) {
        if (iterDatum.getDay() === 1) { //hétfő
            hetfoSzam++;
        }
        iterDatum.setDate(iterDatum.getDate() + 1);
    }
    return hetfoSzam;
}

document.write("Létezik egy komoly elmélet, az úgynevezett \"Garfield-sejtés\".<br>");
document.write("Az elmélet szerint: az életünknek EGY HETEDE(!) hétfő.<br>");
document.write("...és tényleg :D<br><br>");
document.write("<b>Eddig ennyi hétfő volt életedben:</b> " + hetfokSzama(szuliNap, most) + " hétfő");
</script>
