//Készíts egy programot, amiben miután megadod a hónap nevét, kiírja melyik évszakban van!
//március, április, május - tavasz
//június, július, augusztus - nyár
//szeptember, október, novebember - ősz
//december, január, február - tél
<script>
	let honap = prompt("Add mega hónapot!");
	if (honap=="március" || honap=="április" || honap=="május") {
		document.write(`${honap} - tavasz`);
	} else if (honap=="június" || honap=="július" || honap=="augusztus") {
		document.write(`${honap} - nyár`);
	} else if (honap=="szeptember" || honap=="október" || honap=="novebember") {
		document.write(`${honap} - ősz`);
	} else if (honap=="december" || honap=="január" || honap=="február") {
		document.write(`${honap} - tél`);
	} else document.write(`${honap} - ilyen hónap nincs, úgyhogy tél :D`);
</script>