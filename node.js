const express = require('express');

//set up express app
const app = express();

//this is the address that receives get requests (/)
app.get('/', function(req,res){
    console.log('GET request')
    res.send({ name: 'Yoshi'});
})

//listen for requests
app.listen(4000, function(){
    console.log('now listening for requests');
});
