const express = require('express');
const router = express.Router();

//get a list of ninjas from the database
router.get('/ninjas', function(req,res){
    res.send({type:'GET'});
});


//add a new ninja to the db
router.post('/ninjas', function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

//update a ninja already in the db
router.pull('/ninjas/:id', function(req,res){
    res.send({type:'PULL'});
});

//delete a ninja from the db
router.delete('/ninjas/:id', function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;
