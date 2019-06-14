var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.get('/api/users', function(req, res) {
    var user_id = req.query.id;
  
    console.log(user_id);
    res.send("ok");
  });