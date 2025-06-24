//F02.1 Téglalap kerület terület: 2 szám input, tuple output (ami szintén két szám)
function TeglalapKeruletTerulet(aOldal: number, bOldal: number): [number, number] {
    let kerulet = (aOldal + bOldal) * 2;
    let terulet = aOldal * bOldal;
    return [kerulet, terulet];
}


//F02.2 Víz halmazállapot: 1 szám input(fok), tuple output(fok:szám, halmazállapot:string, elnevezés: string)
//32, folyékony,víz
//-20, szilárd, jég
//120, légnemű, gőz

function VizHalmazallapot(fok: number): [number, string, string] {
    if (fok < 0) {
        return [fok, "szilárd", "jég"];
    }
    else if (fok > 100) {
        return [fok, "légnemű", "gőz"];
    }
    else {
        return [fok, "folyékony", "víz"];
    }
}