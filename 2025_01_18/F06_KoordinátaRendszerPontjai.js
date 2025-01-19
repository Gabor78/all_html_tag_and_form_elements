//Készíts el egy kooordinára rendszer pontját meghatározó feladatot.
//A feladat elkészítéshez segítségként használd a mellékelt segédanyagot.
//A feladat adja meg, adott pont érték esetén, milyen pozícióban van a pont!
<script>
    let x = Number(prompt("Add meg az X értékét!"));
    let y = Number(prompt("Add meg az Y értékét!"));
	document.write(`Ez a pont (${x},${y}) `);
	if(x==0 && y==0){
		document.write(`az Origo, a koordináta rendszer középpontja.`);
	}
	else if (x==0){
		document.write(`az Y tenfelyen helyezkedik el, ${y} egységnyire az origótól.`);
	}
	else if (y==0){
		document.write(`az X tenfelyen helyezkedik el, ${x} egységnyire az origótól.`);
	}
	else if (x>0 && y>0){
		document.write(`az 1. síknegyedben található, az origótól jobbra fent.`);
	}
	else if (x<0 && y>0){
		document.write(`az 2. síknegyedben található, az origótól balra fent.`);
	}
	else if (x<0 && y<0){
		document.write(`az 3. síknegyedben található, az origótól balra lent.`);
	}
	else if (x>0 && y<0){
		document.write(`az 4. síknegyedben található, az origótól jobbra lent.`);
	}
</script>