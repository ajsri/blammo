var app = require('express')();
var mysql = require('mysql');
var config = require('./config.dev.js');

var env = 'dev';

function db() {
    return mysql.createConnection({
        host: config.env[env].mysql.host,
        user: config.env[env].mysql.user,
        password: config.env[env].mysql.password,
        database: 'codstats'
    });
}
app.get('/record/:uid*?', function(req, res) {
    var query = '';
    if(req.params.uid){
        query = 'SELECT * FROM `record` WHERE GamerTag = "' + req.params.uid + '"';
    }
    else {
        query = 'SELECT * FROM `record`'
    }
    var c = db();
    c.connect();
    c.query(query, function(err, rows, fields){
        if(err) throw err;
        res.send(rows);
    });
    c.end();

});

app.listen(config.env[env].port, function() {
    console.log('Now listening on port ' + config.env[env].port);
});

