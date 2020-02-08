require('dotenv').config()
const express = require('express')
const sc = require('./controllers/sgController')

const app = express()
const {SERVER_PORT} = process.env

app.use(express.json())
//app.use(express.static(__dirname + '/../build'))

app.post('/api/mail', sc.send)

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
})