//Megadja a tömb elemeinek értéke összesen mennyi
//segítség: tombneve[index]
let tomb = [1,2,3,4,5];
let summ = 0;
for (let i = 0; i < tomb.length; i++) {
	summ += tomb[i];
}
document.write("A tömb elemeinek összértéke: ",summ);