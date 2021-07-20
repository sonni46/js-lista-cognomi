// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var utente = prompt("scrivi il tuo cognome")

var array = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]

array.push(utente)

array.sort()

var posizione = array.indexOf(utente)

console.log(array)

console.log(posizione+=1)




