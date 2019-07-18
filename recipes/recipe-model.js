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
        .innerJoin('ingredients as i', 'r.id', 'u.recipe_id')
        .where({ recipe_id: id })
        .select('i.contents as shopping list')
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .innerJoin('steps as s', 'r.id', 's.recipe_id')
        .where({ recipe_id: id })
        .select('s.contents as steps')
}
