const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
//get a list of ninjas from the database
router.get('/ninjas', function(req, res, next) {
    res.send({ type: 'GET' });
});


//add a new ninja to the db
router.post('/ninjas', function(req, res, next) {
    //creates a new ninja locally 
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja);
    }).catch(next);
});


//update a ninja already in the db
router.pull('/ninjas/:id', function(req, res, next) {
    res.send({ type: 'PULL' });
});

//delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next) {
    res.send({ type: 'DELETE' });
});

module.exports = router;
