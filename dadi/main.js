// //chiedi un numero all'utente tra 1 e 6 (giocata human)

var numeriValidi = ['1', '2', '3', '4', '5', '6'];
var numeroUtente = prompt("Scegli un numero tra 1 e 6");
var verificaValidi = numeriValidi.includes(numeroUtente);

if (verificaValidi) {
    console.log("Numero valido");
    console.log(numeroUtente);
    //estrai un numero casuale tra 1 e 6 (giocata PC).
    var numeroPc = Math.floor(Math.random() * 6) + 1;
    console.log(numeroPc);
    // //Chi fa il numero più alto vince!
    if (numeroUtente > numeroPc) {
        console.log("Il vincitore è il giocatore");
    } else if (numeroUtente < numeroPc) {
        console.log("Il vincitore è il pc");
    }
    else {
        console.log("Nessun vincitore");
    }
    // Numero non valido 
} else {
    console.log("Numero non valido");
}




// // var numeroUtente = prompt("Scegli un numero tra 1 e 6");
// console.log(numeroUtente);
// //estrai un numero casuale tra 1 e 6 (giocata PC).
// var numeroPc = Math.floor(Math.random() * 6) + 1;
// console.log(numeroPc);
// //Chi fa il numero più alto vince!
// if (numeroUtente > numeroPc) {
//     console.log("Il vincitore è il giocatore");
// } else if (numeroUtente < numeroPc) {
//     console.log("Il vincitore è il pc");
// }
// else {
//     console.log("Nessun vincitore");
// }
