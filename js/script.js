//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21

// Dati
const fixedNumber = 21;

//Input
const name = prompt("Qual è il tuo nome?");
const surname = prompt("Qual è il tuo cognome?");
const color = prompt("Qual è il tuo colore preferito?");

// Elaborazione
const psw = `La tua nuova password sarà ${name}${surname}${color}${fixedNumber}`;
console.log(psw);

//Output
document.getElementById('psw').innerHTML = psw;
