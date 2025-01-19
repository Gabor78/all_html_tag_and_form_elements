//Dönts el, 3 megadott oldal mérete alapján az általuk szerkeszthető háromszög szerkeszhető-e
//Akkor szerkeszhető, ha BÁRMELYIK 2 oldal összege, nagyobb mint a harmadiké!
<script>
    let a = Number(prompt("Add meg az első oldal hosszát!"));
    let b = Number(prompt("Add meg a második oldal hosszát!"));
    let c = Number(prompt("Add meg a harmadik oldal hosszát"));
    if(a+b>c && a+c>b && b+c>a) document.write("szerkeszthető háromszög")
    else document.write("NEM szerkeszthető háromszög");
</script>