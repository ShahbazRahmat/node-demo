var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello world from IdenticalCloud V2!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listing at http://%s:%s', host, port);
});