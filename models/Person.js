/**
 * @typedef {import('./Ability.js').AbilityType} AbilityType
 */
const Ability = require('./Ability.js');


/**@type PersonType */
class Person {
    /**@param {PersonType} person  */
    constructor(person){
        this._name = person.name
        this._age = person.age || null
        this._city = person.city || null
        this._uf = person.uf || null
        this._country = person.country || null
        this._ability = new Ability(person.ability)
    }

    /**@param {string} newName  */
    set name(newName) {this._name = newName}

    /** @returns {string} */
    get name(){return this._name}

    /**@param {number} newAge  */
    set age(newAge) {this._age = newAge}

    /** @returns {number?} */
    get age(){return this._age}

    /**@param {string} newCity  */
    set city(newCity) {this._city = newCity}

    /** @returns {string?} */
    get city(){return this._city}

    /**@param {string} newUf  */
    set uf(newUf) {this._uf = newUf}

    /** @returns {string?} */
    get uf(){return this._uf}

    /**@param {string} newCountry  */
    set country(newCountry) {this._country = newCountry}

    /** @returns {string?} */
    get country(){return this._country}

    /** @param {Ability} ability*/
    set ability(ability) {this._ability = ability}
    
    /** @returns {Ability} */
    get ability() {return this._ability}

    showPersonAbility(){
        this._ability.showAbility();
    }
    
}

module.exports = Person;

/**
 * @typedef {Object} PersonType - Definition for Person
 * @property {string} name - Name of the person
 * @property {number?} age - Age of the person
 * @property {string?} city - City where person lives
 * @property {string?} uf - UF state where person lives
 * @property {string?} country - Country where person lives
 * @property {AbilityType} ability - Person's ability
 */