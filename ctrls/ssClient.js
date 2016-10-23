const dgram = require('dgram')

// client.bind({
//   address:'127.0.0.1',
//   port: 8001,
//   exclusive: true
// })

function getRandom(){
	return 10000 + Math.floor(Math.random() * 10000)
}


// client.send(message, 6001,'127.0.0.1',(err) => {
// 	console.log(err)
// 	client.close()
// })

function addUser(){
	var port = getRandom();
	var message = `add: {"server_port":${port},"password":"wtf"}`;

	var client = dgram.createSocket('udp4')
	client.bind({
	  address:'127.0.0.1',
	  port: 8001,
	  exclusive: true
	})

	client.send(message, 6001,'127.0.0.1',(err) => {
		console.log(err)
		client.close()
	})

	return message
}

module.exports = {
	addUser : addUser
}