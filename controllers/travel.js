const express = require('express');
const router = express.Router();
const Travel = require('../models/travel.js');

// index route
router.get('/', (req, res) => {
	console.log('get');
	Travel.find({}, (error, foundTravel) => {
		res.json(foundTravel);
	});
});

// create index route POST
router.post('/', (req, res) => {
	Travel.create(req.body, (error, createdTravel) => {
		res.json(createdTravel);
	});
});

// delete route
router.delete('/:id', (req, res) => {
	console.log('delete route');
	Travel.findByIdAndRemove(req.params.id, (error, deletedTravel) => {
		res.json(deletedTravel);
	});
});

// update route
router.put('/:id', (req, res) => {
	Travel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedTravel) => {
		res.json(updatedTravel);
	});
});

module.exports = router;
