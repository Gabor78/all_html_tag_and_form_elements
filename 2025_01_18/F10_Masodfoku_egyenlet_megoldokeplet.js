<script>
	let a = prompt("Kérem az a értékét!");
	let b = prompt("Kérem a b értékét!");
	let c = prompt("Kérem a c értékét!");
	if (a==0) {
		document.write("Nem másodfokú");
	} else {
		let d=(b*b)-(4*a*c);
		if (d<0) {
			document.write("Nincs megoldás");
		} 
		else if (d==0) {
				let x1=-b/(2*a);
				document.write("Egy megoldás: "+x1);
			} 
			else {
				let x1=(-b+Math.sqrt(d))/(2*a);
				let x2=(-b-Math.sqrt(d))/(2*a);
				document.write("Két megoldás:<br>"+x1+"<br>"+x2+"<br>");
			}
	}
</script>