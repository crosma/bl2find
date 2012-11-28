var express = require('express');
var app = express();

var prev = [];

app.get('/hello.txt', function(req, res) {

	var start = process.hrtime();

	connection.query('SELECT * FROM user', function(err, rows, fields) {
		if (err) throw err;
		
		var end = process.hrtime();
		var delay = ((end[0] + end[1] / 1000000000) - (start[0] + start[1] / 1000000000)) + 's';
		
		res.write('Response Time: ' + delay + '\n');
		res.write('Data: ' + JSON.stringify(rows) + '\n\n');
		res.write('Array of previous response times: ' + JSON.stringify(prev) + '\n\n');
		res.end();
		
		prev.push(delay);
	});
	
});

var results = [];

app.get('/ping', function(req, res) {

	var sys = require('sys')
	var exec = require('child_process').exec;

	exec("ping crosma.us", function(error, stdout, stderr) {
		results.push(stdout);
	});
	
	res.write('Running ping.');
	res.end();
});



app.get('/results', function(req, res) {
	res.write(results.join('\n'));
	res.end();
});


var port = process.env.PORT || 80;
app.listen(port);
console.log('Listening on port '+port);

/*
var mysql      = require('mysql');
var connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();
*/

