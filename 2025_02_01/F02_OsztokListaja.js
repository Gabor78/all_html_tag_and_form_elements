//Kérjetek be egy számot és próbáljátok meg meghatározni, hány osztója van!
//Osztó: maradék nélkül, osztja a számot: pl.: szam%i (ciklusváltozó)==0
//Megjelenítsd az osztókat, ha találsz egyet, de tömbbe is rakhatod :)
let osztok = 0;
let osztokTomb = [];
let a = prompt("Kérek egy számot!");
for (let i = 1; i < a; i++) {
	if (a%i == 0) {
		osztok++;
		osztokTomb.push(i);
	}
}
document.write("Az osztók száma: " + osztok + " darab<br>");
document.write("A tömb elemei: ");
for (let j = 0; j < osztokTomb.length; j++) {
    document.write(osztokTomb[j] + ", ");
}
