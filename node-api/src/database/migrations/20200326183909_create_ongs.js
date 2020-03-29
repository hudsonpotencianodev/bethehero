exports.up = function(knex, promice) {
    return knex.schema.createTable('ongs', function(table) {
            table.string('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('whatsapp').notNullable();
            table.string('city').notNullable();
            table.string('uf').notNullable();
        })
        .catch(err => console.log(err))
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
    .catch(err => console.log(err))
};