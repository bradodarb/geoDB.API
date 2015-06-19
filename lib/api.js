// lib/api.js
var env = process.env.NODE_ENV || "development";
var Sequelize = require('sequelize');

var Util = require('util');
var c = require('../config/config.json')[env]; 

var sequelize = new Sequelize(c.database, c.username, c.password, c.options)





// var _cityCheckQueryConstrained = "SELECT TOP %d * FROM geoDB.cities WHERE Weight > -1 AND geoDB.countries.CountryCode IN (%s) AND geoDB.cities.CityName NOT IN (SELECT geoDB.countries.CountryName FROM geoDB.countries) AND geoDB.cities.CityName = '%s' ORDER BY geoDB.cities.Weight DESC";
// var _cityCheckQuery = "SELECT TOP %d * FROM geoDB.cities WHERE Weight > -1 AND geoDB.cities.CityName NOT IN (SELECT geoDB.countries.CountryName FROM geoDB.countries) AND geoDB.cities.CityName = '%s' ORDER BY geoDB.cities.Weight DESC";


// var _countryCheckQueryConstrained = "SELECT TOP %d * FROM geoDB.countries WHERE Weight > -1 AND geoDB.countries.CountryCode_FIPS IN (%s) AND geoDB.countries.CountryName = '%s' ORDER BY geoDB.countries.Weight DESC";
// var _countryCheckQuery = "SELECT TOP %d * FROM geoDB.countries WHERE Weight > -1 AND geoDB.countries.CountryName = '%s' ORDER BY geoDB.countries.Weight DESC";





var _cityCheckQueryConstrained = "SELECT cityname as cityName, countrycode, weight FROM geoDB.cities WHERE weight > -1 AND countrycode IN (%s) AND cityName NOT IN (SELECT countryname FROM geoDB.countries) AND cityname = '%s' ORDER BY weight DESC LIMIT %d";
var _cityCheckQuery = "SELECT cityname as cityName, countrycode, weight FROM geoDB.cities WHERE weight > -1 AND cityname NOT IN (SELECT countryname FROM geoDB.countries) AND cityname = '%s' ORDER BY weight DESC LIMIT %d";


var _countryCheckQueryConstrained = "SELECT countryname, countrycodefips, weight FROM geoDB.countries WHERE weight > -1 AND countrycodefips IN (%s) AND countryname = '%s' ORDER BY weight DESC LIMIT %d";
var _countryCheckQuery = "SELECT countryname, countrycodefips, weight FROM geoDB.countries WHERE weight > -1 AND countryname = '%s' ORDER BY weight DESC LIMIT %d";



exports.heartbeat = function(request, reply) {

    reply(Date.now()).code(200);
};
exports.geoDB = {
  citiesByNameConstrained: function(request, reply) {

	    var countries =  request.params.countries.split(',');

	    var q = Util.format(_cityCheckQueryConstrained, "'" + countries.join("','") + "'", request.params.name, request.params.count);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
		   	reply(results).code(200);
		  });
  },
  citiesByName: function(request, reply) {

	    var q = Util.format(_cityCheckQuery, request.params.name, request.params.count);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
		   	reply(results).code(200);
		  });
  },
  countriesByNameConstrained: function(request, reply) { 

	    var countries =  request.params.countries.split(',');
	    var q = Util.format(_countryCheckQueryConstrained, "'" + countries.join("','") + "'", request.params.name, request.params.count);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
			reply(results).code(200);
		  });
  },
  countriesByName: function(request, reply) {

	    var q = Util.format(_countryCheckQuery, request.params.name, request.params.count);
		sequelize.query(q, { type: sequelize.QueryTypes.SELECT})
		  .then(function(results) {
		   	reply(results).code(200);
		  });
  }
};
