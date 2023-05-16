// PROMPT DI INSERIMENTO DEL NOME UTENTE
let nome = prompt ('Qual è il tuo nome?');
console.log(nome);

//PROMPT DI INSERIMENTO DEL COGNOME UTENTE
let cognome = prompt ('Qual è il tuo cognome?');
console.log(cognome);

//PROMPT DI INSERIMENTO DEL COLORE PREFERITO DELL' UTENTE
let colore_preferito = prompt ('Ora scrivi il tuo colore preferito');
console.log(colore_preferito);

//STAMPARE A VIDEO TUTTI I DATI OTTENUTI + IL N.21 FINALE
document.getElementById("prova").innerHTML = nome  + cognome + colore_preferito + 21;
console.log(document.getElementById("prova").innerHTML);
