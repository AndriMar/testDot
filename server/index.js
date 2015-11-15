'use strict';
var express = require('express');

// Path to our public directory

var pub = __dirname + '/..';

// setup middleware

var app = express();
app.use(express.static(pub));

app.set('view engine', 'jade');


app.get('/', function(req, res) {
    res.render('index.jade', {});
});

app.get('/findfasteign', function(req, res) {
    res.render('info.jade', {
        heimilisfang:"Ásakór 12",
        fastumer:'209484',
        matshluti:'020202',
        landsnumer:'24234234',
        bilskur:'Já',
        brunabotamat:'38.900.030',
        fasteignamat:'30.030.303',
        verdmat:'41.900.000'
    });
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Express app started on port %d', port);
