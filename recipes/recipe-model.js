const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .innerJoin('ingredients as i', 'r.id', 'i.recipe_id')
        .where({ recipe_id })
        .select('i.ingredient_name as shopping list', 'i.quantity as amount')
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .innerJoin('steps as s', 'r.id', 's.recipe_id')
        .where({ recipe_id })
        .select('s.instructions as steps')
}
