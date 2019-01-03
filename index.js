const express = require('express');


//set up express app
const app = express();



//initial routes
app.use('/api', require('./routes/api'));
//listen for requests
app.listen(4000, function(){
    console.log('now listening for requests');
});
