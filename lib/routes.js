// lib/routes.js

var api = require('./api');

module.exports = [
  {
    method: 'GET',
    path: '/api/cities/{count}/{name}',
    handler: api.geoDB.citiesByName
  },
  {
    method: 'GET',
    path: '/api/cities-constrained/{count}/{name}/{countries}',
    handler: api.geoDB.citiesByNameConstrained
  },
  {
    method: 'GET',
    path: '/api/countries/{count}/{name}',
    handler: api.geoDB.countriesByName
  },
  {
    method: 'GET',
    path: '/api/countries/{count}/{name}/{countries}',
    handler: api.geoDB.countriesByNameConstrained
  }
];
