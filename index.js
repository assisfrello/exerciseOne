const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./src/database/database')

const server_port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./src/routes/posts')(app)

app.listen(server_port,(req, res) => {
    console.log('O Servidor está rodando na porta: ' + server_port);
})