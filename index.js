
var express = require('express')
var fs = require('fs')
var transMail = require('./ctrls/mailController')
var ssClient   = require('./ctrls/ssClient')

var app = express()

app.use(express.static(__dirname + '/views', {
	index: 'index.html'
}));

app.get('/sendMail/:id', function(req, res){
	console.log(req.params.id)
	var config = ssClient.addUser();
	transMail.sendMail(req.params.id, config);
	res.send('user ' + req.params.id);
})

app.listen(3456, function(err){
	console.log(err)
	console.log('app listening on port 3456')
})
