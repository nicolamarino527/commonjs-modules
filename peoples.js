// 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire 
// un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione,
//  usa le tue due funzioni precedenti per costruire l’oggetto.

// Importiamo le fuzioni
const addHobbies = require('./hobbies');
const addPerson = require('./names');

// Creaiamo  la funzone
function personAndHobbies() {
   const peoples =  { ...addPerson(), ...addHobbies() };
   return peoples;
};








// Alternativa
// function personAndHobbies(){
//     const fullName = addPerson('antonio','rossi');
//     const allHobbies = addHobbies('nuotare','barca a vela','comportarsi com un delfino');
//     return {
//         fullName : fullName,
//         allHobbies : allHobbies
//     }
// }
// console.log(personAndHobbies());
