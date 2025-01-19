//Meg kell adni egy tanuló jegyét, és ki kell íratni a hozzá tartozó szorgalom szöveges értékelést!
//5 - példás
//4 - jó
//3 - változó
//2 - hanyag
//Többi esetben hibás adat
<script>
    let o = Number(prompt("Add meg az osztályzatot - megadom a szorgalom szöveges értékelését!"));
    document.write("Ez az osztályzat: <b>");
    if(o==5) document.write("példás");
    else if(o==4) document.write("jó")
    else if(o==3) document.write("változó")
    else if(o==2) document.write("hanyag")
    else document.write("egy hibás adat - nem értékelhető osztályzat");
    document.write("</b>");
</script>