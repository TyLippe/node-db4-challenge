
exports.up = function(knex) {
    return knex.schmea.createTable('recipes', tbl => {
        tbl.increments()

        tbl 
            .string('recipe_name', 128)
            .notNullable()
            .unique()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()

        tbl 
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        tbl
            .string('ingredient_name', 128)
            .notNullable()
            .unique()

        tbl
            .decimal('quantity')
    })
    .createTable('steps', tbl => {
        tbl.increments()

        tbl 
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        tbl
            .string('instructions', 128)
            .notNullable()
            .unique()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
};
