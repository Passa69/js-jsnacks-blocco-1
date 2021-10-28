// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
// ...
// 1. Chiedo all'utente il nome => prompt
// 2. Controllo i nomi sull'array => for
// 3. Se è presente l'utente glielo comunico => if


// Richiesta all'utente
const userName = prompt("Scrivi qui il tuo nome: ");
console.log(userName);

//  creazione array
const Invitati = ["luigi", "giuseppe", "mario", "antonio"];
// console.log(Invitati);

let presente = false;

for (let i = 0; i < Invitati.length; i++) {
    // console.log(Invitati[i]);
    if (userName === Invitati[i]) {
        presente = true;
    }
}

if (presente == true) {
    document.getElementById("container").innerHTML = "Sei presente sulla lista."
} else {
    document.getElementById("container").innerHTML = "NON sei presente sulla lista."
}