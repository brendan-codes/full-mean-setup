// requires
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// express app
var app = express();

// bodyparser + json
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

// static paths
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(express.static(path.join(__dirname, './static')));

// require configs
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// listen on port
app.listen(8090, function(){
    console.log("App is running on port 8090");
});
