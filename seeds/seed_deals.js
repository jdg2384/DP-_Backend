
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('seed_deals').del()
    .then(function () {
      // Inserts seed entries
      return knex('seed_deals').insert([
        {
          //id: 1, 
          id: 1234,
          title: "Project title 1234",
          org_name:'Organization name 1234',
          person_name:'Person 1234 Name',
          person_email:'1234@1234.com',
          owner_name:'Owner 1234 Name',
          stage_id:2
        },
        {
          //id: 2, 
          id: 5678,
          title: "Project title 5678",
          org_name:'Organization name 5678',
          person_name:'Person 5678 Name',
          person_email:'5678@5678.com',
          owner_name:'Owner 5678 Name',
          stage_id:3
        },
        {
          //id: 3, 
          id: 6789,
          title: "Project title 6789",
          org_name:'Organization name 6789',
          person_name:'Person 6789 Name',
          person_email:'6789@6789.com',
          owner_name:'Owner 6789 Name',
          stage_id:2
        },
        {
          //id: 4, 
          id: 2345,
          title: "Project title 2345",
          org_name:'Organization name 2345',
          person_name:'Person2345 Name',
          person_email:'2345@2345.com',
          owner_name:'Owner2345 Name',
          stage_id:4
        },
        {
          //id: 5, 
          id: 3456,
          title: "Project title 3456",
          org_name:'Organization name 3456',
          person_name:'Person3456 Name',
          person_email:'3456@3456.com',
          owner_name:'Owner3456 Name',
          stage_id:1
        },
      ]);
    });
};


