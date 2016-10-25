var app = require('express')();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var config = require('./config.dev.js');

var env = 'dev';

function db() {
    return mysql.createConnection({
        host: config.env[env].mysql.host,
        user: config.env[env].mysql.user,
        password: config.env[env].mysql.password,
        database: '47_ammo'
    });
}

app.use(bodyParser.json());

app.get('/safe/contents', function(req, res) {
    var c = db();
    c.connect();
    c.query(config.queries.safe.contents, function(err, rows, fields) {
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

app.get('/safe/ammo', function(req, res) {
    var c = db();
    c.connect();
    c.query(config.queries.safe.ammoCountByCaliber, function(err, rows, fields) {
        res.send(rows);
    })
    c.end();
});

app.get('/safe/guns', function(req, res) {
    var c = db();
    c.connect();
    c.query(config.queries.safe.gunsList, function(err, rows, fields) {
        console.log(rows);
        res.send(rows);
    });
    c.end();
})

app.listen(config.env[env].port, function() {
    console.log('Now listening on port ' + config.env[env].port);
});

