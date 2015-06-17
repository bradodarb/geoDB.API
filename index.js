var Hapi = require('hapi');
//var models = require('./models');

// create the server
var server = new Hapi.Server();
server.connection({ port : 3000 })

// routes
server.route(require('./lib/routes'));
 
server.start(function() {
    console.log('Running on 3000');
  });



// name="GeoLookup.ConnectionString" connectionString="Data Source=sql20,14303;Initial Catalog=GeoLookup;User ID=dojo; Password=theplaceoftheway;Application Name=dlp"
// name="GeoLookup.ConnectionString" connectionString="Data Source=dbdev;Initial Catalog=GeoLookup;User ID=dojo; Password=theplaceoftheway;Application Name=dlp" 