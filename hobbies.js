// 2 - hobbies.js
// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
//  La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
// 2. Esporta la funzione dal file.


//  aggiungiiamo la funzione che ci ritorna l oggetto degli hobbies
function addHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobby1 : hobbyOne,
        hobby2 : hobbyTwo,
        hobby3 : hobbyThree,
    }
};

// Scriviamo la costante degli hobbies
const hobbies = addHobbies('calcio','palestra','guardare le foglie che cadono');

// Mostriamo gli hobbies a schermo
console.log(hobbies);

// Esportismo la funzione

module.exports = {
    addHobbies
};