//Keresés érték alapján és index alapján
//MinErtek: A legkisebb elem értékét adja vissza
//MinErtek=tomb[0]  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben
//A vizsgálat az hogy találunk-e kisebbet mint a MinErtek, ha igen, módosítjuk azt

//MinIndex: A legkisebb elem tömbben elfoglalt indexét adja vissza
//MinIndex=0  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben(0. index mindig van, különben kár vizsgálni)
//A vizsgálat az hogy találunk-e kisebbet mint a MinIndex-edik helyen lévő érték (tomb[MinIndex]), ha igen, módosítjuk az indexet: i-re
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

let MinErtek = tomb[0];
for (let j = 1; j < tomb.length; j++) {
	if (MinErtek > tomb[j]) {
		MinErtek = tomb[j];
	}
}
document.write("MinErtek: " + MinErtek);