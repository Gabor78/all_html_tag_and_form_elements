<script>
//Kérjetek be egy számot és próbáljátok meg meghatározni, hány osztója van!
//Osztó: maradék nélkül, osztja a számot: pl.: szam%i (ciklusváltozó)==0
let osztok = 0;
let a = prompt("Kérek egy számot!");
for (let i = 1; i < a; i++) {
	if (a%i == 0) {
		osztok++;
	}
}
document.write("Az osztók száma: " + osztok + " darab<br>");
</script>
