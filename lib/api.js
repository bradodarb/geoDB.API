// lib/api.js
var env = process.env.NODE_ENV || "development";
var Sequelize = require('sequelize');

var Util = require('util');
var c = require('../config/config.json')[env]; 

var sequelize = new Sequelize(c.database, c.username, c.password, c.options)





var _cityCheckQueryConstrained = "SELECT TOP %d * FROM dbo.Cities WHERE Weight > -1 AND dbo.Countries.CountryCode IN (%s) AND dbo.Cities.CityName NOT IN (SELECT dbo.Countries.CountryName FROM dbo.Countries) AND dbo.Cities.CityName = '%s' ORDER BY dbo.Cities.Weight DESC";
var _cityCheckQuery = "SELECT TOP %d * FROM dbo.Cities WHERE Weight > -1 AND dbo.Cities.CityName NOT IN (SELECT dbo.Countries.CountryName FROM dbo.Countries) AND dbo.Cities.CityName = '%s' ORDER BY dbo.Cities.Weight DESC";


var _countryCheckQueryConstrained = "SELECT TOP %d * FROM dbo.Countries WHERE Weight > -1 AND dbo.Countries.CountryCode_FIPS IN (%s) AND dbo.Countries.CountryName = '%s' ORDER BY dbo.Countries.Weight DESC";
var _countryCheckQuery = "SELECT TOP %d * FROM dbo.Countries WHERE Weight > -1 AND dbo.Countries.CountryName = '%s' ORDER BY dbo.Countries.Weight DESC";

exports.heartbeat = function(request, reply) {

    reply(Date.now()).code(200);
};
exports.geoDB = {
  citiesByNameConstrained: function(request, reply) {

	    var countries =  request.params.countries.split(',');

	    var q = Util.format(_cityCheckQueryConstrained, request.params.count, "'" + countries.join("','") + "'", request.params.name);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
		   	reply(results).code(200);
		  });
  },
  citiesByName: function(request, reply) {

	    var q = Util.format(_cityCheckQuery, request.params.count, request.params.name);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
		   	reply(results).code(200);
		  });
  },
  countriesByNameConstrained: function(request, reply) { 

	    var countries =  request.params.countries.split(',');
	    var q = Util.format(_countryCheckQueryConstrained, request.params.count, "'" + countries.join("','") + "'", request.params.name);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
			reply(results).code(200);
		  });
  },
  countriesByName: function(request, reply) {

	    var q = Util.format(_countryCheckQuery, request.params.count, request.params.name);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
		   	reply(results).code(200);
		  });
  }
};
