//Megadja a tömb elemeinek értéke átlagosan mennyi
//segítség: ugyanaz lesz mint az összegzés tétel
//segítség 2: el kell osztani az elemek számával - tombneve.length
let tomb = [1,2,3,4,5];
let summ = 0;
for (let i = 0; i < tomb.length; i++) {
	summ += tomb[i];
}
let atlag = summ / tomb.length;
document.write("A tömb elemeinek átlaga: ",atlag);