const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv').config({path: './config/parameters.env'});

const MainController = require('./controllers/main');

var app = express();

app.set('port', (process.env.PORT));
app.set('view engine', 'ejs');
app.locals.pretty = true;
app.set('json spaces', 2);

app.use(express.static(__dirname + process.env.PUBLIC_FOLDER));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', MainController.index);
app.get('/scrape', MainController.scrape);

app.listen(app.get('port'), function() {
    console.log('Our app is running on port: ' + app.get('port'));
});
