// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
// ...
// 1. creo un array vuoto
// 2. creo una variabile per salvare i numeri
// 3. creo un ciclo in cui aggiungo i numeri => for + push

let arrNum = [];
let Num = 0;

for (i = 0; i < 50; i++) {
     Num = Math.floor(Math.random() * 100) - 1;
     arrNum.push(Num)
}

console.log(arrNum);