//Megjelenít, valamilyen módon, páros számokat a tömbben
//Pl kiírja, vagy egy tömbbe kiválogatja az értéküket...
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
let parosszamokTomb = [];
for (let i = 1; i < tomb.length; i++) {
	if (tomb[i] % 2 == 0) {
		parosszamok++;
		parosszamokTomb.push(tomb[i]);
	}
}
document.write("Páros számok a tömbben: " + parosszamok + " darab<hr>");
document.write("A tömb páros elemei: ");
for (let i = 0; i < parosszamokTomb.length; i++) {
    document.write(parosszamokTomb[i] + ", ");
}
