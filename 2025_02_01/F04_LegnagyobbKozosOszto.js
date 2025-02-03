//Kérj be két számot, és mond meg, mi a legnagyobb osztójuk
//Majd azt írasd ki a képernyőre
let a = Number(prompt("Kérem az első számot!"));
let b = Number(prompt("Kérem a második számot!"));
let lnko = 0;
for(let i = 1; i <= a && i <= b; i++){
	if(a % i == 0 && b % i == 0){
		lnko = i;
	}
}
document.write(`A(z) ${a} és a(z) ${b} legnagyobb közös osztója a(z): ${lnko}`);