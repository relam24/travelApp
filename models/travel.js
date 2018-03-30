const mongoose = require('mongoose');
const travelSchema = new mongoose.Schema({
	location: String,
	url: String
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
