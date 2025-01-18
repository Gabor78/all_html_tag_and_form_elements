//Készíts egy programot, ami a jegy megadása után kiírja annak szöveges értékelését
//1 --> elégtelem
//2 --> elégséges
//3 --> közepes
//4 --> jó
//5 --> jeles
<script>
    let jegy = prompt("Add meg az osztályzatot!");
    else if(jegy==1) document.write("elégtelem"); //ez van a leírásban
    else if(jegy==2) document.write("Elégséges");
    else if(jegy==3) document.write("Közepes");
    else if(jegy==4) document.write("Jó");
    else if(jegy==5) document.write("Jeles");
    else document.write("Nincs ilyen osztályzat!");
</script>