//Required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));


//Set handlebars as view engine
app.set('view engine', 'handlebars');


//Importing routes
var routes = require('./controllers/burgersController.js');

app.use(routes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
