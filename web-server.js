// set up ======================================================================
var express  = require('express');
var path 	 = require('path');
var app      = express(); 		
var services = require('./server/api/services')

var port = process.env.PORT || 8080;

var appDir = path.join(__dirname, 'app')
// configuration ===============================================================

app.configure(function() {
	app.use(express.static(__dirname + '/app')); 
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride());
});


	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile(path.join(appDir, 'index.html')); // load the single view file (angular will handle the page changes on the front-end)
	});

	app.get('/api/gettest', function(req, res){console.log("Test");
		});

	app.post('/api/employees', services.create);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
