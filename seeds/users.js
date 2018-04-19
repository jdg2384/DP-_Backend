
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        // {
        //   id: 1, 
        //   organization: 'BlueFlux',
        //   lead_person: 'Dave Rausen',
        //   email:'dave@rausen.com',
        //   api_token:'54abfdfc7f6e118414a485eeda4d643425a7de36',
        //   password: '$2a$04$viNV9cjyWyAyVmWIQiLmDOxX.SPxBHfpvnqt316p0gWi5f06C6Fte',
        //   salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO'
        // },
        // {
        //   id: 2, 
        //   organization: 'BlueFlux',
        //   lead_person: 'Joseph Grounds',
        //   email:'primemtn1@gmail.com',
        //   api_token:'54abfdfc7f6e118414a485eeda4d643425a7de36',
        //   password: '$2a$04$viNV9cjyWyAyVmWIQiLmDOxX.SPxBHfpvnqt316p0gWi5f06C6Ftr',
        //   salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDP'
        // },
      ]);
    });
};

// table.increments('id');
// table.string('organization').notNullable();
// table.string('lead_person').notNullable();
// table.string('email').notNullable().unique();
// table.specificType('password','char(60)').notNullable().unique();
// table.string('salt',30).notNullable();