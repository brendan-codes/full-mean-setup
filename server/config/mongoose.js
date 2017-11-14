// mongoose connect file starts up all our models
var mongoose = require('mongoose');
var fs = require('fs');

// and connects to the proper DB
mongoose.connect('mongodb://localhost/message_board_db1');

// make sure we point to the proper location of models
var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})