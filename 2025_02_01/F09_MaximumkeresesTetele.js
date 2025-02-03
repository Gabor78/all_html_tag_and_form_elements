//Keresés érték alapján és index alapján
//MaxErtek: A legnagyobb elem értékét adja vissza
//MaxErtek=tomb[0]  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben
//A vizsgálat az hogy találunk-e nagyobb mint a MaxErtek, ha igen, módosítjuk azt

//MaxIndex: A legnagyobb elem tömbben elfoglalt indexét adja vissza
//MaxIndex=0  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben(0. index mindig van, különben kár vizsgálni)
//A vizsgálat az hogy találunk-e nagyobb mint a MaxIndex-edik helyen lévő érték (tomb[MaxIndex]), ha igen, módosítjuk az indexet: i-relet tomb = [];
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

let MaxErtek = tomb[0];
for (let i = 1; i < tomb.length; i++) {
	if (MaxErtek < tomb[i]) {
		MaxErtek = tomb[i];
	}
}
document.write("MaxErtek: " + MaxErtek);
