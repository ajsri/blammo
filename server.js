var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var webpack = require('webpack');


var config = require('./config.dev.js');
var wconfig = require('./webpack.config.js');
var queries = require('./queries.js');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var app = express();

var compiler = webpack(wconfig);

app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
    publicPath: wconfig.output.publicPath,
    state: { colors: true }
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use(express.static("public"));

var env = 'dev';


function db() {
    return mysql.createConnection({
        host: config.env[env].mysql.host,
        user: config.env[env].mysql.user,
        password: config.env[env].mysql.password,
        database: '47_ammo'
    });
}



app.get('/safe/ammo', function(req, res) {
    var c = db();
    c.connect();
    c.query(queries.safe.ammo, function(err, rows, fields) {
        if(err) throw err;
        res.send(rows)
    });
    c.end();
});

app.post('/safe/ammo/add', function(req, res) {
    if(!req.body.mfgId || !req.body.quantity || !req.body.calId || !req.body.price) {
        res.json({
            error: 'Invalid query params: check your request body',
            request: req.body
        });
    }
    else {
        var mfgId = req.body.mfgId,
            price = req.body.price,
            calId = req.body.calId,
            qty = req.body.quantity;
        var query = 'insert into ammo values("",' + mfgId + ',' + price + ',' + calId + ',' + qty + ')';
        var c = db();
        c.connect();
        c.query(query, function(err, rows, fields) {
            if(err) throw err;
            res.send(200)
        });
        c.end();
    }
});

app.get('/safe/ammo/count', function(req, res) {
    var c = db();
    c.connect();
    c.query(queries.safe.ammoCountByCaliber, function(err, rows, fields) {
        res.send(rows);
    })
    c.end();
});

app.get('/safe/guns', function(req, res) {
    var c = db();
    c.connect();
    c.query(queries.safe.gunsList, function(err, rows, fields) {
        res.send(rows);
    });
    c.end();
});

app.get('/safe/guns/:id*?', function(req, res) {
    var c = db();
    c.connect();
    c.query(queries.safe.gunInfo + req.params.id, function(err, rows, fields) {
        res.send(rows);
    });
    c.end();
});

app.get('/safe/brass/:id*?', function(req, res) {
    var c = db();
    c.connect();
    var query = !req.params.id ? queries.safe.brassCount : queries.safe.brassCount + ' WHERE caliber.shortName = "' + req.params.id + '"';
    c.query(query, function(err, rows, fields) {
        res.send(rows);
    });
    c.end();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.env[env].port, function() {
    console.log('Now listening on port ' + config.env[env].port);
});

