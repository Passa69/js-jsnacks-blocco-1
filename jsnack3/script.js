// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// ...
// 1. Chidere all'utente un numero, 10 volte => for+prompt
// 2. Salvo ogni numero in una variabile
// 3. Sommo tutti i numeri => +
// 4. Stampo la somma


let Num = "";

for (i = 0; i < 10; i++) {
    let userNum = parseInt(prompt("Inserisci un numero: "));
    Num = (userNum[i]);
}

console.log(Num);

// document.getElementById("container").innerHTML = ;