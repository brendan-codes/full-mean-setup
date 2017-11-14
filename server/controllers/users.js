// require mongoose + get User model
var mongoose = require('mongoose');
var User = mongoose.model('User');

// export an object literal
module.exports = {

    // attach methods to our object literal
    index: function(req, res){
        
        // run db queries inside controller methods
        User.find({}, function(req, res){
            res.render('index');
        })
    },

    // blank method
    all: function(req, res){
        // functionality goes here
    }
}