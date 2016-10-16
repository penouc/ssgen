
var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.send('Hello World')
})

app.listen(3456, function(err){
	console.log(err)
	console.log('app listening on port 3456')
})
