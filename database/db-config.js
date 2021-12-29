const knex = require('knex');
const knexfile = require('../knexfile');
const enviroment = 'development';

module.exports = knex(knexfile[enviroment]);