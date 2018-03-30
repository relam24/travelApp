const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

const travelController = require('./controllers/travel.js');
app.use('/travel', travelController);

mongoose.connect('mongodb://localhost:27017/travelApp');
mongoose.connection.once('open', () => {
	console.log('connected to mongod');
});

app.listen(3000, () => {
	console.log('listening');
});
