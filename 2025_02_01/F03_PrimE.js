//Mond meg egy számról, hogy prím-e?
//Prím az a szám aminek pontosan 2 osztója van, 1 és önnmaga
let osztok = 0;
let osztokTomb = [];
let a = prompt("Kérek egy számot!");
for (let i = 1; i <= a; i++) {
	if (a%i == 0) {
		osztok++;
		osztokTomb.push(i);
	}
}

document.write("A tömb elemei: ");
for (let j = 0; j < osztokTomb.length; j++) {
    document.write(osztokTomb[j] + ", ");
}
document.write("<hr>");

if (osztok == 2) {
	document.write("A(z) " + a + " PRÍM szám");
} else {
	document.write("A(z) " + a + " NEM prím szám");
}
