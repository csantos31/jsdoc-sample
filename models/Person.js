/**@type PersonType */
class Person {
    /**@param {PersonType} person  */
    constructor(person){
        this._name = person.name
        this._age = person.age || null
        this._city = person.city || null
        this._uf = person.uf || null
        this._country = person.country || null
    }

    /**@param {string} newName  */
    set name(newName){
        this._name = newName
    }

    /** @returns {string} */
    get name(){
        return this._name
    }
}
export default Person;

/**
 * @typedef {Object} PersonType - Definition for Person
 * @property {string} name - Name of the person
 * @property {number} [age] - Age of the person
 * @property {string} [city] - City where person lives
 * @property {string} [uf] - UF state where person lives
 * @property {string} [country] - country where person lives
 */