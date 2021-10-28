// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
// ...
// 1. Chiedere all'utente 2 parole => 2xprompt
// 2. Confronto la lunghezza delle due parole
// 3. Stampo quella più grande
// 4. Stampo quella più piccola


const userPar1 = prompt("Scrivi qui la prima parola da confrontare: ");
// console.log(userPar1);
const userPar2 = prompt("Scrivi qui la seconda parola da confrontare: ");
// console.log(userPar2);

// confronto
if (userPar1.length > userPar2.length) {
    // console.log(userPar1);

    document.getElementById("container").innerHTML = `${userPar1}`
    document.getElementById("container").innerHTML += `${userPar2}`

} else {
    // console.log(userPar2);

    document.getElementById("container").innerHTML = `${userPar2}`
    document.getElementById("container").innerHTML += `${userPar1}`
} 
