//Készíts egy programot, ami adott hőmérsékletet beolvasva, megadja, azon a fokon, a víz milyen halmazállapotban van
//0 C° alatt szilárd(jég)
//0-100 C° között folyékony(víz)
//100 C° felett légnemű(gőz)
<script>
    let celsius = Number(prompt("Mennyit mutat a hőmérő?"));
    if(celsius>=100) document.write("gőz")
    else if(celsius>=0) document.write("víz")
    else document.write("jég");
</script>