// require in your controllers, if we have multiple controllers we require all of them!
var users = require('./../controllers/users.js');
var path = require('path');

// routing exports a function that takes app
module.exports = function(app){

    // app.get('/all', function(req, res){
    //     users.index(req, res);
    // });

    // catch all to serve the index
    // make sure your file path matches the name of your angular app folder
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
};