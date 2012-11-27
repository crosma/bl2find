var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res) {

	var start_time = new Date();

	connection.query('SELECT * FROM user', function(err, rows, fields) {
		if (err) throw err;
		
		var body = 'Hello World';

		res.write('Main list: ' + (new Date().getTime() - start_time.getTime()) + '\n');
		res.write(JSON.stringify(rows));
		res.end();
	});
	
});


var port = process.env.PORT || 80;
app.listen(port);
console.log('Listening on port '+port);





var mysql      = require('mysql');
var connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();
