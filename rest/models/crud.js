// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var jobShema = mongoose.Schema({
	id : String,
	name : String
})

// Model
module.exports = restful.model('Todo', jobShema);
