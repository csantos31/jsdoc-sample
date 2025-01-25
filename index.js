/**
 * @typedef {import('./models/Person.js').PersonType} PersonType
 */
import Person from './models/Person.js';

let person = new Person({
    name: "John Doe",
    age: 25,
    city: "Sâo Paulo",
    uf: "SP",
    country: "Brazil"
})


printPerson(person);

/**
 * Print the params
 * @param {PersonType} person - person data 
 * @returns {void}
 */
function printPerson(person){
    console.log(`The person name is: 
        ${person.name}`)
}