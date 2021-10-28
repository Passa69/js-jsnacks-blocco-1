//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// ...
// 1. Chiedere all'utente un numero, due volte => prompt
// 2. Confrontare i due numeri e stampere il maggiore => if

const userNum1 = parseInt(prompt("Scrivi qui il primo numero: "));
// console.log(userNum1);
const userNum2 = parseInt(prompt("Scrivi qui il secondo numero: "));
// console.log(userNum2);

// confronto
if (userNum1 > userNum2) {
    console.log(userNum1);
} else if (userNum1 < userNum2) {
    console.log(userNum2);
} if (userNum1 === userNum2) {
    console.log("Sono uguali!");
}