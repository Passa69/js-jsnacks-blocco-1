// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
// ...
// 1. creo un array vuoto
// 2. creo una variabile per salvare i numeri
// 3. creo un ciclo in cui aggiungo i numeri => for + push

let arrNum = [];

while (arrNum.length < 50) {

     let Num = Math.floor(Math.random() * 100) - 1;

     let duplicati = false;

     for (i = 0; i < arrNum.length; i++) {
          if (Num === arrNum[i]) {
               duplicati = true;
          }
     }

     if (duplicati == false) {
          arrNum.push(Num)
     }
     
}

console.log(arrNum);