/** @type AbilityType */
class Ability {
    /** @param {AbilityType} ability */
    constructor(ability){
        this._name = ability.name;
        this._description = ability.description;
    }

    /**
     * @returns {void} - Print ability name and description
     */
    showAbility(){
        console.log(`
            \tMy ability is ${this._name} what means that 
            \tI can ${this._description}`)
    }
}

module.exports = Ability;

/**
 * @typedef {Object} AbilityType - Definition for ability
 * @property {string} name - Name of the ability
 * @property {string} description - Description of the ability
 */