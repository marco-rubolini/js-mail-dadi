
//Creo un array con le email autorizzate
var iscritti = ["mario.rossi@gmail.com", "mario.verdi@gmail.com", "mario.gialli@gmail.com" ];
console.log(iscritti);
//"Sono in lista?" Chiedi all'utente la sua email
var email = prompt('Inserisci la tua mail');
console.log(email);
//Controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

for (var i = 0; i < iscritti.length; i++) {
    if (iscritti[i] == email) {
        verificaMail = true;
        // console.log('Sei in lista');
        break;
    }
    else {
        verificaMail = false;
        // console.log('Non sei in lista');

    }
}
if (verificaMail) {
    console.log('Sei in lista');
} else {
    console.log('Non sei in lista');
}
