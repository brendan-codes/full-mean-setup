// simple model
var mongoose = require('mongoose');

// define the schema
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// pass the schema and set the model for the entire app
mongoose.model('User', UserSchema);