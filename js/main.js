// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var utente = prompt("scrivi il tuo cognome")

var array = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]

var utenteFix = utente.charAt(0).toUpperCase() + utente.slice(1).toLowerCase()

array.push(utenteFix)

array.sort()

var posizione = array.indexOf(utenteFix)

posizione += 1

console.log(utenteFix)

console.log(array)

console.log(posizione)




