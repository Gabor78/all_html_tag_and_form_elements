//1. feladat
//Horváth Gábor
//Team15
//HTML: 90
//CSS: 90
//JS: 90

function keszitoAdatai() {
	document.write("Horváth Gábor<br>");
	document.write("Team15<br>");
	document.write("HTML: 90<br>");
	document.write("CSS: 90<br>");
	document.write("JS: 90<br><br>");
}
keszitoAdatai();

//2. feladat
function hatvanyozz() {
	let a = Number(prompt("Kérek egy számot!"));
	let b = Number(prompt("Kérem a hatványozás mértékét!"));
	let c = a**b;
	document.write(`${a} a ${b}. hatványon (${a}^${b}) = ` + c + "<br><br>");
}
hatvanyozz();

//3. feladat
function parosSzamHatarokKozott() {
	let alsoHatar = Number(prompt("Kérem az intervallum alsó határát!"));
	let felsoHatar = Number(prompt("Kérem az intervallum felső határát!"));
	let randomSzam = Math.round(Math.random() * (felsoHatar-alsoHatar))+ alsoHatar;
	let d;
	if (randomSzam % 2 == 0) {
		d = randomSzam;
	} else {
		d = randomSzam + 1;
	}
	document.write(`[${alsoHatar},${felsoHatar}] intervallumban páros szám: ` + d + "<br><br>");
}
parosSzamHatarokKozott();

//4. feladat
function eletkorBesorolas() {
	let kor = Number(prompt("Kérek egy életkort 1-120 között!"));
	document.write("A megadott életkor: " + kor + "<br>");
	if (kor >= 0 && kor < 6) {
		document.write("Kisgyermekkor");
	} else if (kor >= 6 && kor <= 12) {
		document.write("Gyermekkor");
	} else if (kor >= 12 && kor <= 16) {
		document.write("Serdülőkor");
	} else if (kor >= 16 && kor <= 20) {
		document.write("Ifjúkor");
	} else if (kor >= 20 && kor <= 30) {
		document.write("Fiatal felnőtt kor");
	} else if (kor >= 30 && kor <= 60) {
		document.write("Felnőtt kor");
	} else if (kor >= 60 && kor <= 120) {
		document.write("Aggkor");
	} else {
		document.write("Kértem, hogy 1 és 120 közötti számot írj be, ugye? Nem sikerült...");
	}
	document.write("<br><br>");
}
eletkorBesorolas();

//5. feladat
function osztoE() {
	let e = Number(prompt("Kérek egy számot!"));
	let f = Number(prompt("Kérem az osztót!"));
	if (e % f == 0) {
		document.write(`${f} osztja ${e}-t maradék nélkül` + "<br><br>");
	} else {
		document.write(`${f} NEM osztja ${e}-t maradék nélkül` + "<br><br>");
	}
}
osztoE();

//6. feladat
function negyzetszamok() {
	document.write("Az első 10 négyzetszám: ");
	for (g = 1; g < 11; g++) {
		h = g * g;
		document.write(h);
		if (g < 10) {
			document.write(", ");
		}
	}
}
negyzetszamok();