//Megszámol adott feltétellel rendelkező elemeket
//Ezúttal páros számokat
let tomb = [];
for (let i = 0; i < 10; i++) {
    let randomSzam = Math.round(Math.random() * 100);
    tomb.push(randomSzam);
}

document.write("A tömb elemei: ");
for (let i = 0; i < tomb.length; i++) {
    document.write(tomb[i] + ", ");
}

document.write("<hr>");

let parosszamok = 0;
for (let i = 1; i < tomb.length; i++) {
	if (tomb[i] % 2 == 0) {
		parosszamok++;
	}
}
document.write("Páros számok a tömbben: " + parosszamok + " darab");
