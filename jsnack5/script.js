// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array
// ...
// 1. Creo l'array vuoto
// 2. Chiedo all'utente un numero 6 volte => for + prompt
// 3. Controllo se è dispari e lo agiungo => if + push

let Num = [];

for (i = 0; i < 6; i++) {
    let userNum = parseInt(prompt("Inserisci un numero: "));
    
    if (userNum % 2 !== 0) {
        Num.push(userNum);
    }
}

console.log(Num);