const dgram = require('dgram')
const client = dgram.createSocket('udp4')

client.bind({
  address:'127.0.0.1',
  port: 8001,
  exclusive: true
})

const message = 'add: {"server_port":13333,"password":"wtf"}'

client.send(message, 6001,'127.0.0.1',(err) => {
	console.log(err)
	client.close()
})
