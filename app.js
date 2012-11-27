var express = require('express');
var app = express();

var prev = [];

app.get('/hello.txt', function(req, res) {

	var query_start_time = new Date().getTime();

	connection.query('SELECT * FROM user', function(err, rows, fields) {
		if (err) throw err;
		
		var delay = new Date().getTime() - query_start_time;
		
		res.write('Response Time: ' + delay + 'ms\n');
		res.write('Data: ' + JSON.stringify(rows) + '\n\n');
		res.write('Array of previous response times: ' + JSON.stringify(prev) + '\n\n');
		res.end();
		
		prev.push(delay+'ms');
	});
	
});


var port = process.env.PORT || 80;
app.listen(port);
console.log('Listening on port '+port);





var mysql      = require('mysql');
var connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();
