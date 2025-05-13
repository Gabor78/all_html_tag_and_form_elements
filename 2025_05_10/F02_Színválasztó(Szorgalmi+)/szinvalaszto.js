function SzinKinyero() {
    let r = document.querySelector("#redValue").innerHTML;
    let g = document.querySelector("#greenValue").innerHTML;
    let b = document.querySelector("#blueValue").innerHTML;
    let kinyertSzin = { red: r, green: g, blue: b };
    return kinyertSzin;
}

function SzinKevero(szin) {
    let setColor = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
    document.body.style.backgroundColor = setColor;
}

function SzinkodRGB(szin) {
    document.querySelector("#RGBkodMegjelenito").innerHTML = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ");<br>HEXA: " + RGBColorToHEXAConverter(szin.red, szin.green, szin.blue) + ";";
}

function LathatoBetuszin(szin) {
    if (szin.red > 125 || szin.green > 125 || szin.blue > 125) {
        document.body.style.color = "black";
        document.querySelector("#keveroFelulet").style.borderColor = "black";
    }
    else {
        document.body.style.color = "white";
        document.querySelector("#keveroFelulet").style.borderColor = "white";
    }
}

//Szorgalmi:

//Gombokhoz rendelt event függvény, próbáljátok meg paraméteresen elkészíteni
//jó
redSet.addEventListener("input", () => { RGBValueChange("red") });
greenSet.addEventListener("input", () => { RGBValueChange("green") });
blueSet.addEventListener("input", () => { RGBValueChange("blue") });

function RGBValueChange(SzinNev) {
	if (SzinNev != "red" && SzinNev != "green" && SzinNev != "blue") {
		return false;
	}
    let newValue = document.querySelector("#" + SzinNev + "Set").value;
    document.querySelector("#" + SzinNev + "Value").innerHTML = newValue;
    aktSzin = SzinKinyero();
    SzinKevero(aktSzin);
    SzinkodRGB(aktSzin);
    LathatoBetuszin(aktSzin);
}


//HEXA kód megjelenítése RGB alatt - van beépített átváltó függvény
//vagy a .toString(16) helyett:
function DecimalToHexadecimalTo255(decimalNum) {
	if (decimalNum < 0 || decimalNum > 255) {
		return false;
	}
	const hexaChars = "0123456789ABCDEF";
	const elsoChar = Math.floor(decimalNum / 16);
	const masodikChar = decimalNum % 16;
	const hexaKod = hexaChars[elsoChar] + hexaChars[masodikChar];
	return hexaKod;
}

function RGBColorToHEXAConverter(r, g, b) {
	if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
		return false;
	}
	const redInHexa = DecimalToHexadecimalTo255(r);
	const greenInHexa = DecimalToHexadecimalTo255(g);
	const blueInHexa = DecimalToHexadecimalTo255(b);
	const hexaColor = "#" + redInHexa + greenInHexa + blueInHexa;
	return hexaColor;
}

//MAZOISTÁKNAK: szöveg kifejezés megjelenítése szintén(objektumos adatokkal, nevezetes színekkel)
//aha... elég sziszifuszi munka. Inkább írnék a RGB->HSL, RGB->LAB vagy RGB->LCH konvertert