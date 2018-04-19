
exports.up = function(knex, Promise) {
    return knex.schema.createTable('deals', table => {
        table.increments('id');
        table.integer('pipedrive_id');
        table.string('application');
        table.string('product_name');
        table.string('cellular_tech');
        table.string('cellular_bands');
        table.boolean('size_viable');
        table.string('org_name');
        table.string('lead_person');
        table.string('lead_email');
        table.boolean('org_person_email');
        table.boolean('mnda_started');
        table.boolean('mnda_archived');
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('deals')
};
