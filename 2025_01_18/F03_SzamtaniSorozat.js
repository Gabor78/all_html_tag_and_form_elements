//Készíts egy programot, ami 3 egymást követő "megadott számról" megmondja, azok számtani sorozatot alkotnak egy
//Akkor alkotnak számtani sorozatot, ha az elemek közti különbség ugyanakkora

//Számtani (a-b==b-c):
//2,4,6
//10,20,30
<script>
    let a = Number(prompt("Add meg az első számot!"));
    let b = Number(prompt("Add meg a második számot!"));
    let c = Number(prompt("Add meg a harmadik számot!"));
    if(a-b==b-c) document.write("A három szám számtani sorozatot alkot.");
    else document.write("A három szám nem alkot számtani sorozatot.");
</script>