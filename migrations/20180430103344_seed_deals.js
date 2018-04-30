

exports.up = function(knex, Promise) {
    return knex.schema.createTable('seed_deals', table => {
        table.integer('id');
        table.string('title');
        table.string('org_name');
        table.string('person_name');
        table.string('person_email')
        table.string('owner_name');
        table.integer('stage_id');
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('seed_deals')
};

