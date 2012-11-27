var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
	var body = 'Hello World';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

app.get('/hello.txt', function(req, res){
	res.send('Hello World');
});

var port = process.env.PORT || 80;
app.listen(port);
console.log('Listening on port '+port);





var mysql      = require('mysql');
var connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();



//mysql://:@/heroku_db?reconnect=true