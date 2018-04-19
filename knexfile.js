'use strict';
module.exports = {
 development: {
   client: 'pg',
   connection: 'postgres://localhost/workflow',
 },
 test: {
   client: 'pg',
   connection: 'postgres://localhost/workflow',
 },

 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL
 }
};
