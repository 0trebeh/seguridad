var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var https = require('https');

var app = express();

// setting
app.set('port', 3000);

//mid
//app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var server = https.createServer({
    key: fs.readFileSync('./src/server/certificado_ssl/server-key.pem'),
    cert: fs.readFileSync('./src/server/certificado_ssl/server-cert.pem')
}, app)

// route
app.use('/Server', require('./route/route'));

module.exports.app = app;
module.exports.server = server;