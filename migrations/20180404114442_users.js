

exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('organization').notNullable();
        table.string('lead_person').notNullable();
        table.string('email').notNullable().unique();
        table.string('api_token').notNullable();
        // table.specificType('password','char(60)').notNullable().unique();
        // table.string('salt',30).notNullable();
        // table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        // table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};



