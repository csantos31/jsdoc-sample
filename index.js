const Person = require('./models/Person.js');

let person = new Person({
    name: "John Doe",
    age: 25,
    city: "Sâo Paulo",
    uf: "SP",
    country: "Brazil",
    ability: {
        name: 'Invisibility',
        description: 'Become invisible like Harry Potter\n\t\twith the invisibility cloak'
    }
})

printPersonAndAbility(person);

/**
 * Print person's properties
 * @param {Person} person - person data 
 * @returns {void}
 */
function printPersonAndAbility(person){

    console.log(`
        *************************OUTPUT****************************
        \n\t\tHi there😁
        \tMy name is ${person.name} and`)

    person.ability.showAbility()
    console.log('\n\t*************************OUTPUT****************************\t\n')
}