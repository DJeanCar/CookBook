'use strict';

const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'cookbookuser',
    password: 'password',
    database : 'cookbook',
    timezone : "UTC"
  }
});

module.exports = require('bookshelf')(knex);