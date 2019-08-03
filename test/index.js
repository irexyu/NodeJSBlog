
const express = require('express')

const path = require('path')

const app = new express()

app.use(express.static('public'))

app.get('/', (request, response) => {
	response.json({
		name: 'rex'
	})
})

app.get('/about', (request, response) => {
	response.send({
		name: 'rex'
	})
})

app.listen(3000, () => {
	console.log('App listening on port 3000')
})


// const http = require('http')

// const server = http.createServer((request, response) => {
//   console.log(request.url)

//   response.end('HELLO NODE JS')
// })

// server.listen(3000)