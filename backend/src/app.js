const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const pontoColetaRoute = require('./routes/pontoColeta');



app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use('/', index);
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/pontos-coleta', pontoColetaRoute);




module.exports = app;