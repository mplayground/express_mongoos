
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();
var teachers = require('./routes/teachers');

app.use('/teachers', teachers);


app.listen(port);
console.log('server start port ' + port);
